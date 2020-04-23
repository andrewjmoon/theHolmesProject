import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="App">
      <h1>Prayer Project Home Page</h1>
      <Link className="Link" to="/about">
        <h2>About</h2>
      </Link>
      <Link className="Link" to="/saints-holies">
        <h2>Saints and Holy People</h2>
      </Link>
      <Link className="Link" to="/prayerlist">
        <h2>Prayer List</h2>
      </Link>
    </div>
  );
};
