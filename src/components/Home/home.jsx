import React from 'react';

import './home.style.css';
import { navigate } from '../../share/routing';

export default (props) => (
  <div>
    <button
      type="button"
      className="btn btn-success"
      onClick={navigate.bind(this, props, '/create-room')}
    >
      Create room
    </button>

    <button
      type="button"
      className="btn btn-warning"
      onClick={navigate.bind(this, props, '/rooms')}
    >
      Select room
    </button>
  </div>
);
