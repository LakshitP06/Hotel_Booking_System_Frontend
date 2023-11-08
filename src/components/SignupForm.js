import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignupForm(props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const arr=[name,email,password];

    const handleSubmit = () => {
      props.getState(arr);
    }

  return (
    <section style={{ backgroundColor: '#eee' }} className="vh-100">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-6 col-lg-6 col-xl-6 order-1 order-lg-1">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      alt="Sample image"
                      width="600" // Set the width to your desired size
                      height="750" // Set the height to your desired size
                    />
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-6 order-2 order-lg-2">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="text" id="form3Example1c" className="form-control" placeholder="Your Name" onChange={(event) => setName(event.target.value)}/>
                          <label className="form-label" htmlFor="form3Example1c"></label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="email" id="form3Example3c" class="form-control" placeholder="Your Email" onChange={(event) => setEmail(event.target.value)}/>
                          <label className="form-label" htmlFor="form3Example3c"></label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="password" id="form3Example4c" class="form-control" placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
                          <label className="form-label" htmlFor="form3Example4c"></label>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button onClick={handleSubmit} type="submit" className="btn btn-success btn-lg">Register</button>
                      </div>
                    </form>
                    
                    {/* Add the "Login" button with a Link to="/Login" */}
                    <div className="d-flex justify-content-center mx-4">
                      <Link to="/Login" className="btn btn-link">Login</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignupForm;
