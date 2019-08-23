export const HTTP_VERBS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE'
};

/**
 * Call API client with relevant method / params
 * @param {*} query this is the query in string format
 * Result: fields selected
 */
export const FetchResource = (method = HTTP_VERBS.GET, url = '', params = {}, data) => {
  const reqInit = {
    method: method, // *GET, POST, PUT, PATCH, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    redirect: 'manual', // manual, *follow, error
    // referrer: 'no-referrer', // no-referrer, *client
    body: data ? JSON.stringify(data) : undefined // body data type must match "Content-Type" header
  };

  // get the query params
  const qs = getQueryString(params);

  // create the request object
  const request = new Request(url + qs, reqInit);

  // Default options are marked with *
  // catch handles ONLY network request failures (ie. not using HTTP Status Codes)
  return fetch(request)
    .then(response => {
      // console.log('response', response);

      // note we are not handling any token refresh or similar flows here so we only look at 200 OK

      /////////////////////////////////////////////////////////
      // 200s
      /////////////////////////////////////////////////////////
      // parses JSON response into native Javascript objects
      return response.json();
    })
    .catch(error => {
      throw new Error('FETCH Error: ' + error);
    });
};

/**
 * FETCH specification does not handle query parameters, here is a helper function to provide
 * query params in an object to be converted to ?param1=value1&param2=value2
 * Note all params and values are encoded
 * Maybe we can use URLSearchPararms once support is better: https://javascriptplayground.com/url-search-params/
 * @param {*} params
 */
const getQueryString = (params = {}) => {
  const esc = encodeURIComponent;
  const qs = Object.keys(params)
    .map(k => esc(k) + '=' + esc(params[k]))
    .join('&');

  return qs !== '' ? '?' + qs : qs;
};
