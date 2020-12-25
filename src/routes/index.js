import React from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';

import LasersFeelingsSheet from "@pages/LasersFeelingsSheet";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/rpg-facilities/">
        <Redirect to="/rpg-facilities/lasers-feelings" />
      </Route>
      <Route path="/rpg-facilities/lasers-feelings" component={LasersFeelingsSheet} />
    </Switch>
  </Router>
);

export default Routes;
