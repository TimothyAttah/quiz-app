import React, { useEffect, useMemo, useState } from 'react';
// eslint-disable-next-line import/no-unresolved
// import useSound from 'use-sound';
import { Data } from './components/Helper';
import { Quiz } from './components/questions/Quiz';
import { Timer } from './components/Timer';
import { Start } from './components/Start';
import {
  MainContainer,
  MainContent,
  MainContentBottom,
  MainContentTop,
  MoneyList,
  Pyramid,
  TimerContainer
} from './styles/Styles';

export const App = () => {
  const moneyPyramid = useMemo(
    () => [
      { id: 1, amount: '$ 100' },
      { id: 2, amount: '$ 200' },
      { id: 3, amount: '$ 300' },
      { id: 4, amount: '$ 500' },
      { id: 5, amount: '$ 1000' },
      { id: 6, amount: '$ 2000' },
      { id: 7, amount: '$ 4000' },
      { id: 8, amount: '$ 8000' },
      { id: 9, amount: '$ 16000' },
      { id: 10, amount: '$ 32000' },
      { id: 11, amount: '$ 64000' },
      { id: 12, amount: '$ 125000' },
      { id: 13, amount: '$ 250000' },
      { id: 14, amount: '$ 500000' },
      { id: 15, amount: '$ 1000000' },
    ].reverse(),
    []
  );
  const [ username, setUsername ] = useState( null );
  const [ questionNumber, setQuestionNumber ] = useState( 1 );
  const [stop, setStop ] = useState( false );
  const [ earned, setEarned ] = useState( '$ 0' );
  // const [ letPlay ] = useSound( asset.Play );
  // const [ correctAnswer ] = useSound( asset.Correct );
  // const [ wrongAnswer ] = useSound( asset.Wrong );

  // useEffect( () => {
  //   letPlay();
  // }, [ letPlay ] );

  useEffect( () => {
    questionNumber > 1
      && setEarned( moneyPyramid.find( m => m.id === questionNumber - 1 ).amount );
  }, [ moneyPyramid, questionNumber ] );
  return (
    <MainContainer>
      {!username ? (
        <>
          <MainContent>
            {stop ? (
              <h1> You earned: {earned}</h1>
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
        <Start setUsername={setUsername} />
      )}
    </MainContainer>
  );
};
