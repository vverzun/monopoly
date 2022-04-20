import React, {useCallback, useState} from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import style from './DiceRoll.scss';
import {boardMove} from '../../../../request/request';

const dieSymbol = new Map([
    [1, '\u2680'],
    [2, '\u2681'],
    [3, '\u2682'],
    [4, '\u2683'],
    [5, '\u2684'],
    [6, '\u2685'],
]);

const DiceRoll = () => {
    const [dice, setRoll] = useState([]);

    const onDiceRoll = useCallback(() => {
        const die1 = Math.floor(6 * Math.random()) + 1;
        const die2 = Math.floor(6 * Math.random()) + 1;
        setRoll([die1, die2]);
        boardMove(die1 + die2);
    }, []);

    return (
        <Box className={style.container}>
            <Button className={style.button}
                variant='contained'
                onClick={onDiceRoll}>ROLL DICES
            </Button>
            <Typography className={style.die}>
                {dieSymbol.get(dice[0])}{dieSymbol.get(dice[1])}
            </Typography>
        </Box>
    );
};

export default DiceRoll;