import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AnswerList from './AnswerList';

describe('AnswerList', () => {
  it('should render AnswerList Component proper', async () => {
    const initialValue = {
      questions: [
        {
          "topic": "Who played Princess Leia?",
          "type": "TextInput",
          "correctAnswer": "carrie fisher",
          "id": "dBkK7mayj9McFUW2WyNwk"
        },
        {
          "topic": "In what year the original Star Wars film was first released?",
          "type": "SingleSelect",
          "answerOptions": ["1975", "1976", "1977", "1978", "1979"],
          "correctAnswer": "1977",
          "id": "nRgqqQa4065Mo-AhUMp__"
        },
      ],
      answer: {
        "dBkK7mayj9McFUW2WyNwk": "carrie fisher",
        "nRgqqQa4065Mo-AhUMp__": "1977"
      }
    }
    render(<AnswerList {...initialValue} />)
    expect(screen.getAllByTestId('answer-item').length).toBe(2);
  });
})