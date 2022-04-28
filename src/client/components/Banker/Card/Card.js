import React from 'react';
import Street from './Street/Street';
import Service from './Service/Service';
import Railway from './Railway/Railway';

const Card = ({card}) => {
	if (card.type === 'street') return <Street card={card}/>;
	if (card.type === 'service') return <Service card={card}/>;
	if (card.type === 'railway') return <Railway card={card}/>;
};

export default Card;
