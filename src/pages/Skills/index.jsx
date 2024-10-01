import style from './skills.module.css'
import html from '../../assets/skills/html.png'
import css from '../../assets/skills/css.png'
import js from '../../assets/skills/javascript.png'
import php from '../../assets/skills/php.png'
import python from '../../assets/skills/python.png'
import java from '../../assets/skills/java.png'
import c_plus_plus from '../../assets/skills/c++.png'
import angular from '../../assets/skills/angular.png'
import github from '../../assets/skills/github.svg'
import git from '../../assets/skills/git.png'
import postgresql from '../../assets/skills/postgresql.png'
import mongoDB from '../../assets/skills/mongodb.png'
import docker from '../../assets/skills/docker.png'
import bash from '../../assets/skills/bash.png'
import symfony from '../../assets/skills/symfony.png'
import elastic_search from '../../assets/skills/elastic-search.png'
import draw_io from '../../assets/skills/draw-io.svg'
import clion from '../../assets/skills/clion.svg'
import figma from '../../assets/skills/figma.svg'
import flutter from '../../assets/skills/flutter.svg'
import gitlab from '../../assets/skills/gitlab.svg'
import intellij from '../../assets/skills/intellij.svg'
import jira from '../../assets/skills/jira.svg'
import markdown from '../../assets/skills/markdown.svg'
import mysql from '../../assets/skills/mysql.svg'
import neo4j from '../../assets/skills/neo4j.png'
import nodejs from '../../assets/skills/nodejs.svg'
import pycharm from '../../assets/skills/pycharm.svg'
import firebase from '../../assets/skills/firebase.png'
import react from '../../assets/skills/react.svg'
import typescript from '../../assets/skills/typescript.png'
import cypress from '../../assets/skills/cypress.png'
import talend from '../../assets/skills/talend.svg'
import uml from '../../assets/skills/uml.svg'
import visual_paradigm from '../../assets/skills/visual-paradigm.png'
import vscode from '../../assets/skills/vscode.svg'
import sqlite from '../../assets/skills/sqlite.svg'
import api_rest from '../../assets/skills/api-rest.png'
import curiosite from '../../assets/skills/curiosite.png'
import perseverance from '../../assets/skills/perseverance.png'
import ponctualite from '../../assets/skills/ponctualite.png'
import organisation from '../../assets/skills/organisation.png'
import equipe from '../../assets/skills/equipe.png'
import français from '../../assets/skills/france.svg'
import anglais from '../../assets/skills/UK.svg'


