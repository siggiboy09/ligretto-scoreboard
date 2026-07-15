import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';

import GameList from './pages/game-list';
import Game from './pages/game';

import './index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={<GameList />}/>
                <Route path="/game" element={<Game />}/>
            </Routes>
        </HashRouter>
    </StrictMode>
)