import React from 'react';
import { Button } from 'antd';
import { useNavigate } from "react-router-dom";
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='home'>
      <h2 data-testid='home-title'>Preezie Wizard Questions</h2>
      <Button
        data-testid='start-btn'
        type='primary'
        onClick={() => navigate('/questions')}
        className='primary-btn'
      >
        Start
      </Button>
    </div>
  );
}

export default Home;