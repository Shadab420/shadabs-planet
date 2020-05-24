import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import noImg from '../assets/no_image.jpg';
import { Link } from "gatsby"
import { FaShareSquare } from "react-icons/fa"
const Blog = ({id,title, description, img, mediumUrl, category}) => {
  return (
    <article className="blog" key={id}>
      {img && <Image fluid={img.childImageSharp.fluid} className="blog-img" />}
      {img===null && <img src={noImg} className="blog-img"/> }
      <div className="blog-card">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="blog-footer">
          <p>{category}</p>
          <a href={mediumUrl}><FaShareSquare className="project-icon"/></a>
        </div>
      </div>
    </article>
  )
}

Blog.propTypes = {}

export default Blog
