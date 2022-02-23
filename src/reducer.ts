import { State, Question } from './context';

type ActionType = 'INITIAL_QUESTIONS' | 'NEXT_QUESTION' | 'PREV_QUESTION';

type QuestionPayload = {
  id: string;
  value: string;
};

export interface Action {
  type: ActionType;
  initialPayload?: Question[];
  questionPayload?: QuestionPayload;
}

export interface QuestionsContextType {
  state: State,
  dispatch: React.Dispatch<Action>,
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'INITIAL_QUESTIONS':
      return {
        ...state,
        count: 0,
        answer: {},
        questions: action!.initialPayload || []
      };
    case 'NEXT_QUESTION':
      return {
        ...state,
        count: state.count + 1,
        answer: {
          ...state.answer,
          [action!.questionPayload!.id]: action!.questionPayload!.value
        }
      };
    case 'PREV_QUESTION':
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
};

export default reducer;
