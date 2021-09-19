import Welcome from '../screens/welcome';
import Trivia from '../screens/trivia';
import Result from '../screens/trivia/result';

export const root = [
  {
    name: 'Welcome',
    component: Welcome,
    options: { headerShown: false },
  },
  {
    name: 'TriviaScreen',
    component: Trivia,
    options: { headerShown: false },
  },
  {
    name: 'ResultScreen',
    component: Result,
    options: { headerShown: false },
  },
];
