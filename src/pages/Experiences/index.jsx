import styles from './experiences.module.css';
import iut2 from '../../assets/logos/iut2.jpeg';
import open_prod from '../../assets/logos/open-prod.png';
import lig from '../../assets/logos/lig.jpg';
import lycee from '../../assets/logos/lycee.png'
import informatique from '../../assets/logos/informatique.jpg'

function Experiences() {
    return (
        <div className="page-content">
            <h1>Expériences</h1>
            <ul className={styles.timeline}>
                <li>
                    <div className={styles.timelineImage}>
                        <img src={lig} alt="LIG"/>
                    </div>
                    <div className={styles.timelinePanel}>
                        <h4 className={styles.subheading}>2024</h4>
                        <h4>Stage au LIG (Laboratoire d'Informatique de Grenoble)</h4>
                        <div>
                            <p>Création d’un site web et d’un algorithme permettant d’extraire et
                                afficher les
                                données de sites web concernant n’importe quelle commune de France</p>
                        </div>
                    </div>
                </li>
                <li className={styles.timelineInverted}>
                    <div className={styles.timelineImage}>
                        <img src={open_prod} alt="Open-prod"/>
                    </div>
                    <div className={styles.timelinePanel}>
                        <h4 className={styles.subheading}>2023</h4>
                        <h4>Stage chez Open-prod</h4>
                        <div>
                            <p>Développement de la partie mobile de l'ERP Open Prod et résolution
                                d’un problème de traduction</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className={styles.timelineImage}>
                        <img src={iut2} alt="IUT2"/>
                    </div>
                    <div className={styles.timelinePanel}>
                        <h4 className={styles.subheading}>2021-2024</h4>
                        <h4>BUT informatique</h4>
                        <div>
                            <p>Formation de BUT informatique à l'IUT2 de Grenoble, UGA (parcours "Réalisation d'application")</p>
                        </div>
                    </div>
                </li>
                <li className={styles.timelineInverted}>
                    <div className={styles.timelineImage}>
                        <img src={lycee} alt="Lycée Ferdinand Buisson"/>
                    </div>
                    <div className={styles.timelinePanel}>
                        <h4 className={styles.subheading}>2021</h4>
                        <h4>BAC STI2D</h4>
                        <div>
                            <p>BAC STI2D au lycée Ferdinand Buisson à Voiron en spécialité SIN (Systèmes d'Information et
                                Numérique).</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className={styles.timelineImage}>
                        <img src= {informatique} alt="Informatique"/>
                    </div>
                    <div className={styles.timelinePanel}>
                        <h4 className={styles.subheading}>Avant 2021</h4>
                        <h4>Passion pour l'informatique</h4>
                        <div>
                            <p>Avant de commencer la formation de BUT informatique, j'ai
                                d'abord été attiré par les possibilités infinies de ce domaine, notamment en découvrant
                                Scratch, un logiciel pour débuter l'informatique.</p>
                        </div>
                    </div>
                </li>
                <li className={styles.timelineInverted}>
                    <div id={styles.parcours} className={styles.timelineImage}>
                        <h4>Début<br/>de mon<br/>parcours</h4>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Experiences;
