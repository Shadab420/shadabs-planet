import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <h5>Copyright&copy;{new Date().getFullYear()}</h5>
        <span>Kazi Shadab Anwar</span> All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
