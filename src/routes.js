import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AirportDetailsPage from './pages/AirportDetailsPage';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/homepage" component={HomePage} />
      <Route path="/airport/:airportCode" component={AirportDetailsPage} />
    </Switch>
  );
};

export default withRouter(Routes);
