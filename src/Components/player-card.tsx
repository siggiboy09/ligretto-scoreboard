import { useState } from "react";
import "./player-card.css";

export default function PlayerCard() {
    const [playerName, setPlayerName] = useState("Player 1");
    const [playerScore, setPlayerScore] = useState(0);

    return (
        <div className="player-card">
            <p className="player-name">{playerName}</p>
            <p className="player-score">{playerScore}</p>
        </div>
    )
}