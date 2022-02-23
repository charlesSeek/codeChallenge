import React, { useContext, useEffect } from 'react';
import Store from '../../context';
import questions from '../../questions.json';
import { Question } from '../../context';
import QuestionForm from '../../components/QuestionForm/QuestionForm';
import './QuestionFormsContainer.css';

const QuestionsContainer = () => {
  const { dispatch, state } = useContext(Store);
  const renderForm = () => {
    const count = state.count;
    const [question] = state.questions.filter(
      (qt: Question, idx: number) => idx === count
    );
    return question?.id ? <QuestionForm data={question} /> : null;
  };
  useEffect(() => {
    dispatch({
      type: "INITIAL_QUESTIONS",
      initialPayload: questions
    });
  }, [dispatch]);
  return (
  <div className='forms-container'>
    <p>{`Question ${state.count + 1}:`}</p>
    {renderForm()}
  </div>
  );
};

export default QuestionsContainer;