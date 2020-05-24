import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid

const query = graphql`
{
  file(relativePath: {eq: "shadab2.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const Hero = () => {
  const {
    file:{
      childImageSharp:{
        fluid
      }
    }
  } = useStaticQuery(query);
  
  return (
    <header className="hero">
      <div className="section-center hero-center">
      <Image fluid={fluid} className="hero-img"/>
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>I'm Shadab Anwar</h1>
            <h4>Web Developer</h4>
            <p>Career obj</p>
            <br/>
            <Link to='/contact' className="btn">
              Contact Me
            </Link>
            
          </div>
        </article>
        
      </div>
    </header>
  )
}

export default Hero
