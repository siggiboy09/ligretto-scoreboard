import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Games } from "../components/games";
import type { Game } from "../types";

import GameCard from "../components/game-card/game-card";


export default function GameList() {
    const navigate = useNavigate();
    const [games, setGames] = useState<Game[]>([]);

    const refreshGames = () => {
        setGames(Games.getAllGames());
    };

    useEffect(() => {
        refreshGames();
    }, []);

    const openGame = (gameId: number) => {
        Games.setActiveGameId(gameId);
        navigate("/game");
    };

    return (
        <div>
            <h1>Ligretto scoreboard</h1>
            <button onClick={() => Games.createGame(navigate)}>Add new game</button>

            {games.length > 0 ? (
                games.map(
                    (game) => (
                        <GameCard
                            key={game.id}
                            game={game}
                            onOpenGame={openGame}
                            onDeleteGame={(id) => Games.deleteGame(id, refreshGames)}
                        />
                    )
                )
            ) : (
                <p>No games yet.</p>
            )}
        </div>
    );
}
