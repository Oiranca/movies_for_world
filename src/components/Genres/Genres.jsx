import React, {useEffect, useState} from "react";
import './Genres.scss'
import {getMoviesGenres, getTvGenres} from "../../services/typeSearch/typeSearch";
import * as ReactBootstrap from "react-bootstrap";
import {connect} from 'react-redux';
import {searchMoviesTypeGenre, searchTVTypeGenre} from "../../services/redux/action";


const Genres = (props) => {
  const typesForSearchGenre = props.types;
  const [typeGenre, setTypeGenre] = useState([]);

  useEffect(() => {

    if (typesForSearchGenre === 'movies') {
      getMoviesGenres().then(res => {
        let key = Object.keys(res.data);
        setTypeGenre(Object.values(res.data[key]));


      });


    } else if (typesForSearchGenre === 'series') {
      getTvGenres().then(res => {
        let key = Object.keys(res.data);
        setTypeGenre(Object.values(res.data[key]));

      });


    }


  }, [typesForSearchGenre]);

  const onClickForChecked = (e) => {

    if (typesForSearchGenre === 'movies') {
      props.genreMoviesSearch(e.target.id);
    } else if (typesForSearchGenre === 'series') {
      props.genreTvSearch(e.target.id);

    }


  };

  return (
    <main className='container-genres'>
      <ul className='genre-list'>
        {typeGenre.map(types =>

          <li key={types.id} className='list-items-genre'>
            <ReactBootstrap.FormCheck name="genre" className='check-items' label={types.name} type='radio' id={types.id}
                                      onChange={(e) => onClickForChecked(e)}/>
          </li>
        )}

      </ul>

    </main>
  )


};


const mapDispatchToProps = (dispatch) =>
  // atento porque mapDispatchToProps debe devolver un objeto
  ({
    genreMoviesSearch: (id) => searchMoviesTypeGenre(dispatch, id),
    genreTvSearch: (id) => searchTVTypeGenre(dispatch, id),


  });

const connected = connect(null, mapDispatchToProps)(Genres);

export default connected;
