import type { Game } from "../types";

export class LocalStorage {

    // Manage games
    static saveGame(game: Game) {
        localStorage.setItem(`game-${game.id}`, JSON.stringify(game));
    }

    static loadGame(gameId: number): Game | null {
        const gameData = localStorage.getItem(`game-${gameId}`);
        if (gameData) {
            return JSON.parse(gameData);
        }
        return null;
    }

    static deleteGame(gameId: number) {
        localStorage.removeItem(`game-${gameId}`);
    }

    // Get all games
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
        return activeGameId ? parseInt(activeGameId, 10) : null;
    }

    static setActiveGameId(gameId: number) {
        localStorage.setItem("activeGameId", gameId.toString());
    }
}