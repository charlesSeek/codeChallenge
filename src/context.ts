import React from 'react';
import { QuestionsContextType } from './reducer';

export type Question = {
  id: string;
  topic: string;
  type: string;
  answerOptions?: string[];
  correctAnswer: string;
};

export type Answer = {
  [key: string]: string;
};

export interface State {
  questions: Question[];
  count: number;
  answer: Answer;
}

const Store = React.createContext<QuestionsContextType>({} as QuestionsContextType);

export default Store;