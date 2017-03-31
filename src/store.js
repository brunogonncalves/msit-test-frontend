import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import createLogger from 'redux-logger';
import promise from 'redux-promise';
import reducers from './redux/reducers/index';

const logger = createLogger();
export const store = createStore(
  reducers,
  applyMiddleware(reduxThunk, promise, logger)
);
