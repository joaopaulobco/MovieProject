import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from 'react';
import menuImg from "../images/justify.svg";
import profileImg from "../images/person-circle.svg";
import Sidebar from "./Sidebar";
import Login from "./Login";


const Navbar = () => {
  const [menu, setMenu] = useState(false); 
  const [login, setLogin] = useState(false); 

  return (
    <nav>
      <div className="menu-sidebar">
        <button onClick={() => setMenu(!menu)}>
          <img src={menuImg} alt="menu-sidebar" />
        </button>
        {menu && <Sidebar />}
      </div>
      <div className="title">
        <h1>Movies&Series</h1>
      </div>
      <div className="profile">
      <button onClick={() => setLogin(!login)}>
        <img src={profileImg} alt="profile" />
        <span>Login</span>
      </button>
      {login && <Login />}
      </div>
    </nav>
  );
};

export default Navbar;
