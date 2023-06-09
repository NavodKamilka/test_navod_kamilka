import React from 'react'
import Logo from '../Assets/logo.png';

export default function TopNavBar() {

  return (
    <div className='container'>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">

        <div class="container-fluid">

            <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <i class="fas fa-bars"></i>
            </button>


            <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <a class="navbar-brand mt-2 mt-lg-0 " href="#">
                <img
                src={Logo}
                height="50"
                alt="MDB Logo"
                loading="lazy"
                />
            </a>

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link" href="/"><b>Home</b></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/about"><b>About</b></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/services"><b>Services</b></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/testiMonials"><b>TestiMonials</b></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/portfolio"><b>Portfolio</b></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/contacts"><b>Contacts</b></a>
                </li>
            </ul>

            </div>

            <div class="d-flex align-items-center">
            <div className="dropdown">
                    <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    >
                    Language
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">
                        English
                    </a>
                    <a className="dropdown-item" href="#">
                        French
                    </a>
                    <a className="dropdown-item" href="#">
                        German
                    </a>
                    <a className="dropdown-item" href="#">
                        Italian
                    </a>
                    </div>
                </div>
            

            </div>

        </div>

        </nav>
    </div>
  )
}
