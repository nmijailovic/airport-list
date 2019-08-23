import React from 'react';
import { Link } from 'react-router-dom';

import ErrorBoundary from '../errors/ErrorBoundary';
import NavBar from '../molecule/NavBar';
import AirportDetailsCard from '../atoms/AirportInformationCard';

import './AirportDetailsPage.sass';

/**
 * Airport Details Page shows relevant information about the selected Airport
 * Being a simple Page, haven't created Components for Title/Body and Title List, in a more complex
 * scenario it would be preferable to have Components as described
 * @param {*} props
 */
const AirportDetailsPage = props => {
  // de-construct location state as item from props
  const {
    location: { state: item }
  } = props;

  return (
    <ErrorBoundary>
      <main>
        <header>
          <NavBar {...props} />
        </header>

        <section className="section">
          <div className="container">
            <AirportDetailsCard {...props} item={item} />
            <div className="has-text-centered padded">
              <Link className="button is-primary" to={{ pathname: '/', state: { index: item.index } }}>
                Go Back
              </Link>
            </div>
          </div>
        </section>
      </main>
    </ErrorBoundary>
  );
};

export default AirportDetailsPage;
