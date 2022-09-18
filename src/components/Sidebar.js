import "./Sidebar.css";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return(
        <div className="sidebar">
            <ul>
                <Link to='/'><li>HOME</li></Link>
                <Link to='/userprofile'><li>MY PROFILE</li></Link>
                <Link to='/trailers'><li>TRAILERS</li></Link>
            </ul>
        </div>
    )
}

export default Sidebar;