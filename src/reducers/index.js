import { combineReducers } from 'redux';
import currentQuestion from './currentQuestion';
import words from './words';

export default combineReducers({
  currentQuestion,
  words
});