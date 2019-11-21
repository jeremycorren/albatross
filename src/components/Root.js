import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GoogleMap from './GoogleMap';
import MyPlaces from './MyPlaces';

export default function Root() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <GoogleMap />
        </Route>
        <Route path="/places">
          <MyPlaces />
        </Route>
      </Switch>
    </Router>
  );
}
