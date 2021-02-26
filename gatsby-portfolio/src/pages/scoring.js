import React from "react";
import { Link, graphql } from "gatsby";

import SEO from "../components/seo";

import "../main.scss";
import pageStyles from "./index.module.scss";
import projectsStyles from "./projects.module.scss";

import TestImage from "../images/thumbnails/scoring/000_scoring-th.png";

const projects = [];

const Scoring = ({data}) => {
	const projects = data.allMarkdownRemark.edges
	console.log(projects);

	const posts = projects.map((p) => (
		<div className={`${projectsStyles.projectWrapper}`}>
			<Link to={`/`} className={`${projectsStyles.projectLink}`}>
				<img className={projectsStyles.thumbnail} src={TestImage} />
				<p className={projectsStyles.projectTitle}>{p.node.frontmatter.title}</p>
			</Link>
		</div>
	));

	return (
		<div className={projectsStyles.page} style={{ backgroundColor: `rgb(172, 196, 196)` }}>
			<SEO id="top" title="Scoring" />
			<section>
				<h1 className={`${pageStyles.title} ${projectsStyles.pageTitle}`}>Scoring</h1>
				<div className={`${projectsStyles.projectsContainer}`}>
					{posts}
				</div>
			</section>
		</div>
	);
};

export const cmsPosts = graphql`
	query MyQuery {
		allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(scoring)/" } }) {
			edges {
				node {
					frontmatter {
						title
						description
					}
				}
			}
		}
	}
`;

export default Scoring;
