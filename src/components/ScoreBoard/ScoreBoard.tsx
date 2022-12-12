import React from 'react';

import './ScoreBoard.css';

export const ScoreBoard = () => {
	return (
		<div className='frame'>
			<div className='game-name'>
				<p className='game-text'>Rock</p>
				<p className='game-text'>Paper</p>
				<p className='game-text'>Scissors</p>
			</div>
		</div>
	);
};
