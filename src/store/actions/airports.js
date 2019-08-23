// ACTION CREATORS go here

import { CACHE_DATA } from '../actiontypes';

export function cacheAirportData(airports) {
  return {
    type: CACHE_DATA,
    data: airports
  };
}
