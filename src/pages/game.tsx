import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LocalStorage } from "../components/localstorage";
import PlayerCard from "../components/player-card/player-card";
import type { Game } from "../types";

const emptyGame: Game = {
    id: 0,
    name: "",
    players: [],
};

export default function Game() {
    const navigate = useNavigate();
    const [game, setGame] = useState<Game>(emptyGame);

    useEffect(() => {
        const activeGameId = LocalStorage.getActiveGameId();
        if (activeGameId === null) {
            return;
        }

        const savedGame = LocalStorage.loadGame(activeGameId);
        if (savedGame) {
            setGame(savedGame);
        }
    }, []);

    const updatePlayerScore = (playerId: number, delta: number) => {
        setGame((prevGame) => {
            const updatedGame: Game = {
                ...prevGame,
                players: prevGame.players.map((player) => {
                    if (player.id !== playerId) {
                        return player;
                    }

                    return {
                        ...player,
                        score: player.score + delta,
                    };
                }),
            };

            LocalStorage.saveGame(updatedGame);
            return updatedGame;
        });
    };

    const addPoint = (playerId: number) => {
        const value = prompt("Enter the value to add to the score:", "0");
        if (value === null) {
            return;
        }

        const pointsToAdd = parseInt(value, 10);
        if (isNaN(pointsToAdd)) {
            alert("Invalid input. Please enter a valid number.");
            return;
        }

        updatePlayerScore(playerId, pointsToAdd);
    };

    const removePoint = (playerId: number) => {
        const value = prompt("Enter the value to remove from the score:", "0");
        if (value === null) {
            return;
        }

        const pointsToRemove = parseInt(value, 10);
        if (isNaN(pointsToRemove)) {
            alert("Invalid input. Please enter a valid number.");
            return;
        }

        updatePlayerScore(playerId, -pointsToRemove);
    };

    const editPlayerName = (playerId: number) => {
        const player = game.players.find((entry) => entry.id === playerId);
        if (!player) {
            return;
        }

        const newName = prompt("Enter the new player name:", player.name);
        if (newName === null) {
            return;
        }

        const trimmedName = newName.trim();
        if (trimmedName === "") {
            alert("Player name cannot be empty.");
            return;
        }

        setGame((prevGame) => {
            const updatedGame: Game = {
                ...prevGame,
                players: prevGame.players.map((entry) => {
                    if (entry.id !== playerId) {
                        return entry;
                    }

                    return {
                        ...entry,
                        name: trimmedName,
                    };
                }),
            };

            LocalStorage.saveGame(updatedGame);
            return updatedGame;
        });
    };

    const editGameName = () => {
        const newName = prompt("Enter the new game name:", game.name);
        if (newName === null) {
            return;
        }

        const trimmedName = newName.trim();
        if (trimmedName === "") {
            alert("Game name cannot be empty.");
            return;
        }

        setGame((prevGame) => {
            const updatedGame: Game = {
                ...prevGame,
                name: trimmedName,
            };

            LocalStorage.saveGame(updatedGame);
            return updatedGame;
        });
    };

    return (
        <main>
            <button className="back-button" onClick={() => navigate("/")}>Back</button>
            <div className="game-title-row">
                <h1 className="game-title">{game.name}</h1>
                <button className="game-edit-button" onClick={editGameName}>Edit</button>
            </div>
            {game.players.map((player) => (
                <PlayerCard
                    key={player.id}
                    player={player}
                    onAddPoint={addPoint}
                    onRemovePoint={removePoint}
                    onEditName={editPlayerName}
                />
            ))}
        </main>
    );
}
