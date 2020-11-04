import React from 'react';
import { useForm } from 'react-hook-form';

import './create-room.style.css';
import { RoomSocket } from '../../services/sockets';
import { formError } from '../../share/form';

export default () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => RoomSocket.createRoom(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        ref={register({ required: true, maxLength: 30 })}
        type="text"
        name="label"
        placeholder="Label"
      />

      {formError('label', 'required', 'This field is required', errors)}
      {formError('label', 'maxLength', 'This field cannot exceed 30 characters', errors)}
      <br />

      <input
        ref={register({ required: true, minLength: 8 })}
        type="password"
        name="password"
        placeholder="Password"
      />
      {formError('password', 'required', 'This field is required', errors)}
      {formError('password', 'minLength', 'This field cannot contain less 8 characters', errors)}
      <br />

      <input type="submit" className="btn btn-success" value="Create room" />
    </form>
  );
};
