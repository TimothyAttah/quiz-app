import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-unresolved
// import useSound from 'use-sound';
import { MainContainer } from './styles/Styles';
import { asset } from './components/assets';
import { Data } from './components/Helper';
import { Quiz } from './components/questions/Quiz';
import { Timer } from './components/Timer';
import { Start } from './components/Start';

export const MainContent = styled.div`
width: 75%;
background: linear-gradient(to bottom, rgba(0,0,0,0), #020230), url(${asset.BackgroundImage});
display: flex;
flex-direction: column;
h1{
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
@media (max-width: 750px){
  width: 70%;
}
@media (max-width: 450px){
  width: 60%;
  h1 {
    font-size: 22px;
  }
}
@media (max-width: 280px){
  h1 {
    font-size: 18px;
  }
}
`;
export const Pyramid = styled.div`
width: 25%;
display: flex;
align-items: center;
justify-content: center;
@media (max-width: 750px){
  width: 30%;
}
@media (max-width: 450px){
  width: 40%;
}
`;
export const MainContentTop = styled.div`
height: 30%;
position: relative;
`;
export const MainContentBottom = styled.div`
height: 50%;
`;
export const TimerContainer = styled.div`
width: 70px;
height: 70px;
border-radius: 50%;
border: 5px solid var(--bg-white);
display: flex;
align-items: center;
justify-content: center;
font-size: 30px;
font-weight: 700;
position: absolute;
bottom: 20px;
left: 80px;
@media (max-width: 320px){
  left: 50px;
}
`;

const MoneyList = styled.ul`
width: 100%;
padding: 20px;
li{
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  .number{
    font-size: 18px;
    font-weight: 100;
    width: 30%;
  }
  .amount{
    font-size: 20px;
    font-weight: 300;
  }
}
.active{
   background-color: teal;
}
@media (max-width: 750px){
li {
  .number {
    font-size: 15px;
  }
  .amount{
    font-size: 18px;
  }
}
}
@media (max-width: 540px){
  padding: 10px;
li {
  .number {
    font-size: 12px;
  }
  .amount{
    font-size: 15px;
  }
}
}
@media (max-width: 320px){
  padding: 10px;
li {
  .number {
    font-size: 10px;
  }
  .amount{
    font-size: 12px;
  }
}
}
`;

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
