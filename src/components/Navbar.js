import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from 'react';
import menuImg from "../images/justify.svg";
import profileImg from "../images/person-circle.svg";
import Sidebar from "./Sidebar";


const Navbar = () => {
  const [menu, setMenu] = useState(false); 

  return (
    <nav>
      <div className="menu-sidebar">
        <button onClick={() => setMenu(!menu)}>
          <img src={menuImg} alt="menu-sidebar" />
        </button>
        {menu && <Sidebar />}
      </div>
      <div className="title">
        <h1>MovieFlix</h1>
      </div>
      <div className="profile">
        <img src={profileImg} alt="profile" />
        <span>Login</span>
      </div>
    </nav>
  );
};

export default Navbar;
