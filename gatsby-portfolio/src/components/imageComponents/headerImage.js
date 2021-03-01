import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import headerStyles from "../header.module.scss";

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "navbar-img.png" }) {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.image?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <Img fluid={data.image.childImageSharp.fluid} className={`${headerStyles.img}`}/>
}

export default Image