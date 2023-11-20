import React, { useState } from 'react';
import AdminForm from './AdminForm';  // Import your AdminForm component
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Admin() {
  const [arr, setArr] = useState([]);
  const navigate = useNavigate();

  const getState = (childData) => {
    setArr(childData);
  };

  const handleFormSubmit = () => {
    // Make a POST request to your server with the form data
    const data = {
      Name: arr[4],
      Amenities: arr[0],
      Property_Policies: arr[1],
      Hotel_Pics: arr[2],
      Rating: arr[5],
      Reviews: arr[6],
      Location: arr[7],
      Rooms: arr[3],
      City: arr[8],
      Contact: arr[10],
      Email: arr[9],
    };
    
    Axios.post('http://localhost:4000/hotelRoute/create-hotel', data)
      .then((response) => {
        if (response.status === 201 || response.status === 200) {
          alert('Hotel registration successful!');
          navigate('/');  // Redirect to home or another page after successful registration
        } else {
          console.error('Failed to register hotel.');
        }
      })
      .catch((error) => {
        console.error('Error during hotel registration:', error);
      });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <AdminForm getState={getState} />
    </form>
  );
}

export default Admin;