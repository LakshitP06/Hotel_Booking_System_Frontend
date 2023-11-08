// Home.js
import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [location, setLocation] = useState('');
  const [checkinDate, setCheckinDate] = useState('');
  const [checkoutDate, setCheckoutDate] = useState('');
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleCheckinDateChange = (e) => {
    setCheckinDate(e.target.value);
  };

  const handleCheckoutDateChange = (e) => {
    setCheckoutDate(e.target.value);
  };

  const handleRoomsChange = (e) => {
    setRooms(parseInt(e.target.value));
  };

  const handleAdultsChange = (e) => {
    setAdults(parseInt(e.target.value));
  };

  const handleChildrenChange = (e) => {
    setChildren(parseInt(e.target.value));
  };

  // SEARCH BUTTON HANDLING
  const handleSearch = () => {
    // Add your search logic here
  };

  return (
    <div className="home">
      <div className="booking-form">
        <label>Location:</label>
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={handleLocationChange}
        />
        <div className="date-inputs">
          <label>Check-in:</label>
          <input
            type="date"
            placeholder="Check-in Date"
            value={checkinDate}
            onChange={handleCheckinDateChange}
          />
          <label>Check-out:</label>
          <input
            type="date"
            placeholder="Checkout Date"
            value={checkoutDate}
            onChange={handleCheckoutDateChange}
          />
        </div>
        <div className="guest-select">
          <div className="option">
            <label>Rooms:</label>
            <select value={rooms} onChange={handleRoomsChange}>
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
          <div className="option">
            <label>Adults:</label>
            <select value={adults} onChange={handleAdultsChange}>
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
          <div className="option">
            <label>Children:</label>
            <select value={children} onChange={handleChildrenChange}>
              {Array.from({ length: 6 }, (_, i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>
    </div>
  );
}

export default Home;
