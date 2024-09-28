import style from "../../../utils/style/projets.module.css";
import {Link} from "react-router-dom";
import dashboard from "../../../assets/projets/carnet-stage/dahsboard.png";
import login from "../../../assets/projets/carnet-stage/login.png";
import offres from "../../../assets/projets/carnet-stage/offres.png";
import candidature from "../../../assets/projets/carnet-stage/candidature.png";
import compte_etudiant from "../../../assets/projets/carnet-stage/compte-etudiant.png";
import etudiants from "../../../assets/projets/carnet-stage/etudiants.png";

function CarnetStage() {
    return (
        <div id={style.content}>
            <Link to="/projets">
                <svg id={style.back} className='icon' width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                    <g id="SVGRepo_iconCarrier">
                        <path
                            d="M4 10L3.29289 10.7071L2.58579 10L3.29289 9.29289L4 10ZM21 18C21 18.5523 20.5523 19 20 19C19.4477 19 19 18.5523 19 18L21 18ZM8.29289 15.7071L3.29289 10.7071L4.70711 9.29289L9.70711 14.2929L8.29289 15.7071ZM3.29289 9.29289L8.29289 4.29289L9.70711 5.70711L4.70711 10.7071L3.29289 9.29289ZM4 9L14 9L14 11L4 11L4 9ZM21 16L21 18L19 18L19 16L21 16ZM14 9C17.866 9 21 12.134 21 16L19 16C19 13.2386 16.7614 11 14 11L14 9Z"
                            fill="currentColor"/>
                    </g>
                </svg>
            </Link>

            <div id={style.infos_projets_container}>
                <div id={style.project_name}>
                    <h1>Carnet de stage</h1>
                </div>

                <ul className={style.bold}>
                    <li id={style.langages}>Langages : <span>HTML</span><span>CSS</span><span>Symfony</span><span>Android Studio</span><span>PostgreSQL</span><span>Docker</span></li>
                    <li>Groupe de 5 personnes</li>
                    <li>Durée : 1.5 mois</li>
                </ul>

                <p>Ce projet permet la gestion d'offres de stage en proposant une application mobile 'front-office' où des étudiants peuvent voir des offres de stage, y postuler et
                    suivre l'état de leur recherche de stage en temps réel. Il y a aussi un site web 'back-office' permettant de faire un suivi de chaque étudiant en informant de
                    l'état d'avancement de chacun. Pour permettre le lien entre les deux, il y a un système qui a été mis en place avec Docker afin de permettre le stockage avec une
                    base de donnée PostgreSQL qui seret de source de données pour les deux.</p>

                <p>Au départ du projet, il y avait la majorité du code qui était fait, mais il y avait beaucoup de choses à changer, supprimer ou ajouter. De plus, l'ergonomie était
                    entièrement à refaire (couleurs mal choisies, mauvaise visualisation, ...). Sur le back-office, il y a une page de connexion permettant de se connecter et est
                    principalement utilisé pour un compte admin qui peut suivre l'avancée des étudiants dans leur recherche de stage et de pouvoir modifier des informations si besoins.
                    Il est ensuite possible de visualiser l'avancée des recherches de stage des différents étudiants avec un tableau de bord.</p>

                <p>Un des changements a été le changement des couleurs du header, car anciennement le texte était en gris foncé sur un fond noir donc il était très compliqué de voir
                    ce qui était écrit. Le texte a ainsi été changé en blanc et passe en cyan lorsque la souris passe devant. Un autre changement a été d'espacer les différentes
                    informations ainsi que les centrer afin que cela soit plus lisible. Il est également possible de voir toutes les offres de stage en détail avec notamment si elles
                    sont disponibles ou non, ou le parcours ciblé par l'offre. Il est ainsi possible de les modifier, les supprimer ou en ajouter. Sur le même principe, il est possible
                    de visualiser, modifier, créer ou supprimer des :</p>

                <ul>
                    <li>offres consultées</li>
                    <li>offres retenues</li>
                    <li>étudiants</li>
                    <li>comptes étudiants</li>
                    <li>candidatures d'étudiants</li>
                    <li>Etudiants Comptes étudiants Candidature</li>
                </ul>

                <p>La base de données était également mal faite et il a donc fallu changer son schéma afin de la transformer notamment en <strong>troisième forme normale</strong> afin
                    d'éviter les répétitions.</p>

                <div className={style.list_img_detail_projet}>
                    <img className={style.img_detail_projet} src={dashboard} alt="tableau de bord"/>
                    <img className={style.img_detail_projet} src={login} alt="connexion"/>
                    <img className={style.img_detail_projet} src={offres} alt="offres"/>
                    <img className={style.img_detail_projet} src={candidature} alt="candidature"/>
                    <img className={style.img_detail_projet} src={etudiants} alt="étudiants"/>
                    <img className={style.img_detail_projet} src={compte_etudiant} alt="comptes étudiants"/>
                </div>

                <p>Au cours de ce projet, j'ai :</p>
                <ul>
                    <li>appris à optimiser une base de donnée en forme normale</li>
                    <li>appris à utiliser des fichiers Dockerfile et docker-compose.yml</li>
                    <li>appris à analyser et m'approprier de grandes quantités de code</li>
                    <li>appris à utiliser le framework de PHP : Symfony</li>
                </ul>
            </div>
        </div>
    )
}

export default CarnetStage