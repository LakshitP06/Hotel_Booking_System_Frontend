import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import NavNotLog from './components/NavNotLog';
import Admin from './components/Admin';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import HotelList from './components/HotelList';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <NavNotLog />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/hotellist" element={<HotelList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
