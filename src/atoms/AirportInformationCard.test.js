import React from 'react';
import renderer from 'react-test-renderer';

import AirportDetailsCard from './AirportInformationCard';

// Performing a shallow render unit test
// Could be expanded to traverse the DOM tree and make sure Component is showing correct details as per https://reactjs.org/docs/test-renderer.html
describe('airport information card', () => {
  let item = {};
  let component;
  let testInstance;

  beforeEach(() => {
    item = {
      airportCode: 'AAA',
      internationalAirport: false,
      domesticAirport: false,
      regionalAirport: false,
      onlineIndicator: false,
      eticketableAirport: false,
      location: {
        aboveSeaLevel: -99999,
        latitude: 17.25,
        latitudeRadius: -0.304,
        longitude: 145.3,
        longitudeRadius: -2.5395,
        latitudeDirection: 'S',
        longitudeDirection: 'W'
      },
      airportName: 'Anaa',
      city: {
        cityCode: 'AAA',
        cityName: 'Anaa',
        timeZoneName: 'Pacific/Tahiti'
      },
      country: {
        countryCode: 'PF',
        countryName: 'French Polynesia'
      },
      region: {
        regionCode: 'SP',
        regionName: 'South Pacific'
      }
    };

    component = renderer.create(<AirportDetailsCard item={item} />);
    testInstance = component.root;
  });

  it('has correct structure', () => {
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has correct value for region', () => {

    const spans = testInstance.findAll((el) => {
      return el.type === 'span'
    });

    expect(spans[0].children).toEqual(['South Pacific']);
  });

});
