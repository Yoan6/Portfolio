import './skills.css'
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
import react from '../../assets/skills/react.svg'
import typescript from '../../assets/skills/typescript.png'
import uml from '../../assets/skills/uml.svg'
import visual_paradigm from '../../assets/skills/visual-paradigm.png'
import vscode from '../../assets/skills/vscode.svg'
import sqlite from '../../assets/skills/sqlite.svg'
import api_rest from '../../assets/skills/api-rest.png'
import curiosite from '../../assets/skills/curiosite.png'
import perseverance from '../../assets/skills/perseverance.png'
import ponctualite from '../../assets/skills/ponctualite.png'
import equipe from '../../assets/skills/equipe.png'
import français from '../../assets/skills/france.svg'
import anglais from '../../assets/skills/UK.svg'


function Skills() {
    return (
        <div className="skills-page">
            <h1>Compétences</h1>
            {/*Section Langages Informatiques*/}
            <section className="skills-category">
                <h2>Langages Informatiques</h2>
                <div className="skills-subcategory">
                    <h3>Front-end</h3>
                    <div className="skill-item">
                        <img src={html} alt="HTML"/>
                        <p>HTML</p>
                    </div>
                    <div className="skill-item">
                        <img src={css} alt="CSS"/>
                        <p>CSS</p>
                    </div>
                    <div className="skill-item">
                        <img src={js} alt="JavaScript"/>
                        <p>JavaScript</p>
                    </div>
                    <div className="skill-item">
                        <img src={react} alt="React"/>
                        <p>React</p>
                    </div>
                    <div className="skill-item">
                        <img src={typescript} alt="TypeScript"/>
                        <p>TypeScript</p>
                    </div>
                    <div className="skill-item">
                        <img src={angular} alt="Angular"/>
                        <p>Angular</p>
                    </div>
                    <div className="skill-item">
                        <img src={flutter} alt="Flutter"/>
                        <p>Flutter</p>
                    </div>
                </div>

                <div className="skills-subcategory">
                    <h3>Back-end</h3>
                    <div className="skill-item">
                        <img src={python} alt="Python"/>
                        <p>Python</p>
                    </div>
                    <div className="skill-item">
                        <img src={nodejs} alt="Node.js"/>
                        <p>Node.js</p>
                    </div>
                    <div className="skill-item">
                        <img src={php} alt="PHP"/>
                        <p>PHP</p>
                    </div>
                    <div className="skill-item">
                        <img src={c_plus_plus} alt="C++"/>
                        <p>C++</p>
                    </div>
                    <div className="skill-item">
                        <img src={symfony} alt="Symfony"/>
                        <p>Symfony</p>
                    </div>
                    <div className="skill-item">
                        <img src={java} alt="Java"/>
                        <p>Java</p>
                    </div>
                    <div className="skill-item">
                        <img src={api_rest} alt="API rest"/>
                        <p>API rest</p>
                    </div>
                    <div className="skill-item">
                        <img src={bash} alt="Bash"/>
                        <p>Bash</p>
                    </div>
                </div>

                <div className="skills-subcategory">
                    <h3>Base de données</h3>
                    <div className="skill-item">
                        <img src={postgresql} alt="PostgreSQL"/>
                        <p>PostgreSQL</p>
                    </div>
                    <div className="skill-item">
                        <img src={mysql} alt="MySQL"/>
                        <p>MySQL</p>
                    </div>
                    <div className="skill-item">
                        <img src={sqlite} alt="SQLite"/>
                        <p>SQLite</p>
                    </div>
                    <div className="skill-item">
                        <img src={mongoDB} alt="MongoDB"/>
                        <p>MongoDB</p>
                    </div>
                    <div className="skill-item">
                        <img src={neo4j} alt="Neo4j"/>
                        <p>Neo4j</p>
                    </div>
                    <div className="skill-item">
                        <img src={elastic_search} alt="Elastic Search"/>
                        <p>Elastic Search</p>
                    </div>
                </div>

                <div className="skills-subcategory">
                    <h3>Autres</h3>
                    <div className="skill-item">
                        <img src={markdown} alt="Markdown"/>
                        <p>Markdown</p>
                    </div>
                    <div className="skill-item">
                        <img src={uml} alt="UML"/>
                        <p>UML</p>
                    </div>
                </div>
            </section>

            {/*Section Logiciels*/}
            <section className="skills-category">
                <h2>Logiciels</h2>
                <div className="skills-subcategory">
                    <h3>IDE</h3>
                    <div className="skill-item">
                        <img src={vscode} alt="VS Code"/>
                        <p>VS Code</p>
                    </div>
                    <div className="skill-item">
                        <img src={pycharm} alt="PyCharm"/>
                        <p>PyCharm</p>
                    </div>
                    <div className="skill-item">
                        <img src={intellij} alt="Intellij"/>
                        <p>Intellij</p>
                    </div>
                    <div className="skill-item">
                        <img src={clion} alt="CLion"/>
                        <p>CLion</p>
                    </div>
                </div>

                <div className="skills-subcategory">
                    <h3>Conception</h3>
                    <div className="skill-item">
                        <img src={figma} alt="Figma"/>
                        <p>Figma</p>
                    </div>
                    <div className="skill-item">
                        <img src={draw_io} alt="Draw.io"/>
                        <p>Draw.io</p>
                    </div>
                    <div className="skill-item">
                        <img src={visual_paradigm} alt="Visual Paradigm"/>
                        <p>Visual Paradigm</p>
                    </div>
                </div>

                <div className="skills-subcategory">
                    <h3>Versionning</h3>
                    <div className="skill-item">
                        <img src={git} alt="Git"/>
                        <p>Git</p>
                    </div>
                    <div className="skill-item">
                        <img src={github} alt="GitHub"/>
                        <p>GitHub</p>
                    </div>
                    <div className="skill-item">
                        <img src={gitlab} alt="GitLab"/>
                        <p>GitLab</p>
                    </div>
                </div>


                <div className="skills-subcategory">
                    <h3>Virtualisation/containers</h3>
                    <div className="skill-item">
                        <img src={docker} alt="Docker"/>
                        <p>Docker</p>
                    </div>
                </div>
            </section>

            {/*Section Soft Skills*/}
            <section className="skills-category">
            <h2>Soft Skills</h2>
                <div className="skills-subcategory">
                    <div className="skill-item">
                        <img src={equipe} alt="Travail d'équipe"/>
                        <p>Travail d'équipe</p>
                    </div>
                    <div className="skill-item">
                        <img src={ponctualite} alt="Ponctualité"/>
                        <p>Ponctualité</p>
                    </div>
                    <div className="skill-item">
                        <img src={perseverance} alt="Persévérance"/>
                        <p>Persévérance</p>
                    </div>
                    <div className="skill-item">
                        <img src={curiosite} alt="Curiosité"/>
                        <p>Curiosité</p>
                    </div>
                </div>
            </section>

            {/*Section Langues*/}
            <section className="skills-category">
                <h2>Langues</h2>
                <div className="skills-subcategory">
                    <div className="skill-item">
                        <img src={français} alt="Français"/>
                        <p>Français (Natif)</p>
                    </div>
                    <div className="skill-item">
                        <img src={anglais} alt="Anglais"/>
                        <p>Anglais (B2)</p>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Skills