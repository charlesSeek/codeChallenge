import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import Store from '../../context';
import AnswerList from '../../components/AnswerList/AnswerList';
import Score from '../../components/Score/Score';
import './Results.css';


const Results = () => {
  const { state } = useContext(Store);
  const { questions, answer } = state;
  const navigate = useNavigate();
  return (
    <div className='result-container'>
      <h1>Answer Results:</h1>
      <Score questions={questions} answer={answer} />
      <AnswerList questions={questions} answer={answer} />
      <Button 
        type='primary'
        onClick={() =>{
          navigate('/questions')
        }}
      >
        Retry
      </Button>
    </div>
  );
};

export default Results;