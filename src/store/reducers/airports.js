// Airport Reducer, holds data on
// 1) airports - AirPort Data (from the API call)
// 2) lastLoaded - time data was last retrieved, so we can invalidate

import { CACHE_DATA } from '../actiontypes';

const initialState = {
  airports: null,
  lastLoaded: null
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CACHE_DATA:
      return {
        ...state,
        data: action.data,
        lastLoaded: Date.now()
      };
    default:
      return state;
  }
}
