import { useState } from "react";
import PlayerCard from "../components/player-card/player-card";

export type Player = {
    id: number;
    name: string;
    score: number;
};

export type Game = {
    id: number;
    name: string;
    players: Player[];
};

export default function Game() {
    const [players, setPlayers] = useState<Player[]>([
        { id: 1, name: "Alice", score: 0 },
        { id: 2, name: "Bob", score: 0 },
    ]);

    const addPoint = (playerId: number) => {
        const value = prompt("Enter the value to add to the score:", "0");
        if (value === null) {
            return; // User cancelled the prompt
        }

        const pointsToAdd = parseInt(value, 10);
        if (isNaN(pointsToAdd)) {
            alert("Invalid input. Please enter a valid number.");
            return;
        }

        setPlayers((prev) =>
            prev.map((player) => {
                if (player.id !== playerId) {
                    return player;
                }

                return {
                    ...player,
                    score: player.score + pointsToAdd,
                };
            })
        );
    };

    const removePoint = (playerId: number) => {
        const value = prompt("Enter the value to remove from the score:", "0");
        if (value === null) {
            return; // User cancelled the prompt
        }

        const pointsToRemove = parseInt(value, 10);
        if (isNaN(pointsToRemove)) {
            alert("Invalid input. Please enter a valid number.");
            return;
        }

        setPlayers((prev) =>
            prev.map((player) => {
                if (player.id !== playerId) {
                    return player;
                }

                return {
                    ...player,
                    score: player.score - pointsToRemove,
                };
            })
        );
    };

    return (
        <main>
            {players.map((player) => (
                <PlayerCard
                    key={player.id}
                    player={player}
                    onAddPoint={addPoint}
                    onRemovePoint={removePoint}
                />
            ))}
        </main>
    )
}