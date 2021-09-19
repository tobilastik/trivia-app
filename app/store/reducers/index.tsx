import { combineReducers } from 'redux';
import trivia from './trivia';


const appReducer = combineReducers({
    trivia,
});

export default appReducer;

export type State = ReturnType<typeof appReducer>