import React from 'react';
import './ResultBattle.css';
import { useContext } from 'react';
import { GameContext, GameContextType } from '../../context/GameContext';
import { PaperLogo } from '../PaperLogo/PaperLogo';
import { RockLogo } from '../RockLogo/RockLogo';
import { ScissorsLogo } from '../ScissorsLogo/ScissorsLogo';

export const ResultBattle = () => {
	const { computerChoice, userChoice, result } = useContext(
		GameContext
	) as GameContextType;

	function refreshPage() {
		window.location.reload();
	}

	const UserPickChoice = () => {
		if (userChoice === 'paper') {
			return <PaperLogo className='picked-img' />;
		} else if (userChoice === 'rock') {
			return <RockLogo className='picked-img' />;
		} else if (userChoice === 'scissors') {
			return <ScissorsLogo className='picked-img' />;
		}
	};

	const renderChoice = () => {
		if (computerChoice === 'paper') {
			return <PaperLogo className='picked-img' />;
		} else if (computerChoice === 'rock') {
			return <RockLogo className='picked-img' />;
		} else if (computerChoice === 'scissors') {
			return <ScissorsLogo className='picked-img' />;
		}
	};

	return (
		<div className='result-box'>
			<div className='result'>
				<div className='your-pick-box'>
					<p className='picked-text-user'>YOU PICKED</p>
					<div className='picked-box-bg-user'>
						<div className='picked-box'>{UserPickChoice()}</div>
					</div>
				</div>
				<div className='computer-pick-box'>
					<p className='picked-text-comp'>THE HOUSE PICKED</p>
					<div className='picked-box-bg-computer'>
						<div className='picked-box'>{renderChoice()}</div>
					</div>
				</div>
			</div>
			<div className='play-button'>
				<p className='yourchoice'>{result}</p>
				<button className='play-again' onClick={refreshPage}>
					Play Again
				</button>
			</div>
		</div>
	);
};
