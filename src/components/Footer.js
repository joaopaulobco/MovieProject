import "./Footer.css";
import gitImg from '../images/github.svg'

const Footer = () => {
    return(
        <footer>
        <img src={gitImg} alt='gitImg' />
        <span>link do repositorio</span>
        </footer>
    )
}

export default Footer;
