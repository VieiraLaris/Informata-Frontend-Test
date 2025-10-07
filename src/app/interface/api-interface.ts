export interface Game {
    id: string;
    name: string;
    description: string;
    developer: string;
    publisher: string;
    released_date: string;
}

export interface ZeldaApiResponse {
    success: boolean;
    count: number;
    data: Game[];
}

