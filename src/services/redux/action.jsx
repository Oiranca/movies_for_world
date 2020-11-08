import {searchMoviesByGenre, searchMoviesByTitle, searchTvByGenre, searchTvByTitle} from "../typeSearch/typeSearch";

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
const searchPopular = (dispatch, typePopular) => {

  dispatch({
    type: 'SEARCH_POPULAR',
    payload: {

      searchPopularShow: typePopular,
    }

  });

};


export {searchMoviesTypeGenre, searchTVTypeGenre, searchByMoviesTitle, searchByTvTitle, searchPopular};
