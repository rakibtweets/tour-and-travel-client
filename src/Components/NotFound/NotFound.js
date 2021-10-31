import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <>
      <div className="container-404"></div>
      <div className="error-msg text-center mb-5">
        <h3 className="text-danger">Looks Like You're Lost</h3>
        <p>The page you are looking for not available</p>
        <Link className="btn btn btn-primary" to="/home">
          Back to Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
