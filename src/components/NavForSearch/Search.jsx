import React, {useEffect, useState} from "react";
import './Search.scss'
import * as ReactBootstrap from "react-bootstrap";
import Container from "../Container/Container";
import Genres from "../Genres/Genres";
import {
  searchByMoviesTitle,
  searchByTvTitle,
  searchPopularMovies,
  searchPopularTv
} from "../../services/redux/action";
import {connect} from "react-redux";

const types = {
  TITTLE: 'Título',
  GENRES: 'Género',
  POPULAR: 'Las 10 populares',

}
const SEARCH_BY_TITLE = 'SEARCH_BY_TITLE';
const SEARCH_BY_GENRE = 'SEARCH_BY_GENRE';
const SEARCH_BY_POPULAR = 'SEARCH_BY_POPULAR';
const INITIAL_STATE_SEARCH = '';

const Search = (props) => {

  const [searchType, setSearchType] = useState(INITIAL_STATE_SEARCH);
  const typeRoutes = props.match.params.typeRoute;


  // TODO hacer que cuando cambie de ruta se pongan todos lo radio button uncheck sin que me error de unmont en genres

// useEffect(()=> {
//   setSearchType(INITIAL_STATE_SEARCH)
// },[typeRoutes]);


  const onClickForSearch = (type) => {
    setSearchType(type);

    if (type === SEARCH_BY_POPULAR) {
      if(typeRoutes==='movies'){
        props.popularMovies();
      }else if (typeRoutes==='series'){
        props.popularTv();
      }
    }

  }


  const handleChange = (event) => {
    if (event.keyCode === 13 && typeRoutes==='movies') {
      props.moviesTitleSearch(event.target.value, typeRoutes);
      event.target.value = '';

    }else if (event.keyCode === 13 && typeRoutes==='series') {
      props.tvTitleSearch(event.target.value, typeRoutes);
      event.target.value = '';

    }
  }


  return (
    <React.Fragment>
      <article className='navbar-items'>
        <ReactBootstrap.Navbar className="navbar-movies" expand="md">
          <ReactBootstrap.Navbar.Brand id='text-navbar'> {typeRoutes.toUpperCase()}</ReactBootstrap.Navbar.Brand>
          <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
            <ReactBootstrap.Nav className="mr-auto">


              <ReactBootstrap.InputGroup>

                <ReactBootstrap.Form.Row className="align-items-center">
                  <ReactBootstrap.Col xs="auto">
                    <ReactBootstrap.InputGroup>
                      <ReactBootstrap.FormControl
                        readOnly={searchType !== SEARCH_BY_TITLE} onKeyUp={handleChange}/>
                    </ReactBootstrap.InputGroup>


                  </ReactBootstrap.Col>
                  <ReactBootstrap.Col xs="auto">
                    <ReactBootstrap.FormCheck name="filter" className='check-items' label={types.TITTLE} type='radio'
                                              id={types.TITTLE} onChange={(e) => onClickForSearch(SEARCH_BY_TITLE)}
                                              checked={searchType === SEARCH_BY_TITLE}/>
                  </ReactBootstrap.Col>
                  <ReactBootstrap.Col xs="auto">
                    <ReactBootstrap.FormCheck name="filter" className='check-items' label={types.GENRES} type='radio'
                                              id={types.GENRES} onChange={(e) => onClickForSearch(SEARCH_BY_GENRE)}
                                              checked={searchType === SEARCH_BY_GENRE}/>
                  </ReactBootstrap.Col><ReactBootstrap.Col xs="auto">
                  <ReactBootstrap.FormCheck name="filter" className='check-items' label={types.POPULAR} type='radio'
                                            id={types.POPULAR} onChange={(e) => onClickForSearch(SEARCH_BY_POPULAR)}
                                            checked={searchType === SEARCH_BY_POPULAR}/>

                </ReactBootstrap.Col>

                </ReactBootstrap.Form.Row>
              </ReactBootstrap.InputGroup>

            </ReactBootstrap.Nav>

          </ReactBootstrap.Navbar.Collapse>
        </ReactBootstrap.Navbar>
      </article>

      {searchType === SEARCH_BY_GENRE && <Genres types={typeRoutes}/>}

      <Container types={typeRoutes} searchType={searchType}/>
    </React.Fragment>

  )


};



const mapDispatchToProps = (dispatch) =>
  // atento porque mapDispatchToProps debe devolver un objeto
  ({
    moviesTitleSearch: (value) => searchByMoviesTitle(dispatch, value),
    tvTitleSearch: (value) => searchByTvTitle(dispatch, value),
    popularMovies: (typePopular) => searchPopularMovies(dispatch),
    popularTv: () => searchPopularTv(dispatch),


  });

const connected = connect(null, mapDispatchToProps)(Search);

export default connected;
