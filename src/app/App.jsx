import React from 'react';

import './App.css';
import { RoutingConfig } from '../configurations/routing.config';

export default () => (
  <>
    {/* Header */}
    {RoutingConfig()}
    {/* Footer */}
  </>
);
