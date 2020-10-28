import React, {useState} from "react";
import './NavBar.scss'
import logotype from '../../img/logo/moviesforworld.png'
import * as ReactBootstrap from "react-bootstrap";
import Search from "../navForSearch/Search";

let searchActive;

const NavBar = () => {

  const [typeSearch, setTypeSearch] = useState();

  const onClickSelect = (type) => {
    setTypeSearch(type);
    searchActive = true;
  }

  return (
    <React.Fragment>
      <header className='principal-nav'>
        <img src={logotype} alt="Logotipo"/>

      </header>
      <article className='tab-items'>
        <ReactBootstrap.ButtonGroup className="button-items" size='sm'>
          <ReactBootstrap.Button className="button-items"
                                 onClick={() => onClickSelect('Movies')}>Películas</ReactBootstrap.Button>
          <ReactBootstrap.Button className="button-items"
                                 onClick={() => onClickSelect('Series')}>Series</ReactBootstrap.Button>
        </ReactBootstrap.ButtonGroup>
      </article>
      {searchActive === true && <Search typeSearch={typeSearch}/>}

    </React.Fragment>

  )


}

export default NavBar;
