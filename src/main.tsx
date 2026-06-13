import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Game from './Pages/game';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Game />}/>
                <Route path="/game" element={<Game />}/>
                <Route path="/new-game" element={<Game />}/>
            </Routes>
        </BrowserRouter>
    </StrictMode>
)