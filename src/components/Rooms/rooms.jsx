import React, { Component } from 'react';

import './rooms.style.css';
import { RoomAxios } from '../../services';

export default class Rooms extends Component {
  componentDidMount() {
    RoomAxios.getRooms().then((rooms) => console.log(rooms));
  }

  render() {
    return (
      <div>
        <p>Rooms</p>
      </div>
    );
  }
}
