import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (<>
    <nav className="navbar p-3 fixed-top navbar-expand-lg">
  <div className="container">
    <a className="navbar-brand fs-3 fw-bolder" href="#">START REACT</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item me-4">
          <Link className="nav-link fw-bolder fs-6" to="/">Home</Link>
        </li>
        <li className="nav-item mx-4">
          <Link className="nav-link fw-bolder fs-6" to="portfolio">PORTFOLIO</Link>
        </li>
        <li className="nav-item mx-4">
          <Link className="nav-link fw-bolder fs-6 " to="about">ABOUT</Link>
        </li>
        <li className="nav-item ms-4">
          <Link className="nav-link fw-bolder fs-6" to="contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
    )
  }
}
