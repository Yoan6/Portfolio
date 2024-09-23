import React from 'react';
import classNames from 'classnames';
import style from './projets.module.css';
import { useInView } from 'react-intersection-observer';

const projetsData = [
    {
        id: 1,
        image: 'https://picsum.photos/400/400?random=1',
        title: 'Projet 1',
        description: 'Description du projet 1 avec les technologies utilisées et les résultats obtenus.'
    },
    {
        id: 2,
        image: 'https://picsum.photos/400/400?random=2',
        title: 'Projet 2',
        description: 'Description du projet 2 avec les objectifs et l\'impact du projet.'
    },
    {
        id: 3,
        image: 'https://picsum.photos/400/400?random=3',
        title: 'Projet 3',
        description: 'Informations techniques sur le projet 3, un concept innovant ou créatif.'
    },
    {
        id: 4,
        image: 'https://picsum.photos/400/400?random=4',
        title: 'Projet 4',
        description: 'Description du projet 1 avec les technologies utilisées et les résultats obtenus.'
    },
    {
        id: 5,
        image: 'https://picsum.photos/400/400?random=5',
        title: 'Projet 5',
        description: 'Description du projet 2 avec les objectifs et l\'impact du projet.'
    },
    {
        id: 6,
        image: 'https://picsum.photos/400/400?random=6',
        title: 'Projet 6',
        description: 'Informations techniques sur le projet 3, un concept innovant ou créatif.'
    },
    {
        id: 7,
        image: 'https://picsum.photos/400/400?random=7',
        title: 'Projet 7',
        description: 'Informations techniques sur le projet 3, un concept innovant ou créatif.'
    },
    {
        id: 8,
        image: 'https://picsum.photos/400/400?random=8',
        title: 'Projet 8',
        description: 'Description du projet 1 avec les technologies utilisées et les résultats obtenus.'
    },
    {
        id: 9,
        image: 'https://picsum.photos/400/400?random=9',
        title: 'Projet 9',
        description: 'Description du projet 2 avec les objectifs et l\'impact du projet.'
    },
    {
        id: 10,
        image: 'https://picsum.photos/400/400?random=10',
        title: 'Projet 10',
        description: 'Informations techniques sur le projet 3, un concept innovant ou créatif.'
    }
];

function Projet({ image, title, description }) {
    const { ref, inView } = useInView({
        threshold: 0.1
    });

    return (
        <section ref={ref} className={classNames(style.project, { [style.inView]: inView })}>
            <img src={image} alt={title} className={style.projectImage} />
            <div className={style.projectContent}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </section>
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
                        title={projet.title}
                        description={projet.description}
                    />
                ))}
            </main>
        </div>
    );
}

export default Projets;
