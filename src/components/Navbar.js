import "./Navbar.css";
import menuImg from '../images/justify.svg'
import profileImg from '../images/person-circle.svg'

const Navbar = () => {
    return(
    <nav>
        <div className='menu-sidebar'><img src={menuImg} alt='menu-sidebar' /></div>
        <div className='title'><h1>MovieFlix</h1></div>
        <div className='profile-img'><img src={profileImg} alt='profile'/></div>
        <div className='login'><h2>Login</h2></div>
    </nav>
    )
}

export default Navbar;