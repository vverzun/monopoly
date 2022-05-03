import Player from '../Player/Player.mjs';
import Auction from '../Auction/Auction.mjs';
import serializeCurrentGameData from '../Banker/helpers/serializeCurrentGameData.mjs';
import restorePlayerInstances from '../Banker/helpers/restorePlayerInstances.mjs';
import {addMembersToAuction, conditionedPlayers} from './helpers/players.mjs';
import validateLogIn from '../error/validateLogIn.mjs';
import applyBoardMove from './helpers/applyBoardMove.mjs';
import applyProperty from './helpers/applyProperty.mjs';
import applyAuctionLeave from './helpers/applyAuctionLeave.mjs';
import applyBankrupt from './helpers/applyBankrupt.mjs';
import applyInput from './helpers/applyInput.mjs';
import applyTrade from './helpers/applyTrade.mjs';
import applyBuilding from './helpers/applyBuilding.mjs';
import response from '../../server/response/response.mjs';

class Banker {
	constructor(logger) {
		this.clients = new Map();
		this.players = new Map();
		this.isGameStarted = false;
		this.holdProperty = {};
		this.auction = {
			auctionData: {},
		};
		this.capacity = {
			house: 32,
			hotel: 12,
		};
		this.logger = logger;
	};

	static create(logger) {
		return new Banker(logger);
	};

	getData() {
		return serializeCurrentGameData(this);
	};

	restoreGameData(gameData) {
		for (const key in this) {
			if (key in gameData) {
				this[key] = gameData[key];
			};
		};

		restorePlayerInstances(this, gameData);
	};

	connectPlayer(state, ws) {
		if (this.isGameStarted) {
			if (this.players.has(state.player.id)) {
				ws.id = state.player.id;
				this.clients.set(ws.id, ws);
			} else {
				ws.close(); // no intruders allowed
			};
		};

		response.connectPlayer(ws, this);
	};

	offerTrade(tradeData) {
		const filter = (obj) => (
			Object.fromEntries(Object.entries(obj).filter((item) => item[1] === true))
		);
		tradeData.player.items = filter(tradeData.player.items);
		tradeData.partner.items = filter(tradeData.partner.items);
		this.findPlayer(tradeData.offerTo).tradeOffer = tradeData;
		response.offerTrade(tradeData.offerTo, tradeData);
		this.findPlayer(tradeData.offerTo).setInput('tradeDecision');
	};

	processBoardMove(player, diceRoll, isGoBonus = true) {
		applyBoardMove(this, player, diceRoll);
		player.move(diceRoll, this.players, isGoBonus);
	};

	addPlayer(name, ws) {
		validateLogIn(name, this.players.size, this.isGameStarted);
		this.clients.set(ws.id, ws);
		this.players.set(ws.id, Player.create(ws.id, name, this.logger));
		response.addPlayer(ws.id, name, this);
	};

	findPlayer(id) {
		return this.players.get(id);
	};

	setPlayerReady(player, status, value) {
		player.changeStatus(status, value, this);

		if (conditionedPlayers(this.players, 'isReady') === this.players.size) {
			this.isGameStarted = true;
			this.logger.log(`Game has started.`);
			response.startGame(this.players);
		};
	};

	startAuction(property) {
		this.auction = Auction.create(this.players, property, this.logger);
		addMembersToAuction(this);
	};

	processProperty(player, property, diceAmount) {
		applyProperty(player, property, diceAmount, this);
	};

	processPlayerLeaveAuction(player) {
		applyAuctionLeave(player, this.players, this, this.auction);
	};

	processTrade(player, decision) {
		if (decision === 'accept') {
			applyTrade(player, this);
			response.trade(player, this.findPlayer(player.tradeOffer.offerFrom), this.players);
		} else {
			player.tradeOffer = {};
		};
	};

	processBuilding(player, buildingData) {
		applyBuilding(player, buildingData, this.capacity, this.players);
	};

	processInput(player, input) {
		applyInput(player, input, this);
	};

	processBankrupt(player) {
		applyBankrupt(player, this);
	};

	removeClient(id) {
		if (this.clients.has(id)) {
			this.clients.delete(id);
			response.playerDisconnected(this);
		};
	};
};

export default Banker;
