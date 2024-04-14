import { Link } from "react-router-dom";
import ScrollToTopButton from "../components/ScrollToTopButton";
import React from "react";

const Layout = () => {
  return (
    <>
    <ScrollToTopButton/>
      <div className="container-fluid text-center header bg-white py-3" id="home">
        <Link to="/spice-global/">
          <h1 className="mb-0 bold">
            Spice Global Management
          </h1>
        </Link>
      </div>

      <nav className="navbar navbar-expand-lg sticky-top border-bottom">

        <button className="ms-3 navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link"   to="/locations">Locations</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link btn-main"   to="/join">Apply to join as an event manager partner</Link>
            </li>

          </ul>
        </div>
      </nav>

      
    </>
  )
};

export default Layout;
