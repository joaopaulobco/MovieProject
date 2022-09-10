import './App.css';
import { Route, Routes } from "react-router-dom";
import { useState } from 'react'; 

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <div className="app-navbar">
        <Navbar />
      </div>

      <div className="app-mid">
        <div className="app-sidebar">
          {/* <div><Sidebar /></div> */}
        </div>

        <div className="app-container">
          <Routes>
            <Route path="/" element={<div>Home</div>} />

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
