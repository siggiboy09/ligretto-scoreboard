import type { Game } from "../types";


export class LocalStorage {

    static saveGame(game: Game) {
        localStorage.setItem(
            `game-${game.id}`,
            JSON.stringify(game)
        );
    }

    static loadGame(gameId: number): Game | null {
        const gameData = localStorage.getItem(`game-${gameId}`);

        if (!gameData) {
            return null;
        }

        return JSON.parse(gameData);
    }

    static deleteGame(gameId: number) {
        localStorage.removeItem(`game-${gameId}`);
    }

    static getAllGames(): Game[] {
        const games: Game[] = [];

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);

            if (key && key.startsWith("game-")) {
                const gameData = localStorage.getItem(key);

                if (gameData) {
                    games.push(JSON.parse(gameData));
                }
            }
        }

        return games;
    }

    // Manage active game
    static getActiveGameId(): number | null {
        const activeGameId = localStorage.getItem("activeGameId");

        if (!activeGameId) {
            return null;
        }

        return parseInt(activeGameId, 10);
    }

    static setActiveGameId(gameId: number) {
        localStorage.setItem("activeGameId", gameId.toString());
    }
}
