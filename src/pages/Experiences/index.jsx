import './experiences.css';
import iut2 from '../../assets/logos/iut2.jpeg';
import open_prod from '../../assets/logos/open-prod.png';
import lig from '../../assets/logos/lig.jpg';
import lycee from '../../assets/logos/lycee.png'
import informatique from '../../assets/logos/informatique.jpg'

function Experiences() {
    return (
        <div className="experience-page">
            <h1>Expériences</h1>
            <ul className="timeline">
                <li>
                    <div className="timeline-image">
                        <img className="rounded-circle img-fluid" src={lig} alt="LIG"/>
                    </div>
                    <div className="timeline-panel">
                        <h4>2024</h4>
                        <h4 className="subheading">Stage au LIG (Laboratoire d'Informatique de Grenoble)</h4>
                        <div className="timeline-body">
                            <p className="text-muted">Création d’un site web et d’un algorithme permettant d’extraire et
                                afficher les
                                données de sites web concernant n’importe quelle commune de France</p>
                        </div>
                    </div>
                </li>
                <li className="timeline-inverted">
                    <div className="timeline-image">
                        <img className="rounded-circle img-fluid" src={open_prod} alt="Open-prod"/>
                    </div>
                    <div className="timeline-panel">
                        <h4>2023</h4>
                        <h4 className="subheading">Stage chez Open-prod</h4>
                        <div className="timeline-body">
                            <p className="text-muted">Développement de la partie mobile de l'ERP Open Prod et résolution
                                d’un problème de traduction</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="timeline-image">
                        <img className="rounded-circle img-fluid" src={iut2} alt="IUT2"/>
                    </div>
                    <div className="timeline-panel">
                        <h4>2021-2024</h4>
                        <h4 className="subheading">BUT informatique</h4>
                        <div className="timeline-body">
                            <p className="text-muted">Formation de BUT informatique à l'IUT2 de Grenoble, UGA (parcours "Réalisation d'application")</p>
                        </div>
                    </div>
                </li>
                <li className="timeline-inverted">
                    <div className="timeline-image">
                        <img className="rounded-circle img-fluid" src={lycee} alt="Lycée Ferdinand Buisson"/>
                    </div>
                    <div className="timeline-panel">
                        <h4>2021</h4>
                        <h4 className="subheading">BAC STI2D</h4>
                        <div className="timeline-body">
                            <p className="text-muted">BAC STI2D au lycée Ferdinand Buisson à Voiron en spécialité SIN (Systèmes d'Information et
                                Numérique).</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="timeline-image">
                        <img className="rounded-circle img-fluid" src= {informatique} alt="Informatique"/>
                    </div>
                    <div className="timeline-panel">
                        <h4>Avant 2021</h4>
                        <h4 className="subheading">Passion pour l'informatique</h4>
                        <div className="timeline-body">
                            <p className="text-muted">Avant de commencer la formation de BUT informatique, j'ai
                                d'abord été attiré par les possibilités infinies de ce domaine, notamment en découvrant
                                Scratch, un logiciel pour débuter l'informatique.</p>
                        </div>
                    </div>
                </li>
                <li className="timeline-inverted">
                    <div id="parcours" className="timeline-image">
                        <h4>Début<br/>de mon<br/>parcours</h4>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Experiences;
