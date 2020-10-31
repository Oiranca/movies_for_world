import React, {useEffect, useState} from "react";
import './Search.scss'
import * as ReactBootstrap from "react-bootstrap";
import Container from "../container/Container";

const types = {
  TITTLE: 'Título',
  GENRES: 'Género',
  POPULAR: 'Diez más populares',

}

//TODO da error cuando cambio de tipo de busqueda y escribo antes
let typeHolder = '';
const Search = (props) => {

  const [typeForSearch, setTypeForSearch] = useState('');
  const [typePopular, setTypePopular] = useState(true);
  const [showAlert, setShowAlert] = useState(false);




  const onClickFroSearch = (event) => {
    if (event.target.dataset.value === types.POPULAR) {
      setTypePopular(true);
      setTypeForSearch(event.target.dataset.value);

    } else {
      setTypeForSearch(`Buscar por ${event.target.dataset.value}`);
      setTypePopular(false);

    }

  }
  const handleChange = (event) => {

    setShowAlert(false);
    if (event.keyCode === 13) {
      if (event.target.value.length >= 5) {
        event.target.value = '';
        //setTypePopular(true);
      } else {
        setShowAlert(true);
      }

    }
  }

  return (
    <React.Fragment>
      <article className='navbar-items'>
        <ReactBootstrap.Navbar className="navbar-movies" expand="md">
          <ReactBootstrap.Navbar.Brand id='text-navbar'> {props.typeSearch}</ReactBootstrap.Navbar.Brand>
          <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
            <ReactBootstrap.Nav className="mr-auto">
              <ReactBootstrap.InputGroup>
                <ReactBootstrap.FormControl
                  readOnly={typePopular} onKeyUp={handleChange}/>
                <ReactBootstrap.DropdownButton
                  as={ReactBootstrap.InputGroup.Append}
                  variant="outline-secondary"
                  title={typeForSearch===''?'Selecciona una opción':typeForSearch}
                  id="input-group-dropdown-2"
                >
                  <ReactBootstrap.Dropdown.Item onClick={(event) => onClickFroSearch(event)}
                                                data-value={types.TITTLE}> {types.TITTLE} </ReactBootstrap.Dropdown.Item>
                  <ReactBootstrap.Dropdown.Divider/>
                  <ReactBootstrap.Dropdown.Item onClick={(event) => onClickFroSearch(event)}
                                                data-value={types.GENRES}> {types.GENRES} </ReactBootstrap.Dropdown.Item>
                  <ReactBootstrap.Dropdown.Divider/>
                  <ReactBootstrap.Dropdown.Item onClick={(event) => onClickFroSearch(event)}
                                                data-value={types.POPULAR}> {types.POPULAR}</ReactBootstrap.Dropdown.Item>

                </ReactBootstrap.DropdownButton>
              </ReactBootstrap.InputGroup>
            </ReactBootstrap.Nav>

          </ReactBootstrap.Navbar.Collapse>
        </ReactBootstrap.Navbar>
      </article>
      <section className='alert'>
        <ReactBootstrap.Alert variant="danger" show={showAlert} className='danger'>
          Logitud mínima cinco letras
        </ReactBootstrap.Alert>
      </section>
      <Container/>
    </React.Fragment>

  )


}

export default Search;
