import React from 'react';
import PropTypes from 'prop-types';
import Player from '../atoms/Player';

const Leaderboard = ({players}) => {
	const sortedPlayers = players.sort((p1, p2) => p2.balance - p1.balance);

	return (
		<table>
			<caption>Leaderboard</caption>
			<tbody>
				<tr>
					<th>Position</th>
					<th>Player</th>
					<th>Balance</th>
				</tr>
				{sortedPlayers.map((player, position) => (
					<Player
						{...player}
						position={position}
						key={player.id}
					/>
				))}
			</tbody>
		</table>
	);
};

Leaderboard.propTypes = {
	players: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Leaderboard;
