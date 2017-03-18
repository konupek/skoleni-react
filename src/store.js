import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import counter from './reducers/counter';
import navigation from './reducers/navigation';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const reducer = combineReducers({
  counter,
  navigation,
});

const store = createStoreWithMiddleware(reducer);

export default store;
