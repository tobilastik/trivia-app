import { USER_SCORE, TRIVIA_LIST, TRIVIA_RESULT, RESET_TRIVIA } from '../types';

const setUserScore = (payload: number) => ({
  type: USER_SCORE,
  payload,
});

const setTriviaList = (payload: []) => ({
  type: TRIVIA_LIST,
  payload,
});

const setTriviaResult = (payload: {}) => ({
  type: TRIVIA_RESULT,
  payload,
});

const resetTrivia = (payload: []) => ({
  type: RESET_TRIVIA,
  payload,
});

export default {
  setUserScore,
  setTriviaList,
  setTriviaResult,
  resetTrivia,
};
