import "./Sidebar.css";
import { Link } from 'react-router-dom';

const Sidebar = ({closeMenu}) => {
    return(
        <div className="sidebar">
            <ul>
                <Link to='/'><li onClick={closeMenu}>HOME</li></Link>
                <Link to='/userprofile'><li onClick={closeMenu}>POPULAR MOVIES</li></Link>
                <Link to='/userlist'><li onClick={closeMenu}>MY LIST</li></Link>
            </ul>
        </div>
    )
}

export default Sidebar;