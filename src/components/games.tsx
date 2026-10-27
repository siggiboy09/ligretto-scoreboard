import { type NavigateFunction } from "react-router-dom";

import { LocalStorage } from "./localstorage";
import type { Game } from "../types";

export class Games {
    static getAllGames(): Game[] {
        return LocalStorage.getAllGames();
    }

    static getActiveGameId(): number | null {
        return LocalStorage.getActiveGameId();
    }

    static setActiveGameId(gameId: number) {
        LocalStorage.setActiveGameId(gameId);
    }

    static loadGame(gameId: number): Game | null {
        return LocalStorage.loadGame(gameId);
    }

    static saveGame(game: Game) {
        LocalStorage.saveGame(game);
    }

    static createGame(navigate: NavigateFunction) {

        const name = window.prompt("Enter the game name:");

        if (!name || name.trim() === "") {
            alert("Invalid game name");
            return;
        }

        const playersInput = window.prompt("Enter the number of players:");

        if (playersInput === null) {
            alert("Invalid number of players");
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
    }

    static deleteGame(gameId: number, refreshGames: Function) {
        let answer = window.confirm("Delete game?");
	    if (answer) {
            LocalStorage.deleteGame(gameId);
            refreshGames()
	    }
    }

}
