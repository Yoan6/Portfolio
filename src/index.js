import React, {useContext, useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Header from "./components/Header";
import Home from "./pages/Home";
import GlobalStyle from "./utils/style/GlobalStyle";
import Experiences from "./pages/Experiences";
import Projets from "./pages/Projets";
import Error from "./pages/Error";
import Skills from "./pages/Skills";
import FusionGraphe from "./pages/projets/FusionGraphe"
import RobotGravity from "./pages/projets/RobotGravity";
import {PageContext, PageProvider} from "./utils/context";

// Ordre des pages
const pageOrder = ['home', 'skills', 'projets', 'experiences'];

function App() {
    const location = useLocation();
    const { page } = useContext(PageContext);  // Page actuelle
    const prevPageRef = useRef(page);  // Utilise useRef pour mémoriser la page précédente
    const [transitionDirection, setTransitionDirection] = useState('left');

    useEffect(() => {
        const currentPageIndex = pageOrder.indexOf(page);
        const prevPageIndex = pageOrder.indexOf(prevPageRef.current);

        // Détermine la direction de la transition
        if (currentPageIndex > prevPageIndex) {
            setTransitionDirection('right'); // Vers la droite
        } else {
            setTransitionDirection('left'); // Vers la gauche
        }

        prevPageRef.current = page; // Met à jour la page précédente dans le ref sans déclencher de re-render

        // Ramène la vue vers le haut de la page
        window.scrollTo(0, 0);
    }, [location, page]);

    return (
        <>
            <GlobalStyle />
            <div className="rotating-background"></div>
            <Header />
            <SwitchTransition>
                <CSSTransition
                    key={location.pathname} // Clé basée sur la route pour déclencher la transition
                    classNames={`slide-${transitionDirection}`}
                    timeout={300}
                    unmountOnExit
                >
                    <Routes location={location}>
                        <Route path="/" element={<Home />} />
                        <Route path="/experiences" element={<Experiences />} />
                        <Route path="/projets" element={<Projets />} />
                        <Route path="/projets/fusion-graphe" element={<FusionGraphe />} />
                        <Route path="/projets/robot-gravity" element={<RobotGravity />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </CSSTransition>
            </SwitchTransition>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <PageProvider>
                <App />
            </PageProvider>
        </Router>
    </React.StrictMode>
);
