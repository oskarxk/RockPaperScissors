import {
	createContext,
	ReactNode,
	useState,
	Dispatch,
	SetStateAction,
} from 'react';

export type GameContextType = {
	userChoice: string | null;
	setUserChoice: Dispatch<SetStateAction<string | null>>;
	computerChoice: string | null;
	setComputerChoice: Dispatch<SetStateAction<string | null>>;
	result: string | null;
	setResult: Dispatch<SetStateAction<string | null>>;
	isToggled: boolean;
	setisToggled: Dispatch<SetStateAction<boolean>>;
	
};

type Props = {
	children: ReactNode;
};

export const GameContext = createContext<GameContextType | null>(null);

export const GameProvider = ({ children }: Props) => {
	const [userChoice, setUserChoice] = useState<string | null>(null);
	const [computerChoice, setComputerChoice] = useState<string | null>(null);
	const [result, setResult] = useState<string | null>(null);
	const [isToggled, setisToggled] = useState<boolean>(true);

	const values = {
		userChoice,
		setUserChoice,
		computerChoice,
		setComputerChoice,
		result,
		setResult,
		isToggled,
		setisToggled,
	};

	return <GameContext.Provider value={values}>{children}</GameContext.Provider>;
};


