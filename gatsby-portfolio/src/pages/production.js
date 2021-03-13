import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

import SEO from "../components/seo";

import "../main.scss";
import pageStyles from "./index.module.scss";
import projectsStyles from "./projects.module.scss";


const Production = ({ data }) => {
	const projects = data.allMarkdownRemark.edges;
	const posts = projects.map((p) => (
		<div key={p.node.frontmatter.title} className={`${projectsStyles.projectWrapper}`}>
			<Link to={`/post/${p.node.fields.slug}`} className={`${projectsStyles.projectLink}`}>
				<Img fluid={p.node.frontmatter.post_image.childImageSharp.fluid} className={projectsStyles.thumbnail} />
				<p className={projectsStyles.projectTitle}>{p.node.frontmatter.title}</p>
			</Link>
		</div>
	));

	return (
		<div className={projectsStyles.page} style={{ backgroundColor: `rgb(145, 168, 182)` }}>
			<SEO id="top" title="Production" />
			<section>
				<h1 className={`${pageStyles.title} ${projectsStyles.pageTitle}`}>Production</h1>
				<div className={`${projectsStyles.projectsContainer}`}>
          {posts}
          {posts.length % 2 === 0 ? <></> : <div className={`${projectsStyles.projectWrapper}`}></div>}
        </div>
			</section>
		</div>
	);
};

export const productionPosts = graphql`
	query productionQuery {
		allMarkdownRemark(sort: {fields: frontmatter___updated_at}, filter: { fileAbsolutePath: { regex: "/(production)/" } }) {
			edges {
				node {
					frontmatter {
						title
						post_image {
							childImageSharp {
								fluid{
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

export default Production;