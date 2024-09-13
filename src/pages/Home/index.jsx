import './home.css'
import Github from '../../assets/general/github.svg'
import Linkedin from '../../assets/general/linkedin.svg'

function Home() {
    return (
        <div>
            {/* Section d'information personnelle */}
            <div className="info-container">
                <h1>Bonjour, je suis Yoan Delannoy</h1>
                <h2>Bienvenue sur mon site portfolio</h2>
                {/* Informations personnelles */}
                <div className="info-details">
                    <div className="info-column">
                        <section>Âge</section>
                        <section>Téléphone</section>
                        <section>Email</section>
                    </div>
                    <div className="info-column">
                        <section>21</section>
                        <section>07 67 35 77 74</section>
                        <section>
                            <a className="link" href="mailto:yoan.delannoy1@gmail.com">yoan.delannoy1@gmail.com</a>
                        </section>
                    </div>
                </div>
                {/* Liens réseaux sociaux */}
                <div className="social-links">
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
            <section className="about-section">
                <h2>À propos de moi</h2>
                <p>
                    Je m'appelle Yoan Delannoy et je suis diplômé d'un BUT Informatique à l'IUT2 de Grenoble. Passionné
                    par le développement web,
                    je suis toujours curieux de voir les possibilités que nous offre ce domaine.
                </p>
                <p>A travers différentes expériences professionnelles, j'ai pu acquérir de nombreuses compétences et
                    connaissances notamment lors d'un stage
                    en tant que développeur Python chez Open Prod en 2023 et un stage en tant que développeur full-stack
                    au Laboratoire d'Informatique de Grenoble
                    (LIG) en 2024. J'ai ainsi pu développer des compétences en gestion de projets, en communication et
                    une certaine autonomie à travers mon stage
                    au LIG où je travaillais seul sur un projet, ainsi qu'une panoplie de langages de programmation.
                    Durant ma formation de BUT informatique j'ai
                    pu développer mon esprit d'équipe (très important selon moi) ainsi que de nombreux langages de programmation.</p>
                <p>Si mon profil vous intéresse, n'hésitez pas à me contacter par mail (<a className="link" href="mailto:yoan.delannoy1@gmail.com">yoan.delannoy1@gmail.com</a>),
                    par téléphone au <a className="link" href="tel: 07 67 35 77 74">07 67 35 77 74</a> ou via <a rel="noreferrer"  className="link" target="_blank" href="https://www.linkedin.com/in/yoan-delannoy-97a9ba2a3/">LinkedIn</a>
                </p>
            </section>
        </div>
    )
}

export default Home