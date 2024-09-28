import style from "../../../utils/style/projets.module.css";
import {Link} from "react-router-dom";
import code from "../../../assets/general/code.svg";
import dashboard from "../../../assets/projets/tourOfHeroes/jeu.png";
import modifyHero from "../../../assets/projets/tourOfHeroes/modify_hero.png";
import modifyWeapon from "../../../assets/projets/tourOfHeroes/modify_weapon.png";
import fight from "../../../assets/projets/tourOfHeroes/fight_hero.png";

function TourOfHeroes() {
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
                    <h1>Tour of Heroes</h1>
                    <a target="_blank" href="https://github.com/Yoan6/Tour-of-Heroes" rel="noreferrer">
                        <div>
                            <section>Voir le projet</section>
                            <img className="icon" src={code} alt="code"/>
                        </div>
                    </a>
                </div>

                <ul className={style.bold}>
                    <li id={style.langages}>Langages : <span>HTML</span><span>CSS</span><span>Angular</span><span>TypeScript</span><span>Firebase</span></li>
                    <li>Durée : 1 mois</li>
                </ul>

                <p>Le but de ce projet était de faire un mini jeu sur un site web afin de parfaire l'utilisation du framework de JavaScript <strong>Angular</strong>. Ce jeu permet principalement
                    la gestion de héros et d'armes en leur attribuant des attributs comme l'attaque, la défense, l'esquive ou la vie. Pour faire cette gestion, les héros et armes
                    sont stockés en base de données avec une base de données non-relationnelle, <strong>Firebase</strong>, afin de tout sauvegarder en mémoire.</p>

                <p>Il propose un tableau de bord permettant de visualiser les héros et les armes existants en base de données tout en proposant un header permettant de se balader
                    à travers les différentes pages possibles du site. Il est donc possible de manipuler héros comme armes afin de les modifier ou les supprimer. Il est bien entendu
                    possible d'en créer de nouveaux mais il faudra respecter des règles spécifiques selon si c'est un héro ou une arme. Par exemple, les héros devront avoir maximum
                    40 points au total tout attribut confondus, ne pas avoir d'attributs en dessous de 1.</p>

                <p>Il est possible d'attribuer une image et une arme à un héro. Il existe 8 images de héros et il est possible d'attribuer seulement une arme à un héro, lui ajoutant
                    les attributs de l'arme à ses propres attributs. La séparation entre les attributs du héro (en bleu) et ceux de l'arme (en rouge) a été faite afin de visualiser
                    l'apport de l'arme. Il est possible de changer l'arme du héro à partir des armes existantes en base de donnée et pour que le changement se fasse, il faut que
                    l'arme ne fasse pas tomber un des attributs du héro en dessous de 1. Cela est possible puisque les armes peuvent avoir des attributs négatifs, contrairement au héro.</p>

                <p>Lorsqu'on visualise une arme, on voit les héros qui y sont associés. Une arme doit avoir le total de ses attributs exactement égal à 0 et chaque attribut doit
                    être entre -5 et 5. Aussi, il est possible de visualiser l'ensemble des héros et des armes tout en les filtrant ou les triant. Ensuite, il est possible de faire
                    un combat entre les héros en sélectionnant deux héros que l'on va faire combattre et cela se passe au tour par tour ou chaque héro va attaquer et le héro adverse
                    pourra esquiver et se défendre en fonction de ses attributs.</p>

                <p>Afin de faire la connexion avec la base de donées Firebase qui est une base de données stockée sur le cloud, il a fallu faire des "observables", qui sont des objets
                    permettant d'attendre la récupération de plusieurs données tout en continuant l'exécution du code de façon asynchrone.</p>

                <div className={style.list_img_detail_projet}>
                    <img className={style.img_detail_projet} src={dashboard} alt="tableau de bord"/>
                    <img className={style.img_detail_projet} src={modifyHero} alt="modifier héro"/>
                    <img className={style.img_detail_projet} src={modifyWeapon} alt="modifier arme"/>
                    <img className={style.img_detail_projet} src={fight} alt="combat"/>
                </div>

                <p>Au cours de ce projet, j'ai :</p>
                <ul>
                    <li>appris à utiliser Angular</li>
                    <li>appris le fonctionnement d'un observable</li>
                </ul>
            </div>
        </div>
    )
}

export default TourOfHeroes