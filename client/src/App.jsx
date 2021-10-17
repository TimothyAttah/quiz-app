import React, { useEffect, useMemo, useState } from 'react';
// eslint-disable-next-line import/no-unresolved
// import useSound from 'use-sound';
import { Data } from './components/Helper';
import { Quiz } from './components/questions/Quiz';
import { Timer } from './components/Timer';
import {
	MainContainer,
	MainContent,
	MainContentBottom,
	MainContentTop,
	MoneyList,
	Pyramid,
	TimerContainer,
	Review,
	StartTimer,
} from './styles/Styles';

export const App = () => {
	const moneyPyramid = useMemo(
		() => [
				{ id: 1, amount: '$ 100' },
				{ id: 2, amount: '$ 200' },
				{ id: 3, amount: '$ 300' },
				{ id: 4, amount: '$ 500' },
				{ id: 5, amount: '$ 1,000' },
				{ id: 6, amount: '$ 2,000' },
				{ id: 7, amount: '$ 4,000' },
				{ id: 8, amount: '$ 8,000' },
				{ id: 9, amount: '$ 16,000' },
				{ id: 10, amount: '$ 32,000' },
				{ id: 11, amount: '$ 64,000' },
				{ id: 12, amount: '$ 125,000' },
				{ id: 13, amount: '$ 250,000' },
				{ id: 14, amount: '$ 500,000' },
				{ id: 15, amount: '$ 1,000,000' },
			].reverse(),
		[]
	);
	const [questionNumber, setQuestionNumber] = useState(1);
	const [stop, setStop] = useState(false);
  const [ start, setStart ] = useState( false );
	const [timer, setTimer] = useState(5);
	const [earned, setEarned] = useState('$ 0');
	// const [ letPlay ] = useSound( asset.Play );
	// const [ correctAnswer ] = useSound( asset.Correct );
	// const [ wrongAnswer ] = useSound( asset.Wrong );

	// useEffect( () => {
	//   letPlay();
	// }, [ letPlay ] );

	useEffect(() => {
		questionNumber > 1
			&& setEarned(moneyPyramid.find(m => m.id === questionNumber - 1).amount);
  }, [ moneyPyramid, questionNumber ] );

  useEffect(() => {
		if (timer === 0) return setStart(true);
		const interval = setInterval(() => {
			setTimer(prev => prev - 1);
		}, 1000);
		return () => clearInterval(interval);
	}, [timer]);

	const handleStartOver = () => {
		window.location = '/';
	};

	return (
		<MainContainer>
			{start ? (
				<>
					<MainContent>
						{stop && Data.length ? (
							Data.length + 1 > questionNumber ? (
								<Review>
									<h1>You earned: {earned}</h1>
									<button type='button' onClick={handleStartOver}>
										Start Again
									</button>
								</Review>
							) : (
								<Review>
									<h1>Congratulations!!! </h1>
									<h3>You earned {earned}</h3>
									<button type='button' onClick={handleStartOver}>
										Start Again
									</button>
								</Review>
							)
						) : (
							<>
								<MainContentTop>
									<TimerContainer>
										<Timer setStop={setStop} questionNumber={questionNumber} />
									</TimerContainer>
								</MainContentTop>
								<MainContentBottom>
									<Quiz
										data={Data}
										setStop={setStop}
										questionNumber={questionNumber}
										setQuestionNumber={setQuestionNumber}
									/>
								</MainContentBottom>
							</>
						)}
					</MainContent>
					<Pyramid>
						<MoneyList>
							{moneyPyramid.map(money => (
								<li className={questionNumber === money.id ? 'active' : ''}>
									<span className='number'>{money.id}</span>
									<span className='amount'>{money.amount}</span>
								</li>
							))}
						</MoneyList>
					</Pyramid>
				</>
			) : (
				<StartTimer>
					<h2>Ready In</h2>
					<h1>{timer}</h1>
				</StartTimer>
			)}
		</MainContainer>
	);
};
