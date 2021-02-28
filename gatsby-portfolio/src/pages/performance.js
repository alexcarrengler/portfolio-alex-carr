import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

import SEO from "../components/seo";

import "../main.scss";
import pageStyles from "./index.module.scss";
import projectsStyles from "./projects.module.scss";

const Performance = ({ data }) => {
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
		<div className={projectsStyles.page} style={{ backgroundColor: `rgb(176, 178, 206)` }}>
			<SEO id="top" title="Performance" />
			<section>
				<h1 className={`${pageStyles.title} ${projectsStyles.pageTitle}`}>Performance</h1>
				<div className={`${projectsStyles.projectsContainer}`}>
          {posts}
          {posts.length % 2 === 0 ? <></> : <div className={`${projectsStyles.projectWrapper}`}></div>}
        </div>
			</section>
		</div>
	);
};

export const performancePosts = graphql`
	query performanceQuery {
		allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(performance)/" } }) {
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

export default Performance;