import React from 'react';
import { Question } from '../../context';
import AnswerItem from '../AnswerItem/AnswerItem';
import './AnswerList.css';

interface AnswerListProps {
  answer: { [key: string]: string };
  questions: Question[];
}

const AnswerList = (props: AnswerListProps) => {
  const { answer, questions } = props;
  const renderAnswerItems = () => {
    return questions.map((question: Question, idx: number) => {
      const { topic, id, correctAnswer } = question;
      return (
        <AnswerItem
          key={idx}
          topic={topic}
          answer={answer[id]}
          correctAnswer={correctAnswer}
        />
      );
    });
  };
  return (
    <div className='answer-list'>
      {renderAnswerItems()}
    </div>
  );
};

export default AnswerList;