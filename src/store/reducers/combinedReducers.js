import { combineReducers } from 'redux';

// below is used to store routing information into redux store
import { routerReducer } from 'react-router-redux';

import airports from './airports';

const appReducer = combineReducers({
  routing: routerReducer,
  airports
});

const rootReducer = (state, action) => {
  // cleanup in case we had a logout which we don't in this case
  if (action.type === 'LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
