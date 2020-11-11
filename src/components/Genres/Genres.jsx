import React, {useEffect, useState} from "react";
import './Genres.scss'
import {getMoviesGenres, getTvGenres} from "../../services/typeSearch/typeSearch";
import * as ReactBootstrap from "react-bootstrap";
import {connect} from 'react-redux';
import {searchMoviesTypeGenre, searchTVTypeGenre} from "../../services/redux/action";
import Container from "../Container/Container";




const Genres = (props) => {

  const searchType = props.searchType;
  const typesForSearchGenre = props.types;
  const [typeGenre, setTypeGenre] = useState([]);
  const [active, setTActive] = useState(false);
  const [activeContainer,setActiveContainer]=useState(false);

  useEffect(() => {

    if (typesForSearchGenre === 'movies') {
      getMoviesGenres().then(res => {
        let key = Object.keys(res.data);
        setTypeGenre(Object.values(res.data[key]));


      }).catch(err => console.log(err));


    } else if (typesForSearchGenre === 'series') {
      getTvGenres().then(res => {
        let key = Object.keys(res.data);
        setTypeGenre(Object.values(res.data[key]));

      }).catch(err => console.log(err));


    }

    if (searchType === 'SEARCH_BY_GENRE') {
      setTActive(true)
    } else {
      setTActive(false)
      setActiveContainer(false);

    }


  }, [typesForSearchGenre, searchType]);

  const onClickForChecked = (e) => {

    if (typesForSearchGenre === 'movies') {
      props.genreMoviesSearch(e.target.id);
      setActiveContainer(true);

    } else if (typesForSearchGenre === 'series') {
      props.genreTvSearch(e.target.id);
      setActiveContainer(true);


    }


  };

  return (

    <React.Fragment>

      <main className='container-genres'>
        {active && <ul className='genre-list'>
          {typeGenre.map(types =>

            <li key={types.id} className='list-items-genre'>
              <ReactBootstrap.FormCheck name="genre" className='check-items' label={types.name} type='radio' id={types.id}
                                        onChange={(e) => onClickForChecked(e)}/>
            </li>
          )}

        </ul>}

      </main>
      <Container types={typesForSearchGenre} searchType={searchType} show={activeContainer}/>

    </React.Fragment>



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
