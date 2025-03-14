// themoviedb configuration starts

// const API_KEY = "07485070e3a94cc7937a837ccee25bca";
// const BASE_URL = "https://api.themoviedb.org/3";

// export const getPopularMovies = async () => {
//     const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
//     const data = await response.json();
//     return data.results;
// };

// export const searchMovies = async (query) => {
//     const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
//     const data = await response.json();
//     return data.results;
// };

// themoviedb configuration ends


// omdb configuration starts

const API_KEY = "56eced40";
const BASE_URL = "https://www.omdbapi.com/";

export const getLatestActionMovies = async () => {
    const response = await fetch(`${BASE_URL}?s=action&y=2024&apikey=${API_KEY}`);
    const data = await response.json();
    return data.Search;
}

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.Search;
};

// omdb configuration ends