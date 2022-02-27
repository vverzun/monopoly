const events = {
    PLAYER_ADD: 'player-add',
    PLAYER_READY: 'player-ready',
    PLAYER_PASS_GO: 'player-pass-go', 
    PLAYER_ON_PROPERTY: 'player-on-property',
    PLAYER_ON_CARD_DRAW: 'player-on-card-draw',
    PLAYER_ON_TAX: 'player-on-tax',
    PLAYER_ON_JAIL: 'player-on-jail',                     
    PLAYER_BID: 'player-bid',
    PLAYER_LEAVE_AUCTION: 'player-leave-auction',
    PLAYER_DICE_ROLL_RESULT: 'player-dice-roll-result', 
    PLAYER_CARD_NUMBER_RESULT: 'player-card-number-result',
    PLAYER_DECISION_RESULT: 'player-decide',
    UPDATE: 'update',
    ERROR: 'error',
    PING: 'ping',
    PONG: 'pong'
};

export default events;