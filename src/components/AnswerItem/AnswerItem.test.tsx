import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AnswerItem from './AnswerItem';

describe('AnswerItem', () => {
  it('should render properly when answer is wrong', async () => {
    const initialValue = {
      topic: 'topic 1',
      answer: 'answer 1',
      correctAnswer: 'correct answer'
    }
    render(<AnswerItem  {...initialValue} />);
    expect(await screen.findByTestId('answer-item-question')).toBeTruthy();
    expect(await screen.findByTestId('answer-item-answer')).toBeTruthy();
    expect(await screen.findByTestId('answer-item-correct')).toBeTruthy();
  });
  it('should render properly when answer is correct', async () => {
    const initialValue = {
      topic: 'topic 1',
      answer: 'answer 1',
      correctAnswer: 'answer 1'
    }
    render(<AnswerItem  {...initialValue} />);
    expect(await screen.findByTestId('answer-item-question')).toBeTruthy();
    expect(await screen.findByTestId('answer-item-answer')).toBeTruthy();
    expect(screen.queryByText('Correct Answer')).toBeNull();
  });
})