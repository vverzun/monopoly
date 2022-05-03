import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import style from './TradeItemBox.scss';
import uuid from 'uuid';

const TradeItemBox = (props) => {
	const {
		type,
		money,
		captionText,
		tradeItems,
		onItemSelect,
		onMoneyChange,
	} = props;

	const memoItems = useMemo(() => (
		tradeItems.map((item) => (
			type === 'tradeRequest' ?
				<FormControlLabel key={uuid.v4()}
					control={<Checkbox size='small' onChange={onItemSelect} name={item.title}/>}
					label={item.title}
				/> : <Typography key={uuid.v4()} className={style.itemText}>{item}</Typography>
		))
	), [tradeItems]);

	return (
		<Box className={style.tradeItemBox}>
			<Typography className={style.captionText}>
				{captionText}
			</Typography>
			<Box>
				<FormControl className={style.tradeItemList}>
					<FormGroup>
						{memoItems}
					</FormGroup>
				</FormControl>
			</Box>
			<TextField className={style.moneyInput}
				disabled={type === 'tradeResponse'}
				value={money}
				onChange={onMoneyChange}
				variant='outlined'
				size='small'
				label='Money'
			/>
		</Box>
	);
};

TradeItemBox.propTypes = {
	type: PropTypes.string,
	money: PropTypes.number,
	captionText: PropTypes.string,
	tradeItems: PropTypes.arrayOf(PropTypes.object),
	onItemSelect: PropTypes.func.isRequired,
	onMoneyChange: PropTypes.func.isRequired,
};

export default TradeItemBox;
