import React from 'react';
import '../src/index.css';
import './components/Buttons/Buttons.css';
import { ScoreBoard } from './components/ScoreBoard/ScoreBoard';
import { ResultBattle } from './components/ResultBattle/ResultBattle';
import { useContext } from 'react';
import { GameContext, GameContextType } from './context/GameContext';
import { Buttons } from './components/Buttons/Buttons';

function App() {
	const { isToggled } = useContext(
		GameContext
	) as GameContextType;

	return (
		<div className='App'>
			<ScoreBoard />
			{isToggled ? <Buttons /> : <ResultBattle />}
		</div>
	);
}

export default App;
