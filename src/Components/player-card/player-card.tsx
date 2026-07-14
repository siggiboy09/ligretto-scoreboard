import { useState } from "react";
import type { Player } from "../Pages/game";
import "./player-card.css";


type PlayerCardProps = {
    player: Player;
    onAddPoint: (playerId: number) => void;
    onRemovePoint: (playerId: number) => void;
};

export default function PlayerCard({player, onAddPoint, onRemovePoint}: PlayerCardProps) {

    return (
        <div className="player-card">
            <p className="player-name">{player.name}</p>
            <p className="player-score">{player.score}</p>
            <button onClick={() => onRemovePoint(player.id)} className="player-minus">-</button>
            <button onClick={() => onAddPoint(player.id)} className="player-plus">+</button>
        </div>
    )
}