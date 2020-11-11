const reducer = (state = {shows: []}, action) => {

    switch (action.type) {

      case 'SEARCH_MOVIES_GENRE':

        return {
          ...state,
          shows: action.payload,
        }


      case 'SEARCH_TV_GENRE' :

        return {
          ...state,
          shows: action.payload,
        }
      case 'SEARCH_MOVIES_TITLE' :


        return {
          ...state,
          shows: action.payload,
        }
      case'SEARCH_TV_TITLE':


        return {
          ...state,
          shows: action.payload,
        }

      case 'POPULAR_MOVIES':


        return {
          ...state,
          shows: action.payload,
        }


      case 'POPULAR_TV':

        return {
          ...state,
          shows: action.payload,
        }

      default:
        return state;

    }


  }
;

export default reducer;

