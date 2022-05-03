import applyCardDraw from './helpers/applyCardDraw.mjs';
import applyPropertyDecision from './helpers/applyPropertyDecision.mjs';
import applyPrisonEscape from './helpers/applyPrisonEscape.mjs';
import applyPropertyMortgage from './helpers/applyPropertyMortgage.mjs';
import processRentAmount from './helpers/processRentAmount.mjs';
import updateBuilding from './helpers/updateBulding.mjs';
import {validateBankruptBalance} from '../error/bankrupt.mjs';
import applyBankrupt from './helpers/applyBankrupt.mjs';
import response from '../../server/response/response.mjs';

class Player {
	constructor(id, name, logger) {
		this.id = id;
		this.name = name;
		this.balance = 1500;
		this.position = 0;
		this.property = new Map();
		this.isLoggedIn = true;
		this.isAuction = false;
		this.isReady = false;
		this.isPrisoner = false;
		this.freePrisonEscape = 0;
		this.nextRentTimes = 0;
		this.card = {},
		this.inputType = '',
		this.tradeOffer = {},
		this.logger = logger;
		this.payment = {
			lastPayedTo: '',
			owesTo: '',
			debt: 0,
			isBankrupt: false,
		};
	};

	static create(id, name, logger) {
		logger.log(`${name} joined game.`);
		return new Player(id, name, logger);
	};

	retrieveData(data) {
		for (const key in this) {
			if (key in data && key !== 'logger') {
				this[key] = data[key];
			};
		};
		this.property = new Map(data.property.map((item) => [item.id, item]));
	};

	processPrisonEscape(escapeType) {
		applyPrisonEscape(escapeType, this);
	};

	processPropertyDecision(decision, banker) {
		applyPropertyDecision(decision, this, banker);
	};

	processCardDraw(cardType, banker) {
		applyCardDraw(cardType, banker, this);
		response.popCard(this.id, this.card);
	};

	processPropertyMortgage(propertyId, isMortgaged) {
		applyPropertyMortgage(propertyId, isMortgaged, this);
	};

	buyProperty(property, price, players, previousOwner) {
		this.changeBalance(-Math.abs(price), previousOwner);
		this.property.set(property.id, property);
		this.logger.log(`${this.name} bought a ${property.title}`);
		response.buyProperty(this.id, property, players);
	};

	payRent(property, owner, diceAmount) {
		processRentAmount(property, owner, this, diceAmount);
	};

	setInput(inputType) {
		this.inputType = inputType;
		response.setInput(this.id, inputType);
	};

	changeStatus(status, value, banker) {
		this[status] = value;
		response.changeStatus(this.id, status, value, banker);
	};

	buyBuilding({building, propertyId}, players) {
		updateBuilding(building, this.property.get(propertyId), 'buy');
		response.applyBuilding(this.id, this.property, players);
		this.changeBalance(-Math.abs(this.property.get(propertyId).buildingPrice));
		this.logger.log(`${this.name} bought a ${building} on ${this.property.get(propertyId).title}`);
	};

	sellBuilding({building, propertyId}, players) {
		updateBuilding(building, this.property.get(propertyId), 'sell');
		response.applyBuilding(this.id, this.property, players);
		this.changeBalance(this.property.get(propertyId).buildingPrice / 2);
		this.logger.log(`${this.name} sold a ${building} on ${this.property.get(propertyId).title}`);
	};

	changeBalance(amount, payTo = 'bank') {
		validateBankruptBalance(amount, this);
		this.balance += amount;
		applyBankrupt(amount, payTo, this);
		this.logger.log(`${this.name}'s amount changed by ${amount}`);
		response.changeBalance(this.id, this.balance);
	};

	move(diceRoll, players, isGoBonus) {
		const nextPosition = (this.position + diceRoll) % 40;

		if (nextPosition < this.position && isGoBonus) {
			this.changeBalance(200);
		};

		this.position = nextPosition;
		response.move(players);
	};
};

export default Player;
