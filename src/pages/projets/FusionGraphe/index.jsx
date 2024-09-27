import style from './fusionGraphe.module.css'
import code from '../../../assets/general/code.svg'
import {Link} from "react-router-dom";

function FusionGraphe() {
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
                    <h1>Robot Gravity</h1>
                    <a target="_blank" href="https://github.com/Yoan6/Robot-gravity" rel="noreferrer">
                        <div>
                            <section>Voir le projet</section>
                            <img className="icon" src={code} alt="code"/>
                        </div>
                    </a>
                </div>

                <ul className={style.bold}>
                    <li>Langage : Python</li>
                    <li>Librairie : Pygame</li>
                    <li>Durée : 4 jours</li>
                </ul>

                <p>La Game Jam est un évènement où les participants doivent créer un jeu dans un temps limité...</p>

                <div className={style.list_img_detail_projet}>
                    <img className={style.img_detail_projet} src="../../images/gamejam/accueil.png" alt="accueil jeu"/>
                </div>

                <p>Dans <strong>Robot Gravity</strong>, le robot doit se déplacer de plateforme en plateforme...</p>

                <div className={style.list_img_detail_projet}>
                    <img className={style.img_detail_projet} src="../../images/gamejam/jeu.png" alt="niveau 1"/>
                </div>

                <p>Le projet Game Jam participe à plusieurs compétences de troisième année :</p>
                <ul>
                    <li>UE1 (Réaliser un développement d'application)</li>
                    <li>UE2 (Optimiser des applications informatiques)</li>
                    <li>UE6 (Travailler en équipe)</li>
                </ul>

                <p>Au cours de ce projet, j'ai :</p>
                <ul>
                    <li>appris à mieux utiliser Python</li>
                    <li>appris à développer des jeux avec Pygame</li>
                    <li>amélioré ma gestion du temps</li>
                </ul>
            </div>
        </div>
    )
}

export default FusionGraphe