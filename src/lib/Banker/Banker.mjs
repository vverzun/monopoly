import Player from '../Player/Player.mjs';
import Auction from '../Auction/Auction.mjs';
import {addMembersToAuction, conditionedPlayers} from './helpers/players.mjs';
import validateLogIn from '../Error/validateLogIn.mjs';
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
		this.holdOwner = '';
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
	
	processBoardMove(player, cell) {
		applyBoardMove(this, player, cell);
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
			response.startGame();	
		};
	};

	startAuction(property) {
		this.auction = Auction.create(this.players, property, this.logger);
		addMembersToAuction(this);
	};

	processProperty(player, property) {
		applyProperty(player, property, this);
	};

	processPlayerLeaveAuction(player) {
		applyAuctionLeave(player, this.players, this, this.auction);
	};

	processTrade(player, tradeData) {
		applyTrade(player, this.findPlayer(tradeData.newOwner), tradeData);
	};

	processBuilding(player, buildingData) {
		applyBuilding(player, buildingData, this.capacity);
	};

	processInput(player, input) {
		applyInput(player, input, this);
	};

	processBankrupt(player) {
		applyBankrupt(player, this);
	};

	removePlayer(id) {
		this.logger.log(`Player left the game`);
		this.clients.delete(id);
		this.players.delete(id);
		if (this.players.size === 0) {
			this.isGameStarted = false;
			this.logger.clear();
		};
		response.disconnect(this);
	};
};

export default Banker;
