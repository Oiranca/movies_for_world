import React from 'react';
import './NavBar.scss';
import logotype from '../../img/logo/moviesforworld.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <React.Fragment>
      <header className="principal-nav">
        <img src={logotype} alt="Logotipo" />
      </header>
      <article className="tab-items">
        <nav className="nav-items">
          <Link to="/movies">
            <span className="link-items">Películas</span>
          </Link>
          <Link to="/series">
            <span className="link-items">Series</span>
          </Link>
        </nav>
      </article>
    </React.Fragment>
  );
};

export default NavBar;
