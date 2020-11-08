import axios from "axios";
import dotEnv from "dotenv";

dotEnv.config();


const getMoviesGenres = () => axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`);

const getTvGenres = () => axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_API_KEY}`);

const searchMoviesByTitle = (movieTitle) => axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${movieTitle}`);

const searchTvByTitle = (tvTitle) => axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_API_KEY}&query=${tvTitle}`);

const searchMoviesByGenre = (idGenreMovie) => axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${idGenreMovie}`);

const searchTvByGenre = (idGenreTv) => axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${idGenreTv}`);


export {getMoviesGenres, getTvGenres, searchMoviesByTitle, searchTvByTitle, searchMoviesByGenre, searchTvByGenre};
