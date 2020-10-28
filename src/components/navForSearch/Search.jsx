import React from "react";
import './Search.scss'
import * as ReactBootstrap from "react-bootstrap";

const Search = (props) => {

  return (
    <article className='navbar-items'>
      <ReactBootstrap.Navbar className="navbar-movies" expand="md">
        <ReactBootstrap.Navbar.Brand id='text-navbar'> {props.typeSearch}</ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootstrap.Nav className="mr-auto">
            <ReactBootstrap.InputGroup>
              <ReactBootstrap.FormControl
                placeholder="Aquí aparecera por lo que quieres buscar"/>

              <ReactBootstrap.DropdownButton
                as={ReactBootstrap.InputGroup.Append}
                variant="outline-secondary"
                title="Selecciona"
                id="input-group-dropdown-2"
              >
                <ReactBootstrap.Dropdown.Item>Título</ReactBootstrap.Dropdown.Item>
                <ReactBootstrap.Dropdown.Divider/>
                <ReactBootstrap.Dropdown.Item>Género</ReactBootstrap.Dropdown.Item>
                <ReactBootstrap.Dropdown.Divider/>
                <ReactBootstrap.Dropdown.Item>Diez más populares</ReactBootstrap.Dropdown.Item>

              </ReactBootstrap.DropdownButton>
            </ReactBootstrap.InputGroup>
          </ReactBootstrap.Nav>

        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
    </article>


  )


}

export default Search;
