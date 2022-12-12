import React from 'react';
import './Buttons.css';
import { useContext } from 'react';
import { GameContext, GameContextType } from '../../context/GameContext';

export const Buttons = () => {
	const {
		setComputerChoice,
		setUserChoice,
		setResult,
		isToggled,
		setisToggled,
	} = useContext(GameContext) as GameContextType;
	const choices = ['rock', 'paper', 'scissors'];

	const handleClick = (value: string) => {
		const randomChoice = choices[Math.floor(Math.random() * choices.length)];
		setComputerChoice(randomChoice);
		setUserChoice(value);

		switch (value.concat(randomChoice)) {
			case 'scissorspaper':
			case 'paperrock':
			case 'rockscissors':
				setResult('YOU WIN!');
				break;
			case 'paperscissors':
			case 'scissorsrock':
			case 'rockpaper':
				setResult('YOU LOSE!');
				break;
			case 'rockrock':
			case 'paperpaper':
			case 'scissorsscissors':
				setResult(`IT'S A DRAW`);
				break;
		}
	};

	return (
		<div className='button-box'>
			<div className='paper-box'>
				<button
					className='button-paper'
					onClick={() => {
						handleClick('paper');
						setisToggled(!isToggled);
					}}
				></button>
			</div>
			<div className='rock-box'>
				<button
					className='button-rock'
					onClick={() => {
						handleClick('rock');
						setisToggled(!isToggled);
					}}
				></button>
			</div>
			<div className='scissors-box'>
				<button
					className='button-scissors'
					onClick={() => {
						handleClick('scissors');
						setisToggled(!isToggled);
					}}
				></button>
			</div>
		</div>
	);
};
