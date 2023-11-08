import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';
import {useNavigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import signupHotelImage from '../images/signupHotel.jpeg';

function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const arr=[email,password];
    const navigate=useNavigate();

    const handleClick = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:4000/auth/login',{email,password})
        .then(result=>{
            console.log(result)
            if(result.data==="Success"){
                navigate("/");
            }
        })
        .catch(err=> console.log(err))
    }

    return(
        <div className="signup-form">
      <img
        src={signupHotelImage} // Use the imported image here
        alt="Sample image"
        width="390"
        height="350"
      />
      <div className="form-input" style={{ width: "300px", marginLeft: "20px" }}>
        <h3>Login your account</h3>
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
          Login
        </button>
        <p  style={{ textAlign: 'center', marginBottom: '10px' }}>
            <Link to="/signup" style={{ textDecoration: 'none', color: 'gray' }}>Create a new account</Link>
        </p>

        <p  style={{ textAlign: 'center', marginTop: '10px' }}>
            <Link to="/login" style={{ textDecoration: 'none', color: 'gray' }}>Forgot Password?</Link>
        </p>
      </div>
    </div>
    )
}

export default Login;