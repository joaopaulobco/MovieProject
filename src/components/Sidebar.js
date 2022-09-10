import "./Sidebar.css";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return(
        <div className="sidebar">
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/userprofile'><li>My Profile</li></Link>
                <Link to='/trailers'><li>Trailers</li></Link>
            </ul>
        </div>
    )
}

export default Sidebar;