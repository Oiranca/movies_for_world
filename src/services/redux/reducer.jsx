const reducer = (state = [], action) => {

  switch (action.type) {

    case 'SEARCH_MOVIES_GENRE':

      state = action.payload.map(tv => tv);

      console.log(state)
      break;

    case 'SEARCH_TV_GENRE':

      state = action.payload.map(tv => tv);

      console.log(state)
      break;

    default:
      return state;

  }


};

export default reducer;

