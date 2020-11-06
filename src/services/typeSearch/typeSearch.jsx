import axios from "axios";
import dotEnv from "dotenv";

dotEnv.config();

console.log(process.env.REACT_APP_API_KEY)


const getMoviesGenres = () => axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`);

const getTvGenres = () =>  axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_API_KEY}`);




export {getMoviesGenres, getTvGenres};
