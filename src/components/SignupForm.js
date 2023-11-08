import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignupForm.css';
import signupHotelImage from '../images/signupHotel.jpeg'; // Import the image

function SignupForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const arr = [name, email, password];

  const handleClick = () => {
    props.getState(arr);
  }

  return (
    <div className="signup-form">
      <img
        src={signupHotelImage} // Use the imported image here
        alt="Sample image"
        width="390"
        height="400"
      />
      <div className="form-input" style={{ width: "300px", marginLeft: "20px" }}>
        <h3>Create your account</h3>
        <input
          onChange={(event) => setName(event.target.value)}
          className="form-control"
          placeholder="Enter your name"
        />
        <input
          onChange={(event) => setEmail(event.target.value)}
          className="form-control"
          placeholder="Enter your email"
        />
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          className="form-control"
          placeholder="Enter your password"
        />
        <button
          onClick={handleClick}
          className="btn btn-success my-3 d-block mx-auto"
          type="submit"
        >
          Register
        </button>
        <p  style={{ textAlign: 'center', marginTop: '10px' }}>
            <Link to="/login" style={{ textDecoration: 'none', color: 'gray' }}>Already have an account? Sign in.</Link>
        </p>
      </div>
    </div>
  );
}

export default SignupForm;
