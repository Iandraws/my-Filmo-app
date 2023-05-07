export interface FilmResult {
    results: Film[]
}


export interface CastResult {
    cast: Film;
}
export interface Film {
    id: string;
    title: string;
    poster_path: string;
    description: string;
}