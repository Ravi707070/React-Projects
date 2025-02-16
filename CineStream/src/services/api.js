const API_KEY = "apikey";
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

// Fetch some predefined popular movies (OMDb has no 'popular' endpoint)
export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}&s=Batman&type=movie`);
  const data = await response.json();
  return data.Search || []; // Use `Search` instead of `results`
};

// Search movies dynamically
export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}&s=${encodeURIComponent(query)}&type=movie`);
  const data = await response.json();
  return data.Search || []; // Use `Search` instead of `results`
};
