import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link, useStaticQuery } from "gatsby"


const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        id
        title
        category
        description
        img {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mediumUrl
      }
    }
  }
`

export const Blogs = () => {
  const data = useStaticQuery(query)
  const { allStrapiBlogs:{nodes:blogs}} = data;
  
  return (
    <section className="section">
      <Title title="Blogs"/>
      <div className="section-center blogs-center">
      {
        blogs.map((blog)=>{
          return <Blog key={blog.id} {...blog}/>
        })
      }
      </div>
    </section>
    
  )
}
export default Blogs
