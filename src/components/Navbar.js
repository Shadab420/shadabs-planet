import React from "react"
import logo from "../assets/logo1.png"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"


//navbar background change on scroll.
if (typeof window === 'undefined') {
  global.window = {}
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    // document.getElementById("navbar").style.background = "linear-gradient(#614385, #516395)";
    // document.getElementById("navbar").style.background = "linear-gradient(rgba(97,67,133)), rgba(81,99,149))";
    document.getElementById("navbar").style.background = "linear-gradient(rgb(0, 212, 219,0.9), rgb(224, 252, 255,0.8))";
    
  } else {
    document.getElementById("navbar").style.background = "transparent";
  }
}

const Navbar = ({toggleSidebar}) => {
  return (
    <nav className="navbar" id = "navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo"/>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
              <FaAlignRight/>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
