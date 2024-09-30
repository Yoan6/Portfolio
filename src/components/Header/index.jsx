import style from './Header.module.css'
import {Link} from "react-router-dom";
import {useContext, useRef} from "react";
import {PageContext} from "../../utils/context";

function NewHeader() {
    const { page, changePage } = useContext(PageContext);
    const checkboxRef = useRef(null);  // Référence pour la checkbox

    // Fonction pour décocher la checkbox
    const handleLinkClick = (pageName) => {
        changePage(pageName);  // Met à jour la page
        if (checkboxRef.current) {
            checkboxRef.current.checked = false;  // Décocher la checkbox
        }
    };

    return (
        <div>
            <input
                className={style.menuIcon}
                type="checkbox"
                id="menu-icon"
                ref={checkboxRef}  // Utiliser la référence ici
            />
            <label htmlFor="menu-icon" className={style.menuLabel}/>
            <nav className={style.nav}>
                <ul className={style.navList}>
                    <li>
                        <Link
                            to="/"
                            className={page === 'home' ? 'active' : ''}
                            onClick={() => handleLinkClick('home')}  // Appel à la fonction lors du clic
                        >
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/skills"
                            className={page === 'skills' ? 'active' : ''}
                            onClick={() => handleLinkClick('skills')}
                        >
                            Compétences
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/projets"
                            className={page === 'projets' ? 'active' : ''}
                            onClick={() => handleLinkClick('projets')}
                        >
                            Projets
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/experiences"
                            className={page === 'experiences' ? 'active' : ''}
                            onClick={() => handleLinkClick('experiences')}
                        >
                            Expériences
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NewHeader;