function Skills() {
    return (
        <div className={style.skillsPage}>
            <h1>Compétences</h1>
            {/*Section Logiciels*/}
            <section className={style.skillsCategory}>
                <h2>Outils et Logiciels</h2>
                {/*Gestion de version*/}
                <div className={style.skillsSubcategory}>
                    <h3>Gestion de Version</h3>
                    <div className={style.skillItem}>
                        <img src={git} alt="Git"/>
                        <p>Git</p>
                    </div>
                    <div className={style.skillItem}>
                        <img src={github} alt="GitHub"/>
                        <p>GitHub</p>
                    </div>
                    <div className={style.skillItem}>
                        <img src={gitlab} alt="GitLab"/>
                        <p>GitLab</p>
                    </div>
                </div>

                {/*Développement*/}
                <div className={style.skillsSubcategory}>
                    <h3>Développement</h3>
                    <div className={style.skillItem}>
                        <img src={vscode} alt="VS Code"/>
                        <p>VS Code</p>
                    </div>
                    <div className={style.skillItem}>
                        <img src={pycharm} alt="PyCharm"/>
                        <p>PyCharm</p>
                    </div>
                    <div className={style.skillItem}>
                        <img src={intellij} alt="Intellij"/>
                        <p>Intellij</p>
                    </div>
                    <div className={style.skillItem}>
                        <img src={clion} alt="CLion"/>
                        <p>CLion</p>
                    </div>
                </div>

                {/*Conception et design*/}
                <div className={style.skillsSubcategory}>
                    <h3>Conception et Design</h3>
                    <div className={style.skillItem}>
                        <img src={figma} alt="Figma"/>
                        <p>Figma</p>
                    </div>
                    <div className={style.skillItem}>
                        <img src={draw_io} alt="Draw.io"/>
                        <p>Draw.io</p>
                    </div>
                    <div className={style.skillItem}>
                        <img src={visual_paradigm} alt="Visual Paradigm"/>
                        <p>Visual Paradigm</p>
                    </div>
                </div>

                {/*Autres outils*/}
                <div className={style.skillsSubcategory}>
                    <h3>Autres Outils</h3>
                    <div className={style.skillItem}>
                        <img src={docker} alt="Docker"/>
                        <p>Docker</p>
                    </div>
                    <div className={style.skillItem}>
                        <img src={jira} alt="Jira"/>
                        <p>Jira</p>
                    </div>
                </div>
            </section>

            {/*Section Langages Informatiques*/}
            <section className={style.skillsCategory}>
                <h2>Technologies et Langages de Programmation</h2>
                {/*Front-end*/}
                <div className={style.skillsSubcategory}>
                    <h3>Front-end</h3>
                    <div className={style.skillItem}>
                        <img src={html} alt="HTML"/>
                        <p>HTML</p>
                    </div>
                    <div className={style.skillItem}>
                        <img src={css} alt="CSS"/>
                        <p>CSS</p>
                    </div>
                    <div className={style.skillItem}>
                        <img src={js} alt="JavaScript"/>
                        <p>JavaScript</p>
                    </div>
                    <div className={style.skillItem}>
                        <img src={react} alt="React"/>
                        <p>React</p>
                    </div>
                    <div className={style.skillItem}>
                        <img src={typescript} alt="TypeScript"/>
                        <p>TypeScript</p>
                    </div>
                    <div className={style.skillItem}>
                        <img src={angular} alt="Angular"/>
                        <p>Angular</p>
                    </div>
                    <div className={style.skillItem}>
                        <img src={flutter} alt="Flutter"/>
                        <p>Flutter</p>
                    </div>
                </div>

                {/*Base de données*/}
                <div className={style.skillsSubcategory}>
                    <h3>Base de Données</h3>
                    <div className={style.skillItem}>
                        <img src={postgresql} alt="PostgreSQL"/>
                        <p>PostgreSQL</p>
                    </div>
                    <div className={style.skillItem}>
                        <img src={mysql} alt="MySQL"/>
                        <p>MySQL</p>
                    </div>
                    <div className={style.skillItem}>
                        <img src={sqlite} alt="SQLite"/>
                        <p>SQLite</p>
                    </div>
                    <div className={style.skillItem}>
                        <img src={mongoDB} alt="MongoDB"/>
                        <p>MongoDB</p>
                    </div>
                    <div className={style.skillItem}>
                        <img src={firebase} alt="Firebase"/>
                        <p>Firebase</p>
                    </div>
                    <div className={style.skillItem}>
                        <img src={neo4j} alt="Neo4j"/>
                        <p>Neo4j</p>
                    </div>
                    <div className={style.skillItem}>
                        <img src={elastic_search} alt="Elastic Search"/>
                        <p>Elastic Search</p>
                    </div>
                    <div className={style.skillItem}>
                        <img src={talend} alt="Talend"/>
                        <p>Talend</p>
                    </div>
                </div>

                {/*Back-end*/}
                <div className={style.skillsSubcategory}>
                    <h3>Back-end</h3>
                    <div className={style.skillItem}>
                        <img src={python} alt="Python"/>
                        <p>Python</p>
                    </div>
                    <div className={style.skillItem}>
                        <img src={nodejs} alt="Node.js"/>
                        <p>Node.js</p>
                    </div>
                    <div className={style.skillItem}>
                        <img src={php} alt="PHP"/>
                        <p>PHP</p>
                    </div>
                    <div className={style.skillItem}>
                        <img src={c_plus_plus} alt="C++"/>
                        <p>C++</p>
                    </div>
                    <div className={style.skillItem}>
                        <img src={symfony} alt="Symfony"/>
                        <p>Symfony</p>
                    </div>
                    <div className={style.skillItem}>
                        <img src={java} alt="Java"/>
                        <p>Java</p>
                    </div>
                    <div className={style.skillItem}>
                        <img src={api_rest} alt="API REST"/>
                        <p>API REST</p>
                    </div>
                    <div className={style.skillItem}>
                        <img src={bash} alt="Bash"/>
                        <p>Bash</p>
                    </div>
                    <div className={style.skillItem}>
                        <img src={cypress} alt="Cypress"/>
                        <p>Cypress</p>
                    </div>
                </div>

                <div className={style.skillsSubcategory}>
                    <h3>Autres Technologies</h3>
                    <div className={style.skillItem}>
                        <img src={markdown} alt="Markdown"/>
                        <p>Markdown</p>
                    </div>
                    <div className={style.skillItem}>
                        <img src={uml} alt="UML"/>
                        <p>UML</p>
                    </div>
                </div>
            </section>

            {/*Section Soft Skills*/}
            <section className={style.skillsCategory}>
                <h2>Soft Skills</h2>
                <div className={style.skillsSubcategory}>
                    <div className={style.skillItem}>
                        <img src={equipe} alt="Travail d'équipe"/>
                        <p>Travail d'équipe</p>
                    </div>
                    <div className={style.skillItem}>
                        <img src={ponctualite} alt="Ponctualité"/>
                        <p>Ponctualité</p>
                    </div>
                    <div className={style.skillItem}>
                        <img src={perseverance} alt="Persévérance"/>
                        <p>Persévérance</p>
                    </div>
                    <div className={style.skillItem}>
                        <img src={curiosite} alt="Curiosité"/>
                        <p>Curiosité</p>
                    </div>
                    <div className={style.skillItem}>
                        <img src={organisation} alt="Organisation"/>
                        <p>Organisation</p>
                    </div>
                </div>
            </section>

            {/*Section Langues*/}
            <section className={style.skillsCategory}>
                <h2>Langues</h2>
                <div className={style.skillsSubcategory}>
                    <div className={style.skillItem}>
                        <img src={français} alt="Français"/>
                        <p>Français (Natif)</p>
                    </div>
                    <div className={style.skillItem}>
                        <img src={anglais} alt="Anglais"/>
                        <p>Anglais (B1+)</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills;
