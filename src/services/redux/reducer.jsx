const reducer = (state = {shows: []}, action) => {

  switch (action.type) {

    case 'SEARCH_MOVIES_GENRE':

      state.shows = action.payload.map(tv => tv);

      break;

    case 'SEARCH_TV_GENRE':

      state.shows = action.payload.map(tv => tv);

      break;
    case 'SEARCH_MOVIES_TITLE':

      state.shows = action.payload.map(tv => tv);

      break;

    case 'SEARCH_TV_TITLE':

      state.shows = action.payload.map(tv => tv);
      console.log(state)
      break;

    default:
      return state;

  }
  return {
    shows: [...state.shows]
  };


};

export default reducer;

