import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

import SEO from "../components/seo";

import "../main.scss";
import pageStyles from "./index.module.scss";
import projectsStyles from "./projects.module.scss";

const Scoring = ({ data }) => {
	const projects = data.allMarkdownRemark.edges;
	console.log(projects);
	const posts = projects.map((p) => (
		<div key={p.node.frontmatter.title} className={`${projectsStyles.projectWrapper}`}>
			<Link to={`/post/${p.node.fields.slug}`} className={`${projectsStyles.projectLink}`}>
				<Img fluid={p.node.frontmatter.post_image.childImageSharp.fluid} className={projectsStyles.thumbnail} />
				<p className={projectsStyles.projectTitle}>{p.node.frontmatter.title}</p>
			</Link>
		</div>
	));

	return (
		<div className={projectsStyles.page} style={{ backgroundColor: `rgb(172, 196, 196)` }}>
			<SEO id="top" title="Scoring" />
			<section>
				<h1 className={`${pageStyles.title} ${projectsStyles.pageTitle}`}>Scoring</h1>
				<div className={`${projectsStyles.projectsContainer}`}>{posts}</div>
			</section>
		</div>
	);
};

export const scoringPosts = graphql`
	query scoringQuery {
		allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(scoring)/" } }) {
			edges {
				node {
					frontmatter {
						title
						description
						post_image {
							childImageSharp {
								fluid(quality: 100) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
					fields {
						slug
					}
				}
			}
		}
	}
`;

export default Scoring;
