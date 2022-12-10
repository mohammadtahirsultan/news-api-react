import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";


const NavBar =()=>   {
  const location = useLocation()
  useEffect(() => {
  }, [location])

    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg mb-4 navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            King Kong
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <Link className={`nav-link ${location.pathname==='/' ? "active": ""}`} to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==='/business' ? "active": ""}`}to="/business">
                  Business{" "}
                </Link>{" "}
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==='/entertainment' ? "active": ""}`} to="/entertainment">
                  Entertainment
                </Link>{" "}
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==='/health' ? "active": ""}`} to="/health">
                  Health
                </Link>{" "}
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==='/sports' ? "active": ""}`} to="/sports">
                  Sports
                </Link>{" "}
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==='/politics' ? "active": ""}`} to="/politics">
                  Politics
                </Link>{" "}
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==='/science' ? "active": ""}`} to="/science">
                  Science
                </Link>{" "}
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==='/technology' ? "active": ""}`} to="/technology">
                  Technology
                </Link>{" "}
              </li>     
            </ul>
          </div>
        </nav>
      </div>
    );
  }


export default NavBar;
