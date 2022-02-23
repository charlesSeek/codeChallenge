import React from 'react';
import { Question } from '../../context';

interface ScoreProps {
  answer: { [key: string]: string };
  questions: Question[];
}

const Score = (props: ScoreProps) => {
  const { answer, questions } = props;
  let count = 0;
  questions.forEach((question: Question) => {
    const { id, correctAnswer } = question;
    if (correctAnswer === answer[id]) {
      count++;
    }
  });
  return <h3>{`Score: ${((count * 100) / questions.length).toFixed(2)}`}</h3>;
};

export default Score;