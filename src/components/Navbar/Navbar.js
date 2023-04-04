import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import "../../App.css";
 
const Navbar=()=> {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary mb-4">
  <div class="container">
  <Link to="/" className="fs-3 ubuntu navbar-brand">
    Rick & Morty <span className="text-primary"> WiKI </span>
   </Link>
    <button 
      className="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false" 
      aria-label="Toggle navigation"
      >
      <style jsx>
        {`
        button [aria-expanded="false"]>.close{
            display: none;
        }
        button [aria-expanded="true"]>.open{
            display: none;
           
        `}
      </style>
      <i class="fas fa-solid fa-bars  open fw-bold text-dark"></i>
      <i class="fas  fa-solid fa-times close fw-bold text-dark"></i>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <div class="navbar-nav fs-5">
          <NavLink activeClassName="active" to="/" className="nav-link ">
            Characters
          </NavLink>
          <NavLink to="/episodes" className="nav-link" >
          Episodes
          </NavLink>
          <NavLink to="/location" className="nav-link" >
          Location
          </NavLink>
      </div>
    </div>
  </div>
</nav>
  );
    
}

export default Navbar

