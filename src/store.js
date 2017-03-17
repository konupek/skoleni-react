import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import counter from './reducers/counter';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const reducer = combineReducers({
  counter,
});

const store = createStoreWithMiddleware(reducer);

export default store;
