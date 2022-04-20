import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';
import Button from '@material-ui/core/Button';
import style from './CardDraw.scss';
import communityChest from '../../../../resources/communityChest.png';
import chance from '../../../../resources/chance.png';
import {cardDraw} from '../../../../request/request';

const CardDraw = ({cardType}) => {
    const inputType = useSelector(state => state.player.inputType);
    const onCardDraw = useCallback(() => cardDraw(cardType), []);    
    
    return (
        <Button className={style[`${cardType}`]}
            onClick={onCardDraw}
            disabled={inputType !== cardType}>
                
            <img alt='card image' src={cardType === 'chance' ? chance : communityChest}/>
        </Button>
    );
}

export default CardDraw;