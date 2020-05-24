import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare, FaAngleDoubleRight } from "react-icons/fa"
const Project = ({description, title, repo, url, img, stack, index }) => {
  return (
    <article className="project">
      <Image fluid={img.childImageSharp.fluid} className="project-img" />
      
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <h3>{title}</h3>
        {
          description.map((item,id)=>{
            return (
              <div key={id} className="job-desc">
                  <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                  <p>{item.desc}</p>
              </div>
            )
          })
          
        }
        <div className="project-stack">
          {
            stack.map(item => {
              return <span key={item.id}>{item.title}</span>
            })
          }
        </div>
        <div className="project-links">
          <a href={url}>
            <FaShareSquare className="project-icon"/>
          </a>
          <a href={repo}>
            <FaGithubSquare className="project-icon"/>
          </a>
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {}

export default Project
