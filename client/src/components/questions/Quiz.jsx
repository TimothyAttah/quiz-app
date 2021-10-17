import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import useSound from 'use-sound';
import { asset } from '../assets';

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
  @media (max-width: 520px){
    font-size: 15px;
    line-height: 25px;
    margin-bottom: 30px;
  }
}
@media (max-width: 520px){
  flex-wrap: wrap;
  flex-direction: row;
}
`;

export const Answers = styled.div`
width: 98%;
display: flex;
justify-content: center;
flex-wrap: wrap;
${props => props.primary && css`
max-width: 350px;
width: 100%;
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
@media (max-width:540px){
 flex-direction: column;
 margin: 0 10px;
  ${props => props.primary && css`
    max-width: 180px;
    font-size: 14px;
    padding: 10px 2px;
    font-weight: 500;
    margin: 10px auto;
  `}
}
`;

export const Quiz = ( {
  data, questionNumber, setQuestionNumber, setStop
} ) => {
	const [question, setQuestion] = useState(null);
	const [selectedAnswer, setSelectedAnswer] = useState(null);
	const [className, setClassName] = useState('answer');
	const [ letPlay ] = useSound( asset.Play );
	const [correctAnswer] = useSound(asset.Correct);
	const [wrongAnswer] = useSound(asset.Wrong);

	useEffect(() => {
		letPlay();
	}, [letPlay]);

	useEffect(() => {
		setQuestion(data[questionNumber - 1]);
	}, [data, questionNumber]);

	const delay = (duration, callback) => {
		setTimeout(() => {
			callback();
		}, duration);
	};

	const handleClick = answer => {
		setSelectedAnswer(answer);
		setClassName(' active');
		delay(3000, () => setClassName(answer.correct ? 'correct' : 'wrong'));
		delay(5000, () => {
			if (answer.correct) {
				correctAnswer();
				delay(1000, () => {
					setQuestionNumber(prev => prev + 1);
					setSelectedAnswer(null);
				});
			} else if (data.length === answer.correct) {
				setQuestionNumber(null);
				setSelectedAnswer(null);
				setStop(true);
			} else {
				wrongAnswer();
				delay(1000, () => {
					setStop(true);
				});
			}
		});
	};

	return (
		<QuizContainer>
			{data.length + 1 > questionNumber ? (
				<div className='question'>{question?.question}</div>
			) : (
				setStop(true)
			)}
			<Answers>
				{question?.answers.map(answer => (
					<Answers
						primary
						className={selectedAnswer === answer ? className : 'answer'}
						onClick={() => handleClick(answer)}
					>
						{answer.text}
					</Answers>
				))}
			</Answers>
		</QuizContainer>
	);
};

Quiz.propTypes = {
  data: PropTypes.func.isRequired,
  questionNumber: PropTypes.number.isRequired,
  setQuestionNumber: PropTypes.number.isRequired,
  setStop: PropTypes.bool.isRequired
};
