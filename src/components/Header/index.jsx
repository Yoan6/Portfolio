import {Link} from "react-router-dom";

const Header = () => (
    <header>
        <Link to="/">Accueil</Link>
        <Link to="/formations">Formation</Link>
        <Link to="/projets">Projets</Link>
    </header>
);

export default Header;