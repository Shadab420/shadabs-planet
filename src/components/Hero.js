import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid

const query = graphql`
{
  file(relativePath: {eq: "hero-img.png"}) {
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
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>I'm Shadab</h1>
            <h4>Web Developer</h4>
            <a href='#' className="btn">
              Download Resume
            </a>
            <br/>
            <Link to='/contact' className="btn">
              Contact Me
            </Link>
            
          </div>
        </article>
        <Image fluid={fluid} className="hero-img"/>
      </div>
    </header>
  )
}

export default Hero
