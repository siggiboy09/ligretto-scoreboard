export class LocalStorage {
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
}