import React, {useState} from "react";
import './Search.scss'
import * as ReactBootstrap from "react-bootstrap";
import Container from "../Container/Container";
import Genres from "../Genres/Genres";

const types = {
  TITTLE: 'Título',
  GENRES: 'Género',
  POPULAR: 'Las 10 populares',

}

const Search = (props) => {

  const [typeTittle, setTypeTittle] = useState(false);
  const [typeGenre, setTypeGenre] = useState(false);
  const [typePopular, setTypePopular] = useState(false);
  const typeRoutes = props.match.params.typeRoute;


  const onClickForSearch = (event) => {
    let typeForSearch = event.target.id;


    switch (typeForSearch) {

      case types.TITTLE:
        setTypeTittle(true);
        setTypeGenre(false);
        setTypePopular(false);
        break;
      case types.GENRES:
        setTypeTittle(false);
        setTypeGenre(true);
        setTypePopular(false);

        break;
      case types.POPULAR:
        setTypeTittle(false);
        setTypeGenre(false);
        setTypePopular(true);
        break;

      default:
        setTypeTittle(false);
        setTypeGenre(false);
        setTypePopular(false);

    }

  }


  const handleChange = (event) => {
    if (event.keyCode === 13) {

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
                        readOnly={!typeTittle} onKeyUp={handleChange}/>
                    </ReactBootstrap.InputGroup>


                  </ReactBootstrap.Col>
                  <ReactBootstrap.Col xs="auto">
                    <ReactBootstrap.FormCheck className='check-items' label={types.TITTLE} type='radio'
                                              id={types.TITTLE} onChange={(e) => onClickForSearch(e)}
                                              checked={typeTittle}/>
                  </ReactBootstrap.Col>
                  <ReactBootstrap.Col xs="auto">
                    <ReactBootstrap.FormCheck className='check-items' label={types.GENRES} type='radio'
                                              id={types.GENRES} onChange={(e) => onClickForSearch(e)}
                                              checked={typeGenre}/>
                  </ReactBootstrap.Col><ReactBootstrap.Col xs="auto">
                  <ReactBootstrap.FormCheck className='check-items' label={types.POPULAR} type='radio'
                                            id={types.POPULAR} onChange={(e) => onClickForSearch(e)}
                                            checked={typePopular}/>

                </ReactBootstrap.Col>

                </ReactBootstrap.Form.Row>
              </ReactBootstrap.InputGroup>

            </ReactBootstrap.Nav>

          </ReactBootstrap.Navbar.Collapse>
        </ReactBootstrap.Navbar>
      </article>
      {typeGenre === true && <Genres types={typeRoutes}/>}

      {/*<Container/>*/}
    </React.Fragment>

  )


}

export default Search;
