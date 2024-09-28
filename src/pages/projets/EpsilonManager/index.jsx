import style from "../../../utils/style/projets.module.css";
import {Link} from "react-router-dom";
import appli from "../../../assets/projets/epsilonmanager/appli.png";
import new_projet from "../../../assets/projets/epsilonmanager/new-project.png";
import ajout_locaux from "../../../assets/projets/epsilonmanager/ajout_locaux.png";
import ajout_materiaux from "../../../assets/projets/epsilonmanager/ajout-materiaux.png";
import ajout_table from "../../../assets/projets/epsilonmanager/ajout-tables.png";
import devis from "../../../assets/projets/epsilonmanager/devis.png";

function EpsilonManager() {
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
                    <h1>Epsilon Manager</h1>
                </div>

                <ul className={style.bold}>
                    <li id={style.langages}>Langages : <span>Java</span><span>JavaFX</span><span>CSS</span></li>
                    <li>Groupe de 5 personnes</li>
                    <li>Durée : 3 semaines</li>
                </ul>

                <p>Epsilon manager est un projet qui a pour but d'aider les utilisateurs à organiser un évènement culturel. C'est une application faite en JavaFX
                    qui est un framework de Java permettant de faire des applications avec des interfaces graphiques. Elle permet de gérer de nombreuses choses pour
                    organiser un évènement comme :</p>

                <ul>
                    <li>définir les informations primordiales de l'évènement (date, thème, adresse,...)</li>
                    <li>ajouter des locaux</li>
                    <li>ajouter du matériel (chaises, tables,...)</li>
                    <li>ajouter du personnel (personnel de sécurité, guide, cuisinier,...)</li>
                    <li>ajouter les oeuvres et/ou les artistes qui seront présents à l'évènement</li>
                    <li>générer un récapitulatif des informations de l'évènement</li>
                    <li>générer un devis automatiquement</li>
                    <li>garder en mémoire les informations d'un évènement en mémoire</li>
                </ul>

                <div className={style.list_img_detail_projet}>
                    <img className={style.img_detail_projet} src={appli} alt="page principale"/>
                    <img className={style.img_detail_projet} src={new_projet} alt="nouveau projet"/>
                    <img className={style.img_detail_projet} src={ajout_materiaux} alt="ajout matériaux"/>
                    <img className={style.img_detail_projet} src={ajout_locaux} alt="ajout locaux"/>
                    <img className={style.img_detail_projet} src={ajout_table} alt="ajout tables"/>
                    <img className={style.img_detail_projet} src={devis} alt="devis"/>
                </div>

                <p>Au cours de ce projet, j'ai :</p>
                <ul>
                    <li>appris à travailler en équipe dans un projet informatique</li>
                    <li>appris à utiliser git et gitlab</li>
                    <li>appris un modèle d'architecture logicielle très utilisé : MVC (Model - View - Controler)</li>
                    <li>appris à faire de la conception avec des maquettes</li>
                    <li>appris à utiliser de la gestion de projet agile dans un projet informatique</li>
                </ul>
            </div>
        </div>
    )
}

export default EpsilonManager