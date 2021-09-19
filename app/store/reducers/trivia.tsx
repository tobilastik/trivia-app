import { TRIVIA_LIST, USER_SCORE, TRIVIA_RESULT, RESET_TRIVIA } from '../types';

const initialstate = {
    trivialList: [],
    userScore: 0,
    triviaResult: []
};

type Action = {
    type: string,
    payload?: any
}

export default (state: any = initialstate, action: Action) => {
    switch (action.type) {
        case TRIVIA_LIST:
            return Object.assign({}, state, {
                trivialList: action.payload,
            });
        case USER_SCORE:
            return {
                ...state,
                userScore: state.userScore + action.payload,
            };
        case TRIVIA_RESULT:
            return {
                ...state,
                triviaResult: [...state.triviaResult, action.payload]
            }
        case RESET_TRIVIA:
            return initialstate

        default:
            return state;
    }
};