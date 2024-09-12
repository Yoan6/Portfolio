import './home.css'

function Home() {
    return (
        <div>
            <div id="infos">
                <div id="info_perso">
                    <h1>Yoan Delannoy</h1>
                    <p>Étudiant en informatique à l'IUT2 de Grenoble - Université Grenoble Alpes</p>
                    {/* Informations personnelles */}
                    <div id="info_donnee">
                        <div id="info_left">
                            <section>Âge</section>
                            <section>Téléphone</section>
                            <section>Email</section>
                        </div>
                        <div id="info_right">
                            <section>21</section>
                            <section>07 67 35 77 74</section>
                            <section>
                                <a id="mail" href="mailto:yoan.delannoy1@gmail.com">yoan.delannoy1@gmail.com</a>
                            </section>                        </div>
                    </div>
                    {/* Liens réseaux sociaux */}
                    <div id="reseaux_sociaux">
                        <a href="https://github.com/yoan6" target="_blank" rel="noopener noreferrer">
                            <img className="icon" src="images/general/github.svg" alt="GitHub" />
                        </a>
                        <a href="https://www.linkedin.com/in/yoan-delannoy-97a9ba2a3/" target="_blank" rel="noopener noreferrer">
                            <img className="icon" src="images/general/linkedin.svg" alt="LinkedIn" />
                        </a>
                    </div>
                </div>
            </div>
            {/* Section À propos */}
            <section id="description">
                <h2>À propos de moi</h2>
                <p>
                    Je m'appelle Yoan Delannoy et je suis diplômé d'un BUT Informatique à l'IUT2 de Grenoble...
                </p>
            </section>
            {/* Section Compétences */}
            <section id="competences">
                <h2>Compétences</h2>
                {/* Rendu des compétences */}
            </section>
        </div>
    )
}

export default Home