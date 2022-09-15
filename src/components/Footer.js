import "./Footer.css";
import gitImg from '../images/github.svg'

const Footer = () => {
    return(
        <footer>
            <a href="https://github.com/joaopaulobco/MovieProject" target="_blank" rel="noopener noreferrer">
                <img src={gitImg} alt='gitImg' />
            </a>
        </footer>
    )
}

export default Footer;
