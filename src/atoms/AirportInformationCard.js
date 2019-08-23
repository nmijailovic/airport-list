import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const AirportDetailsCard = props => {
  // de-construct item from props
  const { item } = props;

  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">{item.airportName}</p>
      </header>

      <div className="card-content">
        <div className="columns">
          <div className="column">
            <div>
              <FontAwesomeIcon icon={item.internationalAirport ? faCheck : faTimes} /> International
            </div>
            <div>
              <FontAwesomeIcon icon={item.domesticAirport ? faCheck : faTimes} /> Domestic
            </div>
            <div>
              <FontAwesomeIcon icon={item.regionalAirport ? faCheck : faTimes} /> Regional
            </div>
            <div>
              <FontAwesomeIcon icon={item.eticketableAirport ? faCheck : faTimes} /> ETickets
            </div>
          </div>
          <div className="column">
            <div>
              <label>Region:</label><span>{item.region.regionName}</span>
              <div>
                <label>Country:</label><span>{item.country.countryName}</span>
              </div>
              <div>
                <label>Time Zone:</label><span>{item.city.timeZoneName}</span>
              </div>
              <div>
                <label>Latitude:</label><span>{(item.location.latitudeDirection === 'S' ? '-' : '') + item.location.latitude}</span>
              </div>
              <div>
                <label>Longitude:</label><span>{(item.location.longitudeDirection === 'W' ? '-' : '') + item.location.longitude}</span>
              </div>
              <div className="is-link">
                <a
                  href={
                    'https://www.google.com/maps/@' +
                    (item.location.latitudeDirection === 'S' ? '-' : '') +
                    item.location.latitude +
                    ',' +
                    (item.location.longitudeDirection === 'W' ? '-' : '') +
                    item.location.longitude +
                    ',12z'
                  }
                >
                  View on Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirportDetailsCard;
