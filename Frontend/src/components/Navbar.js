import React from 'react'
import {Link ,Outlet} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Navbar() {
  return (
    <>
          <div className="container">
                <div className="row">
                    <div className="col">
                    <nav className="navbar-expand-lg bg-black bg-gradient py-3" id="navbar">
                        <div className="container-fluid d-flex align-items-center">
                            <img src="https://www.ajwebtechnologies.com/assets/img/black-logo.png" alt='logo' style={{width:"110px", marginRight:"15px"}}></img>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto d-flex align-items-center">
                                <li className="nav-item me-3">
                                <Link className="nav-link text-white" to='/'>Home</Link>
                                </li>
                                <li className="nav-item me-3">
                                <Link className="nav-link text-white" to="/expenses">My Expense</Link>
                                </li>
                                <li className="nav-item me-3">
                                <Link className="nav-link text-white" to="/expenses/add">Add Expense</Link>
                                </li>
                                <li className="nav-item me-3">
                                <HashLink to="/#footer" className="nav-link text-white">About me</HashLink>
                                </li>
                            </ul>
                            
                            </div>
                        </div>
                        </nav>
                    </div>
                </div>
                <div className="row">
                    <div className="col m-3">
                        <Outlet />
                    </div>
                </div>
            </div>
    </>
  )
}

export default Navbar


//  data-bs-spy="scroll" data-bs-target="#navbar" data-bs-smooth-scroll="true"