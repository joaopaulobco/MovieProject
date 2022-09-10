import "./Sidebar.css";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return(
        <div className="sidebar">
            <ul>
                <Link to='../pages/Home.js'><li>Home</li></Link>
                <Link to='../pages/UserProfile.js'><li>My Profile</li></Link>
                <Link to='../pages/Trailers.js'><li>Trailers</li></Link>
            </ul>
        </div>
    )
}

export default Sidebar;