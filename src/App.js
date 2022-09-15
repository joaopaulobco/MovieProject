import './App.css';
import { Route, Routes } from "react-router-dom";
import { useState } from 'react'; 

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './pages/Home';
import UserProfile from './pages/UserProfile'
import Trailers from './pages/Movie';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <div className="app-navbar">
        <Navbar/>
      </div>

      <div className="app-mid">
        <div className="app-sidebar">
          {/* <div><Sidebar /></div> */}
        </div>

        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/trailers" element={<Trailers />} />
            <Route path="*" element={<ErrorPage />} />

          </Routes>
        </div>
      </div>
      <div className="app-footer">
        <div><Footer /></div>
      </div>
    </div>
  );
}

export default App;
