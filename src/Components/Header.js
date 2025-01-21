import React from "react";
import logo from "../Assets/siysaal.png";


function Header() {
  
  return (
    <header id="header" class="header d-flex align-items-center sticky-top">
    <div class="container-fluid container-xl position-relative d-flex align-items-center">

      <a href="index.html" class="logo d-flex align-items-center me-auto">
       
        <img src="assets/img/siysaal.png" alt=""/>
        {/* <h1 class="sitename">Vesperr</h1> */}
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><a href="#hero" class="active">Accueil<br/></a></li>
          <li><a href="#about">À propos</a></li>
          <li><a href="#services">Services</a></li>
          {/* <li><a href="#portfolio">Portfolio</a></li> */}
          {/* <li><a href="#team">Équipe</a></li> */}
          <li><a href="#contact">Contact</a></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      {/* <a class="btn-getstarted" href="index.html#about">Get Started</a> */}

    </div>
  </header>
  );
}

export default Header;
