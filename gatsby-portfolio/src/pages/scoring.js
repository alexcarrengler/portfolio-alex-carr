import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

import "../main.scss"
import pageStyles from "./index.module.scss"
import projectsStyles from "./projects.module.scss"

import TestImage from "../images/thumbnails/scoring/000_scoring-th.png";


const projects = [
  {
    link: ``,
    thumbnail: ``,
    image: ``,
    thumbnailTitle: `project1`,
    title: ``,
    credits: `Will Kahn, Alex Carr`,
    projectDescription: ``,
    personalDescription: ``
  }
]


const Scoring = () => (
  <div className={projectsStyles.page} style={{backgroundColor: `rgb(172, 196, 196)`}}>
    <SEO id="top" title="Scoring" />
    <section>
      <h1 className={`${pageStyles.title} ${projectsStyles.pageTitle}`}>Scoring</h1>
      <div className={`${projectsStyles.projectsContainer}`}>
          <div className={`${projectsStyles.projectWrapper}`}>
            <Link to='/' className={`${projectsStyles.projectLink}`}>
            <img className={projectsStyles.thumbnail}  src={TestImage}/>
            <p  className={projectsStyles.projectTitle}>The Grove</p> 
            </Link>
          </div>
          <div className={`${projectsStyles.projectWrapper}`}>
            <Link to='/performance' className={`${projectsStyles.projectLink}`}>
            <img className={projectsStyles.thumbnail}  src={TestImage}/>
            <p  className={projectsStyles.projectTitle}>The Grove</p> 
            </Link>
          </div>
          <div className={`${projectsStyles.projectWrapper}`}>
            <Link to='/' className={`${projectsStyles.projectLink}`}>
            <img className={projectsStyles.thumbnail}  src={TestImage}/>
            <p  className={projectsStyles.projectTitle}>The Grove</p> 
            </Link>
          </div>
          <div className={`${projectsStyles.projectWrapper}`}>
            <Link to='/performance' className={`${projectsStyles.projectLink}`}>
            <img className={projectsStyles.thumbnail}  src={TestImage}/>
            <p  className={projectsStyles.projectTitle}>The Grove</p> 
            </Link>
          </div>
          <div className={`${projectsStyles.projectWrapper}`}>
            <Link to='/' className={`${projectsStyles.projectLink}`}>
            <img className={projectsStyles.thumbnail}  src={TestImage}/>
            <p  className={projectsStyles.projectTitle}>The Grove</p> 
            </Link>
          </div>
          <div className={`${projectsStyles.projectWrapper}`}>
            <Link to='/performance' className={`${projectsStyles.projectLink}`}>
            <img className={projectsStyles.thumbnail}  src={TestImage}/>
            <p  className={projectsStyles.projectTitle}>The Grove</p> 
            </Link>
          </div>
      </div>
    </section>
  </div>
)

export default Scoring
