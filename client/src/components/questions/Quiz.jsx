import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';
import { asset } from '../assets';
import { QuizContainer, Answers } from './QuizStyles';

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
