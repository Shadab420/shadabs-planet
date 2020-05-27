import React from "react"
import Title from "./Title"
import services from "../constants/services"
const Services = () => {
  return (
    <section className="section bg-grey">
      <Title title="Skills"/>
      <div className="section-center services-center">
        {
          services.map(service => {
            const { id, title, stacks } = service;

            return (
              <article key={id} className="service"> 
                <h3>{title}</h3>
                <div className="project-stack">
                  {
                    stacks.map((stack, index) => {
                      return <span key={index}>{stack}</span>
                    })
                  }
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
    
  )
}

export default Services
