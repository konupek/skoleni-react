import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import test from './reducers/test';
import timeline from './reducers/timeline';
import navigation from './reducers/navigation';

const identity = x => {
	console.log(x);
};

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(thunk, __DEV__ ? logger : identity)(createStore);

const reducer = combineReducers({
  test,
  navigation,
  timeline
});

export default () => createStoreWithMiddleware(reducer);
