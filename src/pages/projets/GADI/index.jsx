import style from "../../../utils/style/projets.module.css";
import {Link} from "react-router-dom";
import login from "../../../assets/projets/gadi/login.png";
import dashboard from "../../../assets/projets/gadi/dashboard.png";
import ressources from "../../../assets/projets/gadi/ressources.png";
import service_previsionnel from "../../../assets/projets/gadi/service-previsionnel.png";
import orga_res from "../../../assets/projets/gadi/organisation-ressource.png";
import orga_interv_res from "../../../assets/projets/gadi/organisation-intervenants-ressource.png";
import participation from "../../../assets/projets/gadi/participation.png";
import admin_res from "../../../assets/projets/gadi/admin-ressource.png";

function GADI() {
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
                    <h1>GADI (Gestion Administrative du Département Informatique)</h1>
                </div>

                <ul className={style.bold}>
                    <li id={style.langages}>Langages front-end : <span>HTML</span><span>CSS</span><span>Angular</span><span>TypeScript</span></li>
                    <li id={style.langages}>Langages back-end : <span>Symfony</span><span>PostgreSQL</span></li>
                    <li>Groupe de 7 personnes</li>
                    <li>Durée : 6 mois</li>
                </ul>

                <p>Le but de ce projet était de refaire entièrement un site qu'utilisent les profs du département informatique de l'IUT2 de Grenoble : <strong>GADI</strong>. En effet, ce dernier étant créé il y a plus de
                    10 ans et avec l'arrivée de la réforme des BUT, il fut un peu obsolète et mal conçu pour gérer certains cas. Ce dernier permet de faire de nombreuses choses comme la gestion
                    des budgets des profs ou encore la planification des ressources et SAEs (projets)</p>

                <p>Ce projet a été mené en méthode agile Kanban et il y a eu toute une partie d'échange avec des professeurs pour bien définir le cahier des charges au niveau fonctionnel et visuel.
                Le site web codé est bien évidemment responsive et respecte également certains critères de Bastiens et Scapins définis en amont du projet</p>

                <p>Une ressource est une matière qui est associée à des contrôles, des formations, un budget par étudiant et pour tout le monde, et bien d'autres choses. Une SAÉ est un projet
                    plus ou moins long effectué par un ou plusieurs étudiants et qui concerne des ressources internes à la SAÉ ou certaines qui ne le sont pas. Il est obligatoire de se connecter
                    au site pour pouvoir l'utiliser et il existe plusieurs types d'utilisateur :</p>

                <ul>
                    <li>Admin</li>
                    <li>Responsable de ressource/SAE</li>
                    <li>Prof</li>
                </ul>

                <p>Seuls les comptes admins peuvent accéder à un back-office qui permet la gestion de l'entièreté des ressources, SAÉs, évaluations... L'affichage est légèrement différent
                    lorsqu'on accède au back-office afin de faire la différence avec le front-office. En tant que simple prof, il est juste possible de demander à rejoindre une ressource en
                    manque d'intervenant et de voir les heures faites dans quelles ressources et quelles SAÉs.</p>

                <p>En tant que responsable de ressource ou SAÉ, il est possible de visualiser les ressources et SAÉs dont on est responsables avec des informations intéressantes comme le volume
                    horaires étudiants ou le volume horaire total. Il est également possible de voir les ressources et SAÉs dans lesquelles on participe. Si l'on est responsable d'une ressource
                    ou SAÉ, il est possible de modifier celle-ci en plannifiant des TP, TD, des cours magistraux ou des AA (travail en autonomie des étudiants) et en leur attribuant une durée et
                    un type de salle. C'est très ludique car pour se faire il faut utiliser du drag-and-drop qui est très facile à utiliser.</p>

                <p>Ensuite, pour une ressource ou une SAÉ, il est possible d'attribuer des intervenants aux différents types de cours, une fois de plus en utilisant du drag-and-drop. Pour la partie
                    back-end, une base de données PostgreSQL a été créé et pour que le site en Angular puisse intéragir avec celle-ci, une api a été créée avec Symfony.</p>

                <div className={style.list_img_detail_projet}>
                    <img className={style.img_detail_projet} src={login} alt="login"/>
                    <img className={style.img_detail_projet} src={dashboard} alt="dashboard"/>
                    <img className={style.img_detail_projet} src={ressources} alt="ressources"/>
                    <img className={style.img_detail_projet} src={service_previsionnel} alt="service prévisionnel"/>
                    <img className={style.img_detail_projet} src={orga_res} alt="organisation ressource"/>
                    <img className={style.img_detail_projet} src={orga_interv_res} alt="organisation intervenant ressource"/>
                    <img className={style.img_detail_projet} src={participation} alt="participation"/>
                    <img className={style.img_detail_projet} src={admin_res} alt="admin ressources"/>
                </div>

                <p>Au cours de ce projet, j'ai :</p>
                <ul>
                    <li>appris à mieux utiliser Angular avec pleins de nouvelles librairies nottament angular material (drag&drop)</li>
                    <li>développé de l'agilité en ayant alterné des cours et des séances projet dans une même journée durant 6 mois</li>
                    <li>développé mon esprit d'équipe</li>
                    <li>développé la méthode agile sur un gros projet</li>
                </ul>
            </div>
        </div>
    )
}

export default GADI