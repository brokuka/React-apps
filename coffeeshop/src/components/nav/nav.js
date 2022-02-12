import { Link } from "react-router-dom";

/* Style */
import "./nav.scss";

const Nav = () => {
    return (
        <div className="header__inner">
            <nav className="nav">
                <Link className="nav__link" to="/">
                    <img className="header__logo" src="../images/logo_white.svg" alt="Logo white" />
                    <span>Coffee house</span>
                </Link>
                <Link className="nav__link" to="/coffee">
                    <span>Our coffee</span>
                </Link>
                <a className="nav__link" href="/">
                    <span>For your pleasure</span>
                </a>
                <a className="nav__link" href="/">
                    <span>About it</span>
                </a>
            </nav>
        </div>

    )
}

export default Nav;