import {
  searchMoviesByGenre,
  searchMoviesByTitle,
  searchMoviesPopular,
  searchTvByGenre,
  searchTvByTitle, searchTvPopular
} from "../typeSearch/typeSearch";

const searchMoviesTypeGenre = (dispatch, id) => {


  searchMoviesByGenre(id).then(res => dispatch({
    type: 'SEARCH_MOVIES_GENRE',
    payload: res.data.results
  })).catch(err => console.log(err));


};
const searchTVTypeGenre = (dispatch, id) => {


  searchTvByGenre(id).then(res => dispatch({
    type: 'SEARCH_TV_GENRE',
    payload: res.data.results
  })).catch(err => console.log(err));


};

const searchByMoviesTitle = (dispatch, value) => {

  searchMoviesByTitle(value).then(res => dispatch({
    type: 'SEARCH_MOVIES_TITLE', payload: res.data.results
  })).catch(err => console.log(err))


};
const searchByTvTitle = (dispatch, value) => {
  searchTvByTitle(value).then(res => dispatch({
    type: 'SEARCH_TV_TITLE', payload: res.data.results
  })).catch(err => console.log(err))


};
const searchPopularMovies = (dispatch) => {

  searchMoviesPopular().then(res => dispatch({
    type: 'POPULAR_MOVIES',
    payload: res.data.results
  })).catch(err => console.log(err));


};
const searchPopularTv = (dispatch) => {
  searchTvPopular().then(res => dispatch({
    type: 'POPULAR_TV',
    payload: res.data.results
  })).catch(err => console.log(err));
};


export {
  searchMoviesTypeGenre,
  searchTVTypeGenre,
  searchByMoviesTitle,
  searchByTvTitle,
  searchPopularMovies,
  searchPopularTv
};
