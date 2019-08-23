// Mocking a fetch API call

export default () => {
  return Promise.resolve({
    json: () =>
      Promise.resolve([
        {
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
        },
        {
          airportCode: 'AAB',
          internationalAirport: false,
          domesticAirport: false,
          regionalAirport: false,
          onlineIndicator: false,
          eticketableAirport: false,
          location: {
            aboveSeaLevel: -99999,
            latitude: 26.45,
            latitudeRadius: -0.4669,
            longitude: 141,
            longitudeRadius: 2.4609,
            latitudeDirection: 'S',
            longitudeDirection: 'E'
          },
          airportName: 'Arrabury',
          city: {
            cityCode: 'AAB',
            cityName: 'Arrabury',
            timeZoneName: 'Australia/Brisbane'
          },
          country: {
            countryCode: 'AU',
            countryName: 'Australia'
          },
          region: {
            regionCode: 'AU',
            regionName: 'Australia'
          }
        },
        {
          airportCode: 'AAC',
          internationalAirport: false,
          domesticAirport: false,
          regionalAirport: false,
          onlineIndicator: true,
          eticketableAirport: false,
          location: {
            aboveSeaLevel: -99999,
            latitude: 31.1,
            latitudeRadius: 0.544,
            longitude: 33.5,
            longitudeRadius: 0.5905,
            latitudeDirection: 'N',
            longitudeDirection: 'E'
          },
          airportName: 'Al Arish',
          city: {
            cityCode: 'AAC',
            cityName: 'Al Arish',
            timeZoneName: 'Africa/Cairo'
          },
          country: {
            countryCode: 'EG',
            countryName: 'Egypt'
          },
          region: {
            regionCode: 'AF',
            regionName: 'Africa'
          }
        },
        {
          airportCode: 'AAE',
          internationalAirport: false,
          domesticAirport: false,
          regionalAirport: false,
          onlineIndicator: false,
          eticketableAirport: false,
          location: {
            aboveSeaLevel: 16,
            latitude: 36.49,
            latitudeRadius: 0.6426,
            longitude: 7.48,
            longitudeRadius: 0.1361,
            latitudeDirection: 'N',
            longitudeDirection: 'E'
          },
          airportName: 'Annaba',
          city: {
            cityCode: 'AAE',
            cityName: 'Annaba',
            timeZoneName: 'Africa/Algiers'
          },
          country: {
            countryCode: 'DZ',
            countryName: 'Algeria'
          },
          region: {
            regionCode: 'AF',
            regionName: 'Africa'
          }
        },
        {
          airportCode: 'AAH',
          internationalAirport: false,
          domesticAirport: false,
          regionalAirport: false,
          onlineIndicator: false,
          eticketableAirport: false,
          location: {
            aboveSeaLevel: 1000,
            latitude: 50.46,
            latitudeRadius: 0.886,
            longitude: 6.06,
            longitudeRadius: 0.1065,
            latitudeDirection: 'N',
            longitudeDirection: 'E'
          },
          airportName: 'Aachen',
          city: {
            cityCode: 'AAH',
            cityName: 'Aachen',
            timeZoneName: 'Europe/Berlin'
          },
          country: {
            countryCode: 'DE',
            countryName: 'Germany'
          },
          region: {
            regionCode: 'EU',
            regionName: 'Europe'
          }
        },
        {
          airportCode: 'AAI',
          internationalAirport: false,
          domesticAirport: false,
          regionalAirport: false,
          onlineIndicator: false,
          eticketableAirport: false,
          location: {
            aboveSeaLevel: -99999,
            latitude: 12.55,
            latitudeRadius: -0.2254,
            longitude: 46.55,
            longitudeRadius: -0.8189,
            latitudeDirection: 'S',
            longitudeDirection: 'W'
          },
          airportName: 'Arraias',
          city: {
            cityCode: 'AAI',
            cityName: 'Arraias',
            timeZoneName: 'America/Sao_Paulo'
          },
          country: {
            countryCode: 'BR',
            countryName: 'Brazil'
          },
          region: {
            regionCode: 'AM',
            regionName: 'Americas'
          }
        },
        {
          airportCode: 'AAK',
          internationalAirport: false,
          domesticAirport: false,
          regionalAirport: false,
          onlineIndicator: false,
          eticketableAirport: false,
          location: {
            aboveSeaLevel: -99999,
            latitude: 0.1,
            latitudeRadius: 0.0029,
            longitude: 173.35,
            longitudeRadius: 3.0296,
            latitudeDirection: 'N',
            longitudeDirection: 'E'
          },
          airportName: 'Aranuka',
          city: {
            cityCode: 'AAK',
            cityName: 'Aranuka',
            timeZoneName: 'Pacific/Auckland'
          },
          country: {
            countryCode: 'KI',
            countryName: 'Kiribati'
          },
          region: {
            regionCode: 'SP',
            regionName: 'South Pacific'
          }
        },
        {
          airportCode: 'AAL',
          internationalAirport: false,
          domesticAirport: false,
          regionalAirport: false,
          onlineIndicator: true,
          eticketableAirport: false,
          location: {
            aboveSeaLevel: 10,
            latitude: 57.05,
            latitudeRadius: 0.9963,
            longitude: 9.51,
            longitudeRadius: 0.1719,
            latitudeDirection: 'N',
            longitudeDirection: 'E'
          },
          airportName: 'Aalborg',
          city: {
            cityCode: 'AAL',
            cityName: 'Aalborg',
            timeZoneName: 'Europe/Copenhagen'
          },
          country: {
            countryCode: 'DK',
            countryName: 'Denmark'
          },
          region: {
            regionCode: 'EU',
            regionName: 'Europe'
          }
        },
        {
          airportCode: 'AAM',
          internationalAirport: false,
          domesticAirport: false,
          regionalAirport: false,
          onlineIndicator: true,
          eticketableAirport: false,
          location: {
            aboveSeaLevel: -99999,
            latitude: 0,
            latitudeRadius: 0,
            longitude: 0,
            longitudeRadius: 0
          },
          airportName: 'Mala Mala',
          city: {
            cityCode: 'AAM',
            cityName: 'Mala Mala',
            timeZoneName: 'Africa/Johannesburg'
          },
          country: {
            countryCode: 'ZA',
            countryName: 'South Africa'
          },
          region: {
            regionCode: 'AF',
            regionName: 'Africa'
          }
        },
        {
          airportCode: 'AAN',
          internationalAirport: false,
          domesticAirport: false,
          regionalAirport: false,
          onlineIndicator: true,
          eticketableAirport: false,
          location: {
            aboveSeaLevel: -99999,
            latitude: 24.14,
            latitudeRadius: 0.423,
            longitude: 55.46,
            longitudeRadius: 0.9733,
            latitudeDirection: 'N',
            longitudeDirection: 'E'
          },
          airportName: 'Al Ain',
          city: {
            cityCode: 'AAN',
            cityName: 'Al Ain',
            timeZoneName: 'Asia/Dubai'
          },
          country: {
            countryCode: 'AE',
            countryName: 'United Arab Emirates'
          },
          region: {
            regionCode: 'ME',
            regionName: 'Middle East'
          }
        },
        {
          airportCode: 'AAO',
          internationalAirport: false,
          domesticAirport: false,
          regionalAirport: false,
          onlineIndicator: false,
          eticketableAirport: false,
          location: {
            aboveSeaLevel: -99999,
            latitude: 9.3,
            latitudeRadius: 0.1658,
            longitude: 64.28,
            longitudeRadius: -1.1252,
            latitudeDirection: 'N',
            longitudeDirection: 'W'
          },
          airportName: 'Anaco',
          city: {
            cityCode: 'AAO',
            cityName: 'Anaco',
            timeZoneName: 'America/Caracas'
          },
          country: {
            countryCode: 'VE',
            countryName: 'Venezuela'
          },
          region: {
            regionCode: 'AM',
            regionName: 'Americas'
          }
        }
      ])
  });
};
