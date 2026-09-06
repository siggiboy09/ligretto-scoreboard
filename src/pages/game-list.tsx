import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { LocalStorage } from "../components/localstorage";
import type { Game } from "../types";

import GameCard from "../components/game-card/game-card";


export default function GameList() {
    const navigate = useNavigate();
    const [games, setGames] = useState<Game[]>([]);

    const refreshGames = () => {
        setGames(LocalStorage.getAllGames());
    };

    useEffect(() => {
        refreshGames();
    }, []);

    const openGame = (gameId: number) => {
        LocalStorage.setActiveGameId(gameId);
        navigate("/game");
    };

    const deleteGame = (gameId: number) => {
        let answer = window.confirm("Delete game?");
	    if (answer) {
            LocalStorage.deleteGame(gameId);
            refreshGames();
	    }
    };

    const createGame = () => {
        const name = window.prompt("Enter the game name:");

        if (!name || name.trim() === "") {
            window.alert("Invalid game name");
            return;
        }

        const playersInput = window.prompt("Enter the number of players:");

        if (playersInput === null) {
            return;
        }

        const playerCount = Number.parseInt(playersInput, 10);

        if (Number.isNaN(playerCount) || playerCount <= 0) {
            window.alert("Invalid amount of players");
            return;
        }

        const newGame: Game = {
            id: Date.now(),
            name: name.trim(),
            players: Array.from(
                { length: playerCount },
                (_, index) => ({
                    id: index + 1,
                    name: `Player ${index + 1}`,
                    score: 0,
                })
            ),
        };

        LocalStorage.saveGame(newGame);
        LocalStorage.setActiveGameId(newGame.id);

        navigate("/game");
    };

    return (
        <div>
            <h1>Ligretto scoreboard</h1>
            <button onClick={createGame}>Add new game</button>

            {games.length > 0 ? (
                games.map(
                    (game) => (
                        <GameCard
                            key={game.id}
                            game={game}
                            onOpenGame={openGame}
                            onDeleteGame={deleteGame}
                        />
                    )
                )
            ) : (
                <p>No games yet.</p>
            )}
        </div>
    );
}
