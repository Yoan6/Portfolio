import "./Header.css"
import {Link} from "react-router-dom";
import {useContext} from "react";
import {PageContext} from "../../utils/context";
import classNames from 'classnames';

function Header() {

    const { page, changePage } = useContext(PageContext);

    return (
        <nav className="menu">
            <input type="checkbox" className="menu-open" id="menu-open"/>
            <label className="menu-open-button" htmlFor="menu-open">
                <span className="hamburger hamburger-1"></span>
                <span className="hamburger hamburger-2"></span>
                <span className="hamburger hamburger-3"></span>
            </label>

            <Link
                to="/"
                className={classNames('menu-item', { 'active': page === 'home' })}
                onClick={() => changePage('home')}
            >
                Accueil
            </Link>
            <Link
                to="/skills"
                className={classNames('menu-item', { 'active': page === 'skills' })}
                onClick={() => changePage('skills')}
            >
                Compétences
            </Link>
            <Link
                to="/projets"
                className={classNames('menu-item', { 'active': page === 'projets' })}
                onClick={() => changePage('projets')}
            >
                Projets
            </Link>
            <Link
                to="/experiences"
                className={classNames('menu-item', { 'active': page === 'experiences' })}
                onClick={() => changePage('experiences')}
            >
                Expériences
            </Link>
        </nav>
    )
}

export default Header;