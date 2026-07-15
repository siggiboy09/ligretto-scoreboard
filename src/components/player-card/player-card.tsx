import type { Player } from "../../types";
import "./player-card.css";


type PlayerCardProps = {
    player: Player;
    onAddPoint: (playerId: number) => void;
    onRemovePoint: (playerId: number) => void;
    onEditName: (playerId: number) => void;
};

export default function PlayerCard({ player, onAddPoint, onRemovePoint, onEditName }: PlayerCardProps) {
    return (
        <div className="card player-card">
            <p className="player-name">{player.name}</p>
            <p className="player-score">{player.score}</p>
            <button onClick={() => onEditName(player.id)} className="player-edit">Edit</button>
            <button onClick={() => onRemovePoint(player.id)} className="player-minus">-</button>
            <button onClick={() => onAddPoint(player.id)} className="player-plus">+</button>
        </div>
    );
}