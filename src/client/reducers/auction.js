//-----actions-----//
const SET_UP_AUCTION = 'setUpAuction';
const APPLY_BID = 'applyBid';

//-----reducer-----//
const initialState = {
    lot: {},
    highestBid: '0',
	winner: {},
};

const auction = (state = initialState, action) => {
    switch (action.type) {
        case SET_UP_AUCTION: return {
            ...state,
            lot: action.payload.lot,
            winner: {name: 'Unknown'}
        }
        case APPLY_BID: return {
            ...state,
            highestBid: action.payload.bid,
            winner: action.payload.winner
        } 
        default: return state;
    };
};

export default auction;