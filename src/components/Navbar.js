import React from "react"
import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"

//navbar background change on scroll.
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    // document.getElementById("navbar").style.background = "linear-gradient(#614385, #516395)";
    // document.getElementById("navbar").style.background = "linear-gradient(rgba(97,67,133)), rgba(81,99,149))";
    document.getElementById("navbar").style.background = "linear-gradient(rgb(97, 67, 133,0.9), rgb(81, 99, 149,0.8))";
    
  } else {
    document.getElementById("navbar").style.background = "transparent";
  }
}

const Navbar = () => {
  return (
    <nav className="navbar" id = "navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo"/>
          <button type="button" className="toggle-btn">
              <FaAlignRight/>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
