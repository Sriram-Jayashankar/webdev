import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const [modetogglebtn,setmodetogglebtn]= useState(`convert to ${props.mode==="light"?"dark":"light"}`);

  const togglenavbartype=()=>
  {
    props.togglemode();
    setmodetogglebtn(`convert to ${props.mode}`)
  }
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/first">{props.navbar1}</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/second">{props.navbar2}</a>
        </li>

      </ul>
      <button type="button" className="btn btn-primary mx-3" onClick={togglenavbartype}>{modetogglebtn}</button>

      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</>
  )
}

Navbar.propTypes = {
    title :PropTypes.string.isRequired,
    navbar1:PropTypes.string.isRequired,
    navbar2: PropTypes.string.isRequired
}

Navbar.defaultProps ={
    title :"PropTypes.string",
    navbar1:"PropTypes.string",
    navbar2:" PropTypes.string"
}
