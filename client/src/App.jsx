import React from 'react';
import styled from 'styled-components';
import { MainContainer } from './styles/Styles';
import { images } from './components/images';

export const MainContent = styled.div`
width: 75%;
background: url(${images.BackgroundImage});
`;
export const Pyramid = styled.div`
width: 25%;
`;

export const App = () => {
  return (
    <MainContainer>
      <MainContent className="main">Moan</MainContent>
      <Pyramid className="pyramid">money</Pyramid>
    </MainContainer>
  );
};
