import React from 'react';
import classNames from 'classnames';
import style from './projets.module.css';
import { useInView } from 'react-intersection-observer';
import epsilonManager from '../../assets/projets/epsilonmanager/appli.png'
import gadi from '../../assets/projets/gadi/dashboard.png'
import tourOfHeroes from '../../assets/projets/tourOfHeroes/modify_hero.png'
import fusionGraphe from '../../assets/projets/fusionGraphe/fusionGraphe.png'
import robotGravity from '../../assets/projets/gamejam/accueil.png'
import carnetStage from '../../assets/projets/carnet-stage/offres.png'
import api_news from '../../assets/projets/TP-API/site.png'
import crescendo from '../../assets/projets/crescendo/home.png'
import portfolio from '../../assets/projets/old-portfolio/portfolio.png'
import {Link} from "react-router-dom";

const projetsData = [
    {
        id: 1,
        image: `${fusionGraphe}`,
        name: 'fusion-graphe',
        title: 'Fusion de graphe',
        description: "Création d’un site web et d’un algorithme permettant d’extraire et afficher les\n" +
            "données de sites web concernant n’importe quelle commune de France",
        year: '2024'
    },
    {
        id: 2,
        image: `${portfolio}`,
        name: 'old-portfolio',
        title: 'Ancien portfolio',
        description: "Création de mon ancien portfolio avec html/css",
        year: '2024'
    },
    {
        id: 3,
        image: `${gadi}`,
        name: 'gadi',
        title: 'GADI',
        description: "Création d’un site pour le département informatique pour la gestion administrative de l’IUT",
        year: '2023-2024'
    },
    {
        id: 4,
        image: `${tourOfHeroes}`,
        name: 'tour-of-heroes',
        title: 'Tour of Heroes',
        description: "Création d'un site de héros qui peuvent combatre entre eux et s'équiper d'arme",
        year: '2023'
    },
    {
        id: 5,
        image: `${robotGravity}`,
        name: 'robot-gravity',
        title: 'Robot Gravity',
        description: "Création d'un jeu en Python sur les thèmes 'robot' et 'gravité'",
        year: '2023'
    },
    {
        id: 6,
        image: `${carnetStage}`,
        name: 'carnet-stage',
        title: 'Carnet de stage',
        description: "Rétro-conception et optimisation d'une application web et mobile pour la gestion\n" +
            "d'offres de stage",
        year: '2023'
    },
    {
        id: 7,
        image: `${api_news}`,
        name: 'api-news',
        title: 'Projet API',
        description: "Développement d'un mini site utilisant une api publique de recherche d'article de news",
        year: '2023'
    },
    {
        id: 8,
        image: `${crescendo}`,
        name: 'crescendo',
        title: 'Crescendo',
        description: "Développement d’une application web de vente aux enchères d’objets et\n" +
            "vêtements ayant appartenu à des stars en concert.",
        year: '2022-2023'
    },
    {
        id: 9,
        image: `${epsilonManager}`,
        name: 'epsilon-manager',
        title: 'Epsilon Manager',
        description: "Application d'organisation d'évènement culturels",
        year: '2022'
    }
];

function Projet({ image, name, title, description, year }) {
    const { ref, inView } = useInView({
        threshold: 0.1
    });

    return (
        <Link to={`${name}`}>
            <section ref={ref} className={classNames(style.project, { [style.inView]: inView })}>
                <img src={image} alt={title} className={style.projectImage} />
                <div className={style.projectContent}>
                    <section className={style.projectYear}>{year}</section>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </section>
        </Link>
    );
}

function Projets() {
    return (
        <div className="page-content">
            <h1>Projets</h1>
            <main className={style.projectsContainer}>
                {projetsData.map((projet) => (
                    <Projet
                        key={projet.id}
                        image={projet.image}
                        name={projet.name}
                        title={projet.title}
                        description={projet.description}
                        year={projet.year}
                    />
                ))}
            </main>
        </div>
    );
}

export default Projets;
