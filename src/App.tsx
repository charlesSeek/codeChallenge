import React, { useReducer } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Store from './context';
import reducer from './reducer';
import Home from './pages/Home/Home';
import QuestionsContainer from './pages/QuestionFormsContainer/QuestionFormsContainer';
import Results from './pages/Results/Results';
import { State } from './context';

export default function App() {
  const initialState: State = {
    questions: [],
    count: 0,
    answer: {},
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<QuestionsContainer />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </Router>
    </Store.Provider>
  );
}