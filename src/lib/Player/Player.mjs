import applyCard from './helpers/applyCard.mjs';
import applyPropertyDecision from './helpers/applyPropertyDecision.mjs';
import applyPrisonEscape from './helpers/applyPrisonEscape.mjs';
import applyPropertyMortgage from './helpers/applyPropertyMortgage.mjs';
import processRentAmount from './helpers/processRentAmount.mjs';
import updateBuilding from './helpers/updateBulding.mjs';
import {validateBankruptBalance} from '../Error/bankrupt.mjs';
import applyBankrupt from './helpers/applyBankrupt.mjs';

class Player {
	constructor(id, name, logger) {
		this.id = id;
		this.name = name;
		this.balance = 600;
		this.property = new Map();
		this.isLoggedIn = true;
		this.isAuction = false;
		this.isReady = false;
		this.isPrisoner = false;
		this.freePrisonEscape = 0;
		this.nextRentTimes = 0;
		this.input = {
			type: '',
			isInput: false,
		};
		this.logger = logger;
		this.payment = {
			lastPayedTo: '',
			owesTo: '',
			debt: 0,
			isBankrupt: false,
		};
	};

	get playerData() {
		return {
			id: this.id,
			name: this.name,
			balance: this.balance,
			property: Array.from(this.property.values()),
			isLoggedIn: this.isLoggedIn,
			freePrisonEscape: this.freePrisonEscape,
			isAuction: this.isAuction,
			isReady: this.isReady,
			isPrisoner: this.isPrisoner,
			input: this.input,
		};
	};

	static create(id, name, logger) {
		logger.log(`${name} joined game.`);
		return new Player(id, name, logger);
	};

	processPrisonEscape(escapeType) {
		applyPrisonEscape(escapeType, this);
	};

	processPropertyDecision(decision, banker) {
		applyPropertyDecision(decision, this, banker);
	};

	processCard(players, card) {
		applyCard(players, card, this);
	};

	processPropertyMortgage(propertyId, isMortgaged) {
		applyPropertyMortgage(propertyId, isMortgaged, this);
	};

	buyProperty(property, price, previousOwner) {
		this.changeBalance(-Math.abs(price), previousOwner);
		this.property.set(property.id, property);

		this.logger.log(`${this.name} bought a ${property.title}`);
	};

	payRent(property, owner, diceAmount) {
		processRentAmount(property, owner, diceAmount, this);
	};

	setInput(inputType, isInput) {
		this.input.type = inputType;
		this.input.isInput = isInput;
	};

	changeStatus(status, value) {
		this[status] = value;
	};

	buyBuilding({building, propertyId}) {
		const property = this.property.get(propertyId);
		updateBuilding(building, property, 'buy');
		this.changeBalance(-Math.abs(property.buildingPrice));
		this.logger.log(`${this.name} bought a ${building} on ${property.title}`);
	};

	sellBuilding({building, propertyId}) {
		updateBuilding(building, this.property.get(propertyId), 'sell');
		this.changeBalance(property.buildingPrice / 2);
		this.logger.log(`${this.name} sold a ${building} on ${property.title}`);
	};

	changeBalance(amount, payTo = 'bank') {
		validateBankruptBalance(amount, this);
		this.balance += amount;
		applyBankrupt(amount, payTo, this);
		this.logger.log(`${this.name}'s amount changed by ${amount}`);
	};
};

export default Player;