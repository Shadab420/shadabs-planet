import React, { useState } from "react"
import Title from "./Title"
import { FaAngleDoubleRight, FaAlignRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby";

//graphql query for getting all jobs from strapi
const query = graphql`
  {
    allStrapiJobs(sort: {fields: strapiId, order: DESC}) {
      nodes {
        company
        date
        position
        desc {
          id
          Name
        }
        strapiId
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query);
  const {allStrapiJobs: {nodes:jobs}} = data;

  const [value, setValue] = useState(0);
  const { company, position, date, desc } = jobs[value];


  return (
    <section className="section jobs">
      <Title title="experience"/>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {
            jobs.map((item, index)=>{
              return (
                <button 
                  key={item.strapiId} 
                  className={`job-btn ${index === value && 'active-btn'}`}
                  onClick={()=>setValue(index)}>{item.company}</button>
              )
            })
          }

          
      </div>

      {/* job info */}
      <article className="job-info">
            <h3>{position}</h3>
            <h4>{company}</h4>
            <p className="job-date">{date}</p>
            {
              desc.map((item,id)=>{
                return (
                  <div key={id} className="job-desc">
                      <FaAlignRight className="job-icon"></FaAlignRight>
                      <p>{item.Name}</p>
                  </div>
                )
              })
            }
          </article>

        </div>

    </section>
  )
}

export default Jobs
