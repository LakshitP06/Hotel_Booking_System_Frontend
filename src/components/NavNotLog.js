// NavNotLog.js

import React from 'react';
import { Link } from 'react-router-dom';
import './NavNotLog.css'; // Import the CSS file

function NavNotLog() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Your Logo</Link>
      </div>
      <div className="navbar-links">
      {/* <Link to="/hotellist">Hotel List</Link> */}
        <Link to="/admin">Admin</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
}

export default NavNotLog;
