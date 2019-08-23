import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ReactList from 'react-list';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loader-spinner';

import ErrorBoundary from '../errors/ErrorBoundary';
import NavBar from '../molecule/NavBar';
import { HTTP_VERBS, FetchResource } from '../apiclient/RestClient';

import { cacheAirportData } from '../store/actions/airports';

/**
 * Homepage is the Landing Page of the Application
 * Holds a list of Airports
 * @param {*} props
 */
const Homepage = props => {
  const [loading] = useState(true);
  const [error, setError] = useState(null);

  // When a User clicks on Go Back on the Details page, we want them to see the last selected item from the list as the first item
  // in the view, so they can continue searching if need be
  // Unfortunately, this is currently not working in the react-list component
  const index = props.location.state && props.location.state.index;

  useEffect(() => {
    async function fetchData() {
      try {
        // Once results are cached via Redux, we could check here if they become stale (e.g. we could reload data daily)
        if (!props.airports) {
          // execute API call
          const result = await FetchResource(HTTP_VERBS.GET, '/flight/refData/airport');
          // cache in redux via thunk
          props.cacheAirportData(result);
        }
      } catch (error) {
        // for now just show a simple error, but in real applications we should definitely handle the errors better
        setError(error);
      }
    }
    fetchData();
  }, [loading, props]);

  // process error
  if (error) {
    return (
      <section className="section">
        <h1>Something went wrong.</h1>
      </section>
    );
  }

  // if we are loading the data show the spinner
  if (!props.airports) {
    return (
      <div className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            Preparing the list of Airports - please wait
            <Loader type="Oval" color="#00BFFF" height={200} width={200} />
          </div>
        </div>
      </div>
    );
  }

  // function to render each item
  const renderItem = (index, key) => {
    const item = props.airports[index];
    // store index into item so we can come back to it via Go Back link on the next Page
    item.index = index;

    return (
      <div key={key} className="card cursor" onClick={() => props.history.push('/airport/' + item.airportCode, item)}>
        <div className="card-content">
          {item.airportName} - {item.country.countryName}
          <div className="is-link is-pulled-right">
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <ErrorBoundary>
      <main>
        <header>
          <NavBar {...props} />
        </header>
        <section className="is-fullheight">
          <div className="container">
            <div style={{ overflow: 'auto' }}>
              <ReactList itemRenderer={renderItem} length={props.airports.length} type="uniform" initialIndex={index || 0} />
            </div>
          </div>
        </section>
      </main>
    </ErrorBoundary>
  );
};

const mapStateToProps = state => ({
  airports: state.airports.data
});

const mapDispatchToProps = {
  cacheAirportData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
