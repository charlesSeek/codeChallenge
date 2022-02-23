import React from 'react';
import './AnswerItem.css';

interface AnswerItemProps {
  topic: string;
  answer: string;
  correctAnswer: string;
}

const AnswerItem = (props: AnswerItemProps) => {
  const { topic, answer, correctAnswer } = props;
  const isCorrect = answer === correctAnswer;
  return (
    <div className='answer-item' data-testid='answer-item'>
      <p data-testid='answer-item-question'>{`Question: ${topic}`}</p>
      <p data-testid='answer-item-answer'>{`Your answer: ${answer}`}</p>
      {
        !isCorrect && <p data-testid='answer-item-correct'>{`Correct Answer: ${correctAnswer}`}</p>
      }
    </div>
  );
};

export default AnswerItem;