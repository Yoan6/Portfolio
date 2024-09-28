import style from "../../../utils/style/projets.module.css";
import {Link} from "react-router-dom";
import code from "../../../assets/general/code.svg";
import home from "../../../assets/projets/crescendo/home.png";
import enchere from "../../../assets/projets/crescendo/enchere.png";
import vetement from "../../../assets/projets/crescendo/vetement.png";
import vente from "../../../assets/projets/crescendo/vente.png";

function Crescendo() {
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
                    <h1>Crescendo</h1>
                    <a target="_blank" href="https://github.com/Yoan6/Crescendo" rel="noreferrer">
                        <div>
                            <section>Voir le projet</section>
                            <img className="icon" src={code} alt="code"/>
                        </div>
                    </a>
                </div>

                <ul className={style.bold}>
                    <li id={style.langages}>Langages front-end : <span>HTML</span><span>CSS</span></li>
                    <li id={style.langages}>Langages back-end : <span>JavaScript</span><span>PHP</span><span>SQLite3</span><span>Ajax</span></li>
                    <li>Groupe de 6 personnes</li>
                    <li>Durée : 3.5 mois</li>
                </ul>

                <p>Ce projet consistait à réaliser un site web de vente aux enchères from scratch et d'imaginer ce que l'on voulait vendre ainsi que toutes les modalités
                    de la vente aux enchères. Ce projet a été réalisé en groupe de 6 et a été mené à bien. Nous avons donc eu l'idée originale (suite à tout un processus de
                    créativité avec nottament le principe des 6 chapeaux) de faire de la vente d'objets et vêtements ayant appartenus à des stars de la musique en concert.</p>

                    <p>Les enchères durent 7 jours et chaque utilisateur peut voir ses informations ainsi qu'enchérir sur celle-ci s'il est connecté (si ce n'est pas le cas il peut
                    seulement voir l'enchère mais ne pourra pas intéragir). Chaque utilisateur peut bien évidemment être vendeur s'il le souhaite et peut mettre en vente des
                    objets ou vêtements de stars qu'il aurait en sa possession (une attestation sur l'honneur attestant que seul des articles légaux et véridiques doivent être
                    vendus est obligatoirement signée). Le vendeur peut donc renseigner toutes les informations de la vente en renseignant une ou des images, une date de début, ...</p>

                <div className={style.list_img_detail_projet}>
                    <img className={style.img_detail_projet} src={home} alt="accueil"/>
                    <img className={style.img_detail_projet} src={enchere} alt="enchère"/>
                    <img className={style.img_detail_projet} src={vetement} alt="vêtements"/>
                    <img className={style.img_detail_projet} src={vente} alt="vente"/>
                </div>

                <p>Au cours de ce projet, j'ai :</p>
                <ul>
                    <li>appris à utiliser les langages PHP et JavaScript</li>
                    <li>mis en pratique le modèle MVC dans un gros projet</li>
                    <li>appris à faire le lien entre une base de données et une application</li>
                    <li>mis en pratique l'ergonomie et l'expérience utilisateur dans un site web</li>
                    <li>développé mon esprit d'équipe</li>
                </ul>
            </div>
        </div>
    )
}

export default Crescendo