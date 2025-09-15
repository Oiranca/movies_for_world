import React, { useEffect, useState } from 'react';
import './Search.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import InputGroup from 'react-bootstrap/InputGroup';
import Genres from '../Genres/Genres';
import {
  searchByMoviesTitle,
  searchByTvTitle,
  searchPopularMovies,
  searchPopularTv
} from '../../services/redux/action';
import { connect } from 'react-redux';

const types = {
  TITTLE: 'Título',
  GENRES: 'Género',
  POPULAR: 'Las 10 populares'
};
const SEARCH_BY_TITLE = 'SEARCH_BY_TITLE';
const SEARCH_BY_GENRE = 'SEARCH_BY_GENRE';
const SEARCH_BY_POPULAR = 'SEARCH_BY_POPULAR';
const INITIAL_STATE_SEARCH = '';

const Search = props => {
  const [activeContainer, setActiveContainer] = useState(false);
  const [searchType, setSearchType] = useState(INITIAL_STATE_SEARCH);
  const typeRoutes = props.match.params.typeRoute;

  useEffect(() => {
    setSearchType(INITIAL_STATE_SEARCH);
    setActiveContainer(false);
  }, [typeRoutes]);

  const onClickForSearch = type => {
    setSearchType(type);
    setActiveContainer(false);

    if (type === SEARCH_BY_POPULAR) {
      if (typeRoutes === 'movies') {
        props.popularMovies();
        setActiveContainer(true);
      } else if (typeRoutes === 'series') {
        props.popularTv();
        setActiveContainer(true);
      }
    }
  };

  const handleChange = event => {
    if (event.keyCode === 13 && typeRoutes === 'movies') {
      props.moviesTitleSearch(event.target.value, typeRoutes);
      setActiveContainer(true);
      event.target.value = '';
    } else if (event.keyCode === 13 && typeRoutes === 'series') {
      props.tvTitleSearch(event.target.value, typeRoutes);
      setActiveContainer(true);
      event.target.value = '';
    }
  };

  return (
    <React.Fragment>
      <article className="navbar-items">
        <Navbar className="navbar-movies" expand="md">
          <Navbar.Brand id="text-navbar">
            {' '}
            {typeRoutes.toUpperCase()}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <InputGroup>
                <div className="align-items-center">
                  <div>
                    <div>
                      <input
                        readOnly={searchType !== SEARCH_BY_TITLE}
                        onKeyUp={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      name="filter"
                      className="check-items"
                      type="radio"
                      id={types.TITTLE}
                      onChange={e => onClickForSearch(SEARCH_BY_TITLE)}
                      checked={searchType === SEARCH_BY_TITLE}
                    />
                    <label htmlFor={types.TITTLE}>{types.TITTLE}</label>
                  </div>
                  <div>
                    <input
                      name="filter"
                      className="check-items"
                      type="radio"
                      id={types.GENRES}
                      onChange={e => onClickForSearch(SEARCH_BY_GENRE)}
                      checked={searchType === SEARCH_BY_GENRE}
                    />
                    <label htmlFor={types.GENRES}>{types.GENRES}</label>
                  </div>
                  <div>
                    <input
                      name="filter"
                      className="check-items"
                      type="radio"
                      id={types.POPULAR}
                      onChange={e => onClickForSearch(SEARCH_BY_POPULAR)}
                      checked={searchType === SEARCH_BY_POPULAR}
                    />
                    <label htmlFor={types.POPULAR}>{types.POPULAR}</label>
                  </div>
                </div>
              </InputGroup>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </article>
      <Genres types={typeRoutes} searchType={searchType} show={activeContainer} />
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch =>
  // atento porque mapDispatchToProps debe devolver un objeto
  ({
    moviesTitleSearch: value => searchByMoviesTitle(dispatch, value),
    tvTitleSearch: value => searchByTvTitle(dispatch, value),
    popularMovies: typePopular => searchPopularMovies(dispatch),
    popularTv: () => searchPopularTv(dispatch)
  });

const connected = connect(null, mapDispatchToProps)(Search);

export default connected;
