import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QuestionForm from './QuestionForm';
import Store, { State } from '../../context';
import questions from '../../questions.json';

let mockDispatch: any;
let state: State;
const setup = () => {
  mockDispatch = jest.fn();
  state = {
    questions,
    count: 0,
    answer: {},
  }
  render(
    <Store.Provider value={{ state, dispatch: mockDispatch }}>
      <MemoryRouter initialEntries={['/']}>
        <QuestionForm data={questions[0]} />
      </MemoryRouter>
    </Store.Provider>
  );
}

describe('QuestionForm', () => {
  const mockedUsedNavigate = jest.fn();
  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockedUsedNavigate,
  }));
  it('should render properly', async () => {
    setup();
    await waitFor(() => {
      expect(screen.getByTestId('question-form')).toBeTruthy();
    })
    await waitFor(() => {
      expect(screen.getByTestId('form-select')).toBeTruthy();
    })
    await waitFor(() => {
      expect(screen.getByTestId('submit-btn')).toBeTruthy();
    })
    fireEvent.click(screen.getByTestId('submit-btn'));
    await waitFor(() => {
      expect(screen.getByText(/Field required/i)).toBeTruthy();
    })
  });

  it('should select properly', async () => {
    setup();
    fireEvent.select(screen.getByRole('combobox'), {
      target: { value: 'C-3PO'}
    });
    await waitFor(() => {
      expect(screen.getByRole('combobox')).toHaveProperty('value', 'C-3PO');
    })
  })
})