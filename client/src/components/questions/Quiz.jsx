import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
// import { Data } from '../Helper';

export const QuizContainer = styled.div`
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
.question{
  background: linear-gradient(#100241, #000);
  width: 80%;
  border: 2px solid var(--bg-white);
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  font-size: 20px;
}
`;

export const Answers = styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-wrap: wrap;
${props => props.primary && css`
width: 40%;
padding: 10px;
text-align: center;
background: linear-gradient(#0e0124, #22074d);
border: 1px solid var(--bg-white);
border-radius: 15px;
font-size: 20px;
font-weight: 300;
margin: 0 10px 20px 10px;
cursor: pointer;
:hover{
  background: mediumblue;
}
`}
.active{
  background: mediumblue;
}
.correct{
  animation: correct 3s ease forwards;
}
.wrong{
  animation: wrong 3s ease forwards;
}
`;

export const Quiz = ( {
  // eslint-disable-next-line react/prop-types
  data, questionNumber, setQuestionNumber, setStop
} ) => {
  const [ question, setQuestion ] = useState( null );
  const [ selectedAnswer, setSelectedAnswer ] = useState( null );
  const [ className, setClassName ] = useState( 'answer' );

  useEffect( () => {
    setQuestion( data[ questionNumber - 1 ] );
  }, [ data, questionNumber ] );

  const delay = ( duration, callback ) => {
    setTimeout( () => {
      callback();
    }, duration );
  };

  const handleClick = (answer) => {
    setSelectedAnswer( answer );
    setClassName( ' active' );
    delay( 3000, () => setClassName( answer.correct ? 'correct' : 'wrong' ) );
    delay( 6000, () => {
      if ( answer.correct ) {
        setQuestionNumber( prev => prev + 1 );
        setSelectedAnswer( null );
      } else {
        setStop( true );
      }
    } );
  };

  return (
    <QuizContainer>
      <div className='question'>{question?.question}</div>
      <Answers>
        {question?.answers.map(answer => (
          <Answers
            primary
            className={selectedAnswer === answer ? className : 'answer'}
            onClick={ () => handleClick( answer ) }
          >
            { answer.text }
          </Answers>
        ))}
      </Answers>
    </QuizContainer>
  );
};
