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
    release_date: string;
    vote_average: string;
    original_title: string;
    tagline: string;
    overview: string;
    backdrop_path: string;
    type: string;
    key: string;
    name: string;
    profile_path: string;
    character: string;
    original_name: string;
    media_type: string;
}