import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import houseImg from '../../../../../resources/house.png';
import hotelImg from '../../../../../resources/hotel.png';
import uuid from 'uuid';

const Apartment = ({length, alt, src}) => (
	Array(length).fill(0).map(() => (
		<img key={uuid.v4()} alt={alt} src={src}/>
	))
);

const Buildings = ({house, hotel}) => {
	const memoBuildings = useMemo(() => {
		if (house) {
			return <Apartment length={house} alt='house' src={houseImg}/>;
		}

		if (hotel) {
			return <Apartment length={hotel} alt='hotel' src={hotelImg}/>;
		};
	}, [house, hotel]);

	return (
		<Box>
			{memoBuildings}
		</Box>
	);
};

Buildings.propTypes = {
	house: PropTypes.number,
	hotel: PropTypes.number,
};

export default Buildings;
