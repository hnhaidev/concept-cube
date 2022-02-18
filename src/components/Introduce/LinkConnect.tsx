import React from 'react';
import { Link } from 'react-router-dom';

const LinkConnect = () => {
  return (
    <>
      <div className="introduce-linkconnect">
        <Link className="link" to="/">
          About The Project
        </Link>
      </div>

      <div className="introduce-company">
        <p>ConceptCube Company Introduction</p>
      </div>
    </>
  );
};

export default LinkConnect;
