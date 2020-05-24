import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "skills",
    url: "/skills/",
  },
  {
    id: 3,
    text: "projects",
    url: "/projects/",
  },
  {
    id: 4,
    text: "blog",
    url: "/blog/",
  },
  
  {
    id: 5,
    text: "contact",
    url: "/contact/",
  },
  {
    id: 6,
    text: "resume",
    url: "https://drive.google.com/open?id=1lEKc9jRFYj3QrZIMBYcsb5-DuEce7cpH",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      {link.text !== "resume" && <Link to={link.url}>{link.text}</Link>}
      {link.text === "resume" && <a href={link.url}>{link.text}</a>}
      
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
