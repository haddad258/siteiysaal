import React from "react";
//import "../Styles/Footer.css";
// import { Link } from "react-router-dom";
// import logo from "../Assets/siysaal.png";

function Footer() {
  return (
    <>
      <footer id="footer" class="footer">
        <div class="container">
          <div class="copyright text-center ">
            <p>
              © 2025 <span> Iysaal </span>{" "}
              {/* <strong class="px-1 sitename">Vesperr</strong>{" "}
              <span>All Rights Reserved</span> */}
            </p>
          </div>
          <div class="social-links d-flex justify-content-center">
            {/* <a href="">
              <i class="bi bi-twitter-x"></i>
            </a> */}
            <a href="">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="">
              <i class="bi bi-linkedin"></i>
            </a>
          </div>
          {/* <div class="credits">
            '' Designed by{" "}
            <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div> */}
        </div>
      </footer>
     
    </>
  );
}

export default Footer;
