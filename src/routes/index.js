import React from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';

import LasersFeelingsSheet from "@pages/LasersFeelingsSheet";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect to="/lasers-feelings" />
      </Route>
      <Route path="/lasers-feelings" component={LasersFeelingsSheet} />
    </Switch>
  </Router>
);

export default Routes;
