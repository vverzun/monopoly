//-----actions-----//
const REGISTER_PLAYER = 'registerPlayer';
const CHANGE_BALANCE = 'changeBalance';
const CHANGE_STATUS = 'changeStatus';
const USE_PRISON_ESCAPE_CARD = 'usePrisonEscapeCard';
const PROMPT_INPUT = 'promptInput';
const BUY_PROPERTY = 'buyProperty'
const ERROR = 'error';

//-----reducer-----//
const initialState = {
    id: '',
    name: '',
    balance: 1500,
    property: [],
    isLoggedIn: false,
    freePrisonEscape: 0,
    isAuction: false,
    isReady: false,
    isPrisoner: false,
    input: {
        type: '',
        isInput: false
    },
    error: ''
};

const player = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_PLAYER: return {
            ...state,  
            id: action.payload.id, 
            name: action.payload.name,
            isLoggedIn: action.payload.isLoggedIn
        };
        case CHANGE_BALANCE: return {
            ...state,
            balance: action.payload.balance
        };
        case CHANGE_STATUS: return {
            ...state,
            [action.payload.status]: action.payload.value
        };
        case USE_PRISON_ESCAPE_CARD: return {
            ...state,
            freePrisonEscape: action.payload.freePrisonEscape
        };
        case PROMPT_INPUT: return {
            ...state,
            input: {
                type: action.payload.type,
                isInput: action.payload.isInput
            }
        };
        case BUY_PROPERTY: return {
            ...state,
            property: [...state.property, action.payload.property]
        };
        case ERROR: return {
            ...state,
            error: action.payload.error
        };
        default: return state;
    };
};

export default player;