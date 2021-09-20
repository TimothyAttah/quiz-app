import React, { useState } from 'react';
import styled from 'styled-components';
import { MainContainer } from './styles/Styles';
import { images } from './components/images';
import { moneyPyramid } from './components/Helper';

export const MainContent = styled.div`
width: 75%;
/* background: url(${images.BackgroundImage}); */
background: linear-gradient(to bottom, rgba(0,0,0,0), #020230), url(${images.BackgroundImage});
display: flex;
flex-direction: column;
`;
export const Pyramid = styled.div`
width: 25%;
display: flex;
align-items: center;
justify-content: center;
`;
export const MainContentTop = styled.div`
height: 50%;
position: relative;
`;
export const MainContentBottom = styled.div`
height: 50%;
`;
export const Timer = styled.div`
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
bottom: 10px;
left: 80px;
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
`;

export const App = () => {
  const [ questionNumber ] = useState( 1 );
  // const [ questionNumber, setQuestionNumber ] = useState( 1 );
  return (
    <MainContainer>
      <MainContent>
        <MainContentTop>
          <Timer>30</Timer>
        </MainContentTop>
        <MainContentBottom>
          questions and answers
        </MainContentBottom>
      </MainContent>
      <Pyramid>
        <MoneyList>
          { moneyPyramid.map( money => (
            <li className={questionNumber === money.id ? 'active' : ''}>
              <span className="number">{ money.id }</span>
              <span className="amount">{money.amount}</span>
            </li>
          ))}
        </MoneyList>
      </Pyramid>
    </MainContainer>
  );
};
