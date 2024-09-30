import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home";
import GlobalStyle from "./utils/style/GlobalStyle";
import Experiences from "./pages/Experiences";
import Projets from "./pages/Projets";
import Error from "./pages/Error";
import Skills from "./pages/Skills";
import FusionGraphe from "./pages/projets/FusionGraphe";
import RobotGravity from "./pages/projets/RobotGravity";
import OldPortfolio from "./pages/projets/OldPortfolio";
import GADI from "./pages/projets/GADI";
import TourOfHeroes from "./pages/projets/TourOfHeroes";
import CarnetStage from "./pages/projets/CarnetStage";
import APINews from "./pages/projets/API-news";
import Crescendo from "./pages/projets/Crescendo";
import EpsilonManager from "./pages/projets/EpsilonManager";
import { PageProvider } from "./utils/context";

function App() {
    const location = useLocation();

    useEffect(() => {
        // Ramène la vue vers le haut de la page
        window.scrollTo(0, 0);
    }, [location]); // Ajoute location comme dépendance pour scroll sur chaque changement de page

    return (
        <>
            <GlobalStyle />
            <div className="rotating-background"></div>
            <Header />
            <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/experiences" element={<Experiences />} />
                <Route path="/projets" element={<Projets />} />
                <Route path="/projets/fusion-graphe" element={<FusionGraphe />} />
                <Route path="/projets/robot-gravity" element={<RobotGravity />} />
                <Route path="/projets/old-portfolio" element={<OldPortfolio />} />
                <Route path="/projets/gadi" element={<GADI />} />
                <Route path="/projets/tour-of-heroes" element={<TourOfHeroes />} />
                <Route path="/projets/carnet-stage" element={<CarnetStage />} />
                <Route path="/projets/api-news" element={<APINews />} />
                <Route path="/projets/crescendo" element={<Crescendo />} />
                <Route path="/projets/epsilon-manager" element={<EpsilonManager />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router basename="/Portfolio">
            <PageProvider>
                <App />
            </PageProvider>
        </Router>
    </React.StrictMode>
);
