import React, {useEffect, useState} from "react";
import './Container.scss'
import {connect} from "react-redux";
import notfound from '../../img/notfound/not-found.png';
import {getMoviesGenres, getTvGenres} from "../../services/typeSearch/typeSearch";


const Container = (props) => {
  const list = props.shows;
  const typesForSearchGenre = props.types;


  const [listShows, setListShow] = useState([]);
  const [listGenre, setListGenre] = useState([]);

  useEffect(() => {

    setListShow(list.map(items => items));


  }, [list]);

  useEffect(() => {

    // listShows.map(genres=>console.log(genres.genre_ids));

    if (typesForSearchGenre === 'movies') {
      getMoviesGenres().then(res => {
        let key = Object.keys(res.data);
        setListGenre(Object.values(res.data[key]));

      });


    } else if (typesForSearchGenre === 'series') {
      getTvGenres().then(res => {
        let key = Object.keys(res.data);
        setListGenre(Object.values(res.data[key]));
      });


    }


  }, [listShows]);

  const viewGenre = (id) => {
    return id.map((items) => {
      const resultSearch = listGenre.filter(c => c.id === items)
      return resultSearch.map(d => d.name);

    });
  }


  return (
    <React.Fragment>

      <main className="container-main">{
        listShows.map(resultShow =>

          <div className="movie" key={resultShow.id}>
            <h2>{resultShow.title || resultShow.name}</h2>
            <p>Original Title :<span> {resultShow.original_name || resultShow.original_title}</span></p>
            <img
              src={resultShow.poster_path === null ? notfound : 'https://image.tmdb.org/t/p/w200' + resultShow.poster_path}
              alt={resultShow.title || resultShow.name}/>
            <p>Popularity : <span> {resultShow.popularity}</span></p>
            <p>Vote Average :<span> {resultShow.vote_average}</span></p>
            <p>Vote Count :<span> {resultShow.vote_count}</span></p>
            {resultShow.release_date === undefined ? <p>First Air Date :<span>{resultShow.first_air_date}</span></p> :
              <p>Release Date :<span>{resultShow.release_date}</span></p>}
            <p>Genres :
              <span>
            <ul>
              {viewGenre(resultShow.genre_ids).map((items, index) => {

                return (
                  <li key={index}>{items}</li>
                )
              })}
            </ul>
            </span></p>

            <section className="overview">
              <h4>Overview</h4>
              <span> {resultShow.overview || 'Not fount Overview'}</span>
            </section>


          </div>
        )
      }
      </main>
    </React.Fragment>
  )
};


const mapStateToProps = (state) => ({
  shows: state.shows,
});


const connected = connect(mapStateToProps)(Container);


export default connected;
