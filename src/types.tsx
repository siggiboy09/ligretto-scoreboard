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