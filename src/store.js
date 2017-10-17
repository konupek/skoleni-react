import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import test from './reducers/test';
import navigation from './reducers/navigation';

const identity = x => {
	console.log(x);
};

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(thunk, __DEV__ ? logger : identity)(createStore);

const reducer = combineReducers({
  test,
  navigation,
});

export default () => createStoreWithMiddleware(reducer);
