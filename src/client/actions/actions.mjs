import {ws} from '../components/page/App';
import {gameEvents} from '../../server/events.mjs';
import {inputEvents} from '../../server/events.mjs';
import communityChestMock from '../../lib/mock/communityChestMock';
import chanceMock from '../../lib/mock/chanceMock';

const actions = {
	addPlayer(name) {
		const request = {
			type: gameEvents.NEW_PLAYER_JOIN,
			name: name,
		};

		ws.send(JSON.stringify(request));
	},

	submitPlayerBid(bid) {
		const request = {
			type: gameEvents.INPUT,
			input: {
				type: inputEvents.BID,
				bid: bid,
			},
		};

		ws.send(JSON.stringify(request));
	},


	sendPlayerDecision(decision) {
		const request = {
			type: gameEvents.INPUT,
			input: {
				type: inputEvents.PROPERTY_DECISION,
				decision: decision,
			},

		};

		ws.send(JSON.stringify(request));
	},


	submitDiceRollResult(diceAmount) {
		const request = {
			type: gameEvents.INPUT,
			input: {
				type: inputEvents.DICE_ROLL,
				diceAmount: diceAmount,
			},
		};

		ws.send(JSON.stringify(request));
	},

	submitCardNumber(number, playerData) {
		const request = {
			type: gameEvents.INPUT,
			input: {
				type: inputEvents.CARD,
				card: playerData.input.type === 'chance' ? chanceMock[number] : communityChestMock[number],
			},
		};

		ws.send(JSON.stringify(request));
	},

	changePlayerStatus() {
		const request = {
			type: gameEvents.READY,
		};

		ws.send(JSON.stringify(request));
	},


	playerLeaveAuction() {
		const request = {
			type: gameEvents.LEAVE_AUCTION,
		};

		ws.send(JSON.stringify(request));
	},

	leavePrison(escapeType) {
		const request = {
			type: gameEvents.ESCAPE_PRISON,
			escapeType: escapeType,
		};

		ws.send(JSON.stringify(request));
	},

	buildingAction(propertyId, value) {
		const [building, action] = value.split('/');
		const request = {
			type: gameEvents.BUILDING,
			buildingData: {
				building: building,
				propertyId: propertyId,
				action: action,
			},
		};

		ws.send(JSON.stringify(request));
	},

	mortgageProperty(propertyId, value) {
		const request = {
			type: gameEvents.MORTGAGE,
			propertyId: propertyId,
			isMortgaged: value === 'mortgage',
		};

		ws.send(JSON.stringify(request));
	},

	trade(propertyId, newOwner, value) {
		const request = {
			type: gameEvents.TRADE,
			tradeData: {
				newOwner: newOwner,
				propertyId: propertyId,
				amount: 100,
				item: value,
			},
		};

		ws.send(JSON.stringify(request));
	},

	playerOnBankrupt() {
		const request = {
			type: gameEvents.BANKRUPT,
		};

		ws.send(JSON.stringify(request));
	},
};

export default actions;
