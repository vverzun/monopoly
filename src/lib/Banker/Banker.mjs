import Player from '../Player/Player.mjs';
import Auction from '../Auction/Auction.mjs';
import utils from '../utils/utils.mjs';
import {conditionedPlayers, addMembersToAuction} from './helpers/players.mjs';
import validateLogIn from '../Error/validateLogIn.mjs';
import applyProperty from './helpers/applyProperty.mjs';
import applyAuctionLeave from './helpers/applyAuctionLeave.mjs';
import applyBankrupt from './helpers/applyBankrupt.mjs';
import applyInput from './helpers/applyInput.mjs';
import applyTrade from './helpers/applyTrade.mjs';
import applyBuilding from './helpers/applyBuilding.mjs';

class Banker {
	constructor(logger) {
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

	get gameData() {
		return {
			players: utils.mapToArray(this.players),
			isGameStarted: this.isGameStarted,
			playersCount: this.players.size,
			readyCount: conditionedPlayers(this.players, 'isReady'),
			holdProperty: this.holdProperty,
			auctionData: this.auction.auctionData,
			logData: this.logger.logData,
		};
	};

	static create(logger) {
		return new Banker(logger);
	};

	addPlayer(ws, name) {
		validateLogIn(this.players.size, this.isGameStarted);
		this.players.set(ws.id, Player.create(ws.id, name, this.logger));
	};

	findPlayer(id) {
		return this.players.get(id);
	};

	setPlayerReady(player, status, value) {
		player.changeStatus(status, value);

		if (this.gameData.readyCount === this.gameData.playersCount) {
			this.isGameStarted = true;
			this.logger.log(`Game has started.`);
		};
	};

	startAuction(property) {
		this.auction = Auction.create(this.players, property, this.logger);
		addMembersToAuction(this.players);
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
		this.players.delete(id);
		if (this.players.size === 0) {
			this.isGameStarted = false;
			this.logger.clear();
		}
	};
};

export default Banker;
