import style from "../../../utils/style/projets.module.css";
import {Link} from "react-router-dom";
import code from "../../../assets/general/code.svg";
import site from "../../../assets/projets/API-news/site.png";

function APINews() {
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
                    <h1>Site de recherche d'article de news</h1>
                    <a target="_blank" href="https://github.com/Yoan6/API-news" rel="noreferrer">
                        <div>
                            <section>Voir le projet</section>
                            <img className="icon" src={code} alt="code"/>
                        </div>
                    </a>
                </div>

                <ul className={style.bold}>
                    <li id={style.langages}>Langages : <span>HTML</span><span>CSS</span><span>JavaScript</span></li>
                    <li>Groupe de 2 personnes</li>
                    <li>Durée : 3 semaines</li>
                </ul>

                <p>Le but de ce projet était de faire un mini site web utilisant une API parmi une sélection d'API disponibles sur diverses thèmes comme les jeux ou la culture.
                    Nous étions 2 pour faire ce projet que nous avons décidé de faire avec l'API <a className={style.link} target="_blank" rel="noreferrer" href="https://newsdata.io/">NewsData.io</a></p>

                <p> Sur ce site, il est possible de faire des recherches d'articles de news récents ou non à partir de mots-clés. Il y a quelques fonctionnalités en plus comme
                    la possibilité de retirer des mots-clés de la recherche où choisir la langue des articles. Il est également possible de mettre des recherches en favoris en
                    gardant les filtres de cette recherche.</p>

                <div className={style.list_img_detail_projet}>
                    <img className={style.img_detail_projet} src={site} alt="site"/>
                </div>

                <p>Au cours de ce projet, j'ai :</p>
                <ul>
                    <li>appris à utiliser une API</li>
                    <li>appris le fonctionnement de JavaScript</li>
                    <li>compris le fonctionnement et l'utilité des fichiers json</li>
                </ul>
            </div>
        </div>
    )
}

export default APINews