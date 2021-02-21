import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import LogoutButton from './logoutButton'

function Nav() {
  const {loggedIn} = useContext(AuthContext)
  
    return (
      <>
        <nav id="nav" className="navbar navbar-expand-md sticky-top navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Portfolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/Aboume">
                  Aboume
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/Projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/Blogs">
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/Social">
                  Social
                </a>
              </li>

              {loggedIn === true &&   <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/Admin">
                  Admin
                </a>
                <LogoutButton/>
              </li>}
            
            </ul>
          </div>
        </div>
      </nav>
      
      </>
    )
}

export default Nav
