import { Link } from 'react-router-dom';

/* Style */
import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <div className="container">
                    <nav className="nav">
                        <Link className="nav__link" to="/">
                            <img className="header__logo" src="../images/logo_black.svg" alt="Logo black" />
                            <span>Coffee house</span>
                        </Link>
                        <Link className="nav__link" to="coffee">
                            <span>Our coffee</span>
                        </Link>
                        <a className="nav__link" href="/">
                            <span>For your pleasure</span>
                        </a>
                    </nav>
                    <div className="footer__icon">
                        <img className="icon" src="../images/beans_black.svg" alt="Section icon" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;