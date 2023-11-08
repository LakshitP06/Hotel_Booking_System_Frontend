import {useState} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Nav from './components/Nav';

function App() {
  return (
    <div class="container">
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
