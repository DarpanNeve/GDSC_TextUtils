import React from 'react'
import PropTypes from 'prop-types'
import './Navbar.css'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">{props.about}</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div className="Bhai mx-5" id="bhai">
          <div className="color1" onClick={()=>{props.setC('#73e873')}}>&nbsp;  &#160;</div>
          <div className="color2"  onClick={()=>{props.setC('#d26506')}}>&nbsp; &#160;</div>
          <div className="color3"  onClick={()=>{props.setC('#ff6cae')}}>&nbsp;  &#160;</div>
          <div className="color4"  onClick={()=>{props.setC('#ffb48e')}}>&nbsp;  &#160;</div>
          <div className="color5"  onClick={()=>{props.setC('#ffff90')}}>&nbsp;  &#160;</div>
          <div >
       
          </div>
        </div>
        <div className="form-check form-switch mx-5">
  <input className={`form-check-input `} onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode=='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
</div>
      </div>
    </div>
  </nav>
  )
}

Navbar.prototype={
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}

Navbar.defaultProps={
    title: 'Set title here',
    about: 'About '
};