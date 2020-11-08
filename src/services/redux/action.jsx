import {searchMoviesByGenre, searchTvByGenre} from "../typeSearch/typeSearch";

const searchMoviesTypeGenre = (dispatch, id) => {

  // dispatch({
  //   type: 'SEARCH_MOVIES_GENRE',
  //   payload: {
  //     id: id,
  //
  //   }
  //
  // });

  searchMoviesByGenre(id).then(res => dispatch({type: 'SEARCH_MOVIES_GENRE', payload: res.data.results}));


};
const searchTVTypeGenre = (dispatch, id) => {


    searchTvByGenre(id).then(res => dispatch({type: 'SEARCH_TV_GENRE', payload: res.data.results}));

    // dispatch({
    //   type: 'SEARCH_TV_GENRE',
    //   payload: {
    //     id:id,
    //
    //   }


  };

const searchByTitle = (dispatch, value, typeShowTitle) => {

  dispatch({
    type: 'SEARCH_TITLE',
    payload: {
      valueTitle: value,
      searchTitleShow: typeShowTitle,
    }

  });

};
const searchPopular = (dispatch, typePopular) => {

  dispatch({
    type: 'SEARCH_POPULAR',
    payload: {

      searchPopularShow: typePopular,
    }

  });

};


export {searchMoviesTypeGenre, searchTVTypeGenre, searchByTitle, searchPopular};
