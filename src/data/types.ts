export type MoviesTypes = {
    id:                    number;
    title:                 string;
    original_title:        string;
    plot_overview:         string;
    type:                  string;
    runtime_minutes:       null;
    year:                  number;
    end_year:              number;
    release_date:          Date;
    imdb_id:               string;
    tmdb_id:               number;
    tmdb_type:             string;
    genres:                number[];
    genre_names:           string[];
    user_rating:           number;
    critic_score:          number;
    us_rating:             string;
    poster:                string;
    backdrop:              string;
    original_language:     string;
    similar_titles:        number[];
    networks:              number[];
    network_names:         string[];
    relevance_percentile:  number;
    popularity_percentile: null;
    trailer:               string;
    trailer_thumbnail:     string;
    sources:               Source[];
}

export type Source = {
    source_id:   number;
    name:        string;
    type:        Type;
    region:      Region;
    ios_url:     URL;
    android_url: URL;
    web_url:     string;
    format:      Format | null;
    price:       number | null;
    seasons:     number;
    episodes:    number;
}

export enum URL {
    DeeplinksAvailableForPaidPlansOnly = "Deeplinks available for paid plans only.",
}

export enum Format {
    HD = "HD",
    SD = "SD",
    The4K = "4K",
}

export enum Region {
    Au = "AU",
    CA = "CA",
    Es = "ES",
    GB = "GB",
    Us = "US",
}

export enum Type {
    Buy = "buy",
    Sub = "sub",
}

export type MovieListTypes = {
    titles:        Title[];
    page:          number;
    total_pages:   number;
    total_results: number;
}

export type Title = {
    id:        number;
    title:     string;
    year:      number;
    imdb_id:   string;
    tmdb_id:   number;
    tmdb_type: TmdbType;
    type:      Type;
}

export enum TmdbType {
    Movie = "movie",
    Tv = "tv",
}

export enum Type {
    Movie = "movie",
    TvMiniseries = "tv_miniseries",
    TvSeries = "tv_series",
    TvSpecial = "tv_special",
}