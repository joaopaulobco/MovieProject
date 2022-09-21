import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from 'react';
import menuImg from "../images/justify.svg";
import profileImg from "../images/person-circle.svg";
import Sidebar from "./Sidebar";
import Login from "../pages/Login";


const Navbar = () => {
  const [menu, setMenu] = useState(false); 
  const [login, setLogin] = useState(false); 

  return (
    <nav>
      <div className="menu-sidebar">
        <button onClick={() => setMenu(!menu)}>
          <img src={menuImg} alt="menu-sidebar" />
        </button>
        {menu && <Sidebar closeMenu={() => setMenu(false)} />}
      </div>
      <div className="title">
      <Link to='/'>
        <h1>Movies&Series</h1>
      </Link>
      </div>
      <div className="profile">
      <Link to='/login'>
        <img src={profileImg} alt="profile" />
        <span>Profile</span>
      </Link>
      {login && <Login />}
      </div>
    </nav>
  );
};

export default Navbar;
