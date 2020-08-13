import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/agency.min.css';


function Navbar(){

  return ( 
  <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <Link className="navbar-brand text-white" to="/"><i className="fab fa-hubspot"></i> <b>Event's Hub </b></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span >
              <i className="fas fa-bars" style={{ color: '#fff' }}></i>
            </span>
          </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
          <li className="nav-item active">
            <Link className="nav-link text-white  ml-4" to="/">
            <b>Accueil</b>
             
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white  ml-4"
              to="/rooms"
            >
                <b>Packages</b>
            </Link>
          </li>
         
          <li className="nav-item">
            <Link
              className="nav-link text-white  ml-4"
              to="/danse"
            >
                <b>Danse G.</b>
            </Link>
          </li>
      

          <li className="nav-item">
            <Link
              className="nav-link text-white  ml-4"
              to="/gallerie"
            >
              <b>Gallerie</b>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white  ml-4"
              to="/plus"
            >
            <b>Plus</b>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white  ml-4"
              to="/contacts"
            >
         <b>A Propos</b>
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Rechercher"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-dark  my-2 my-sm-0"
            type="submit"
          >
            Rechercher
          </button>
        </form>
      </div>
    </nav>
  );
  
}

export default Navbar;
