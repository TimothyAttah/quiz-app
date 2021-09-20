import React from 'react';
import styled from 'styled-components';
import { MainContainer } from './styles/Styles';
import { images } from './components/images';
import { moneyPyramid } from './components/Helper';

export const MainContent = styled.div`
width: 75%;
/* background: url(${images.BackgroundImage}); */
background: linear-gradient(to bottom, rgba(0,0,0,0), #020230), url(${images.BackgroundImage});
`;
export const Pyramid = styled.div`
width: 25%;
display: flex;
align-items: center;
justify-content: center;
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
  return (
    <MainContainer>
      <MainContent>Moan</MainContent>
      <Pyramid>
        <MoneyList>
          { moneyPyramid.map( money => (
            <li className="moneyListItem active">
              <span className="number">{ money.id }</span>
              <span className="amount">{money.amount}</span>
            </li>
          ))}
        </MoneyList>
      </Pyramid>
    </MainContainer>
  );
};
