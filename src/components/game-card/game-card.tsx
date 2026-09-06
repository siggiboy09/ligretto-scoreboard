import type { Game } from "../../types";

import "./game-card.css";

type GameCardProps = {
    game: Game;
    onOpenGame: (gameId: number) => void;
    onDeleteGame: (gameId: number) => void;
};

export default function GameCard({ game, onOpenGame, onDeleteGame }: GameCardProps) {
    return (
        <section className="card game-card">
            <h2>{game.name}</h2>
            <button onClick={() => onOpenGame(game.id)}>Go to game</button>
            <button className="delete-button" onClick={() => onDeleteGame(game.id)}>Delete</button>
        </section>
    );
}
