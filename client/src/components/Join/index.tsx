import React, { ChangeEvent, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

const Join: React.FC = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const handleNameChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    },
    [],
  );

  const handleRoomChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setRoom(event.target.value);
    },
    [],
  );

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            placeholder="Name"
            type="text"
            className="joinInput"
            onChange={handleNameChange}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            onChange={handleRoomChange}
          />
        </div>
        <Link
          onClick={e => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button mt-20" type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
