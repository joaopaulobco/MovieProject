import "./Navbar.css";
import { Link } from "react-router-dom";
import menuImg from "../images/justify.svg";
import profileImg from "../images/person-circle.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="menu-sidebar">
        <Link to={"./menu"}>
          <img src={menuImg} alt="menu-sidebar" />
        </Link>
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
