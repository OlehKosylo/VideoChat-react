import React from 'react';
import { Route, Switch } from 'react-router';

import {
  CreateRoom, Home, NotFound, Rooms,
} from '../components';

/*
    Not found component, need be last always.
    If you want to change for Redirect use <Redirect to={'/'} />
*/

export const RoutingConfig = () => (
  <Switch>
    <Route path="/create-room" component={CreateRoom} />
    <Route path="/rooms" component={Rooms} />
    <Route path="/" exact component={Home} />
    <Route render={() => <NotFound />} />
  </Switch>
);
