import style from '../../../utils/style/projets.module.css'
import code from '../../../assets/general/code.svg'
import {Link} from "react-router-dom";
import graphe from '../../../assets/projets/fusionGraphe/graphe.png'
import fusionGraphe from '../../../assets/projets/fusionGraphe/fusionGraphe.png'
import infobox from '../../../assets/projets/fusionGraphe/infobox.png'
import elus from '../../../assets/projets/fusionGraphe/elus.png'
import dataTourisme from '../../../assets/projets/fusionGraphe/dataTourisme.png'

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
                    <h1>Fusion de graphe</h1>
                    <a target="_blank" href="https://github.com/Yoan6/fusionGraphes" rel="noreferrer">
                        <div>
                            <section>Voir le projet</section>
                            <img className="icon" src={code} alt="code"/>
                        </div>
                    </a>
                </div>

                <ul className={style.bold}>
                    <li id={style.langages}>Langages : <span>HTML</span><span>CSS</span><span>Angular</span><span>TypeScript</span><span>Python</span></li>
                    <li>Projet solo</li>
                    <li>Durée : 3.5 mois</li>
                </ul>

                <p>Ce projet a été mené durant mon stage de troisième année de BUT informatique au LIG (Laboratoire d'Informatique de Grenoble). Il survient suite à un constat simple :
                en France, certaines communes n'ont pas de site web ou alors en ont un mais qui n'est pas complet ou incorrect. Pour répondre à ce besoin, il m'a été demandé
                de réaliser un algorithme permettant de récolter les données de différents sites sources afin de les combiner pour les afficher sur un site web que j'ai également créé.</p>

                <p>Il a été défini quels seraient les sites sources pour débuter : </p>
                <ul>
                    <li>Wikipédia</li>
                    <li>dataTourisme</li>
                    <li>Répertoire des élus municipaux</li>
                </ul>

                <p>Afin de récolter les données, j'ai utilisé du scraping avec les librairies BeautifulSoup et Panda de Python pour les sites comme Wikipédia puis j'ai stocké ces données
                sous forme de graphe en gardant leur <strong>arborescence</strong> à l'aide la librairie NetworkX. Pour cela, chaque donnée est stockée dans un noeud avec le type d'information html (par exemple
                    h1, p, ul,...) et chaque noeud est relié à d'autres noeuds par des arcs. Par exemple, s'il y a un titre avec un paragraphe et une liste en dessous, le graphe sera composé d'un noeud
                    h1 qui sera relié à un noeud p et un noeud ul. Pour le site de dataTourisme, il a fallu récupérer les données à partir d'une api
                puis les stocker de la même manière, sachant que celles-ci suivent une ontologie bien définie.</p>

                <p>Après avoir créé les graphes pour chaque site source, il a fallu les fusionner en déterminant les noeuds les plus appropriés (trouver quels seraient les endroits les plus appropriés
                pour faire la fusion entre les données en fonction du type d'information).</p>

                <p>Le site web a été créé avec Angular en utilisant les données du graphe fusionné pour créer chaque balise html en fonction de chaque noeud du graphe. Sur la page principale
                    du site il est possible de sélectionner une commune de France (départements d'outre mers compris) afin de déclencher l'algorithme codé en Python qui va renvoyé le graphe
                    créé automatiquement avec les données récoltées. J'ai mis en place un système de proposition de communes à partir de ce que l'utilisateur écrit en faisant des appels api via
                    une <a className={style.link} target="_blank" rel="noopener noreferrer" href="https://geo.api.gouv.fr/decoupage-administratif/communes">api du gouvernenement</a>.</p>

                <p>Pour faire le lien entre le site web et l'algorithme j'ai utilisé le micro framework web <strong>Flask</strong> qui permet, dès qu'il reçoit une requête du site web, de lancer l'algorithme
                puis de renvoyer au site web une version json du graphe. J'ai ensuite ajouté un minimum de style au site et ajouté des cartes intéractives pour les données de dataTourisme car il est possible
                de récupérer des localisations gps d'endroits.</p>

                <div className={style.list_img_detail_projet}>
                    <img className={style.img_detail_projet} src={graphe} alt="graphe"/>
                    <img className={style.img_detail_projet} src={fusionGraphe} alt="graphe"/>
                    <img className={style.img_detail_projet} src={infobox} alt="graphe"/>
                    <img className={style.img_detail_projet} src={elus} alt="graphe"/>
                    <img className={style.img_detail_projet} src={dataTourisme} alt="graphe"/>
                </div>

                <p>Au cours de ce projet, j'ai :</p>
                <ul>
                    <li>appris le fonctionnement du scraping</li>
                    <li>développé mon autonomie</li>
                    <li>acquis des compétences en traitement de données</li>
                    <li>appris à utiliser des cartes intéractives avec Angular</li>
                </ul>
            </div>
        </div>
    )
}

export default FusionGraphe