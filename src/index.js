import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/Header";
import Home from "./pages/Home";
import GlobalStyle from "./style/GlobalStyle";
import Formations from "./pages/Formations";
import Projets from "./pages/Projets";
import Error from "./pages/Error";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/formations" element={<Formations />} />
                <Route path="/projets" element={<Projets />} />
                <Route path="*" element={<Error/>}/>
            </Routes>
        </Router>
    </React.StrictMode>
);
