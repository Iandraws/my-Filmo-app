export interface FilmResult {
    results: Film[]
}


export interface Film {
    id: string;
    poster_path: string;
    description: string;
}