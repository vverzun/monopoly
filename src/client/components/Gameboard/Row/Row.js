import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell/Cell';
import Box from '@material-ui/core/Box';
import style from './Row.scss';
import uuid from 'uuid';

const rowStyles = new Map([
	['top', style.topRow],
	['right', style.rightRow],
	['bottom', style.bottomRow],
	['left', style.leftRow],
]);

const Row = ({cells, type}) => {
	const memoCells = useMemo(() => (
		cells.map((cell) => (
			<Cell key={uuid.v4()}
				players={cell.players}
				house={cell.house}
				hotel={cell.hotel}
			/>
		))
	), [cells]);

	return (
		<Box className={rowStyles.get(type)}>
			{memoCells}
		</Box>
	);
};

Row.propTypes = {
	cells: PropTypes.arrayOf(PropTypes.object).isRequired,
	type: PropTypes.string.isRequired,
};

export default Row;
