import React from "react";
import './NavBar.css';
export default function NavBar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
        <a class="navbar-brand mt-2 mt-lg-0" href="/">
              <img
                src="/jusc.png"
                width= '200px'
                height= '50px'
                object-fit= 'cover'
                loading="lazy"
                alt="logo" 
              />
            </a>
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            

            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#mission">
                  Our Mission 
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#timeline">
                  Event Timeline
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#payment">
                  Book A Spot
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </>
  );
}
