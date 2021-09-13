import React from 'react'
import { Link } from 'react-router-dom'


function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">LoGo</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span ></span>
        <span ></span>
        <span ></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center " id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
          <li class="nav-item">
          <a class="nav-link" href="#"><Link to="/about">About</Link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><Link to="/">Home</Link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><Link to="/form">Form</Link></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default NavBar


