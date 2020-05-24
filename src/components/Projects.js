import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allStrapiProjects {
      nodes {
        id
        title
        description {
          id
          desc
        }
        img {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
        repo
        url
      }
    }
  }
`
const Projects = () => {
  const data = useStaticQuery(query);
  const {allStrapiProjects:{nodes:projects}} = data;
  
  return (
    <section className="section projects">
      <Title title="All Projects"/>
      <div className="section-center projects-center">
        {
          projects.map((project,index)=>{
            return <Project key={project.id} index={index} {...project}/>
          })
        }

      </div>
      
    </section>
  )
}

export default Projects
