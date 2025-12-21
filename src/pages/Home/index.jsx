import style from './home.module.css'
import Github from '../../assets/general/github.svg'
import Linkedin from '../../assets/general/linkedin.svg'

function Home() {
    return (
        <div className={style.homePage}>
            {/* Section d'information personnelle */}
            <div className={style.infoContainer}>
                <h1>Yoan Delannoy</h1>
                <h2 id={style.subtitle}>Bienvenue sur mon site portfolio</h2>
                {/* Informations personnelles */}
                <div className={style.infoDetails}>
                    <div className={style.infoColumn}>
                        <section>Téléphone</section>
                        <section>Email</section>
                    </div>
                    <div className={style.infoColumn}>
                        <section>07 67 35 77 74</section>
                        <section>
                            <a className={style.link} href="mailto:yoan.delannoy1@gmail.com">yoan.delannoy1@gmail.com</a>
                        </section>
                    </div>
                </div>
                {/* Liens réseaux sociaux */}
                <div className={style.socialLinks}>
                    <a href="https://github.com/yoan6" target="_blank" rel="noopener noreferrer">
                        <img className="icon" src={Github} alt="GitHub"/>
                    </a>
                    <a href="https://www.linkedin.com/in/yoan-delannoy-97a9ba2a3/" target="_blank"
                       rel="noopener noreferrer">
                        <img className="icon" src={Linkedin} alt="LinkedIn"/>
                    </a>
                </div>
            </div>
            {/* Section À propos */}
            <section className={style.aboutSection}>
                <h2 className={style.link}>À propos de moi</h2>
                <p>
                    Diplômé d'un BUT Informatique à l'IUT2 de Grenoble, je suis actuellement développeur full stack chez Akensys à Lyon.
                    En tant que développeur full stack, je développe des sites web et applications mobiles pour des clients d'Akensys comme Armand Thiery.
                    Je suis passionné par le développement web et suis toujours curieux de voir les possibilités que nous offre ce domaine. 
                    {/* <span id={style.CDI}>Je suis actuellement à la recherche
                    d'un emploi dans le développement web en tant que développeur front-end, back-end ou full-stack.</span> */}
                </p>
                <p> A travers différentes expériences professionnelles et personnelles, j'ai pu acquérir de nombreuses compétences et
                    connaissances qui m'ont permis de m'améliorer en tant que développeur. Je suis plutôt intéressé par le développement frontend, 
                    mais le développement backend reste pour moi très intéressant. J'ai plaisir à réaliser des interfaces utilisateurs jolies et de
                    prendre en compte au maximum l'expérience utilisateur.
                    J'ai aussi pu approfondir mes compétences en gestion de projets, en communication et acquis
                    une certaine autonomie, notamment à travers mon stage au LIG où je travaillais seul sur un projet.</p>
                <p> Au niveau de mes passions, je suis assez sportif et aime bien l'univers des mangas/animés</p>
            </section>
        </div>
    );
}

export default Home