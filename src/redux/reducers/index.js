import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import exampleReducer from './exampleReducer';

const rootReducer = combineReducers({
  form: formReducer,
  exampleReducer
});

export default rootReducer;
