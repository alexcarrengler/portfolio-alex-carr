import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import postStyles from "./post.module.scss";
import projectsStyles from "../projects.module.scss";
import pageStyles from "../index.module.scss";

export default function PostTemplate({ data }) {
	const imgFiles = data.allFile.edges.filter((edge) => edge.node.extension !== "md");
	const post = data.markdownRemark;
	return (
		<section>
			<h1 className={`${pageStyles.title} ${projectsStyles.pageTitle}`}>{post.frontmatter.title}</h1>
			<div className={`${postStyles.container}`}>
				{imgFiles.map((file) => <Img key={file.node.id} fluid={file.node.childImageSharp.fluid} className={postStyles.mainImage} />)}
				<p className={pageStyles.aboutText} style={{maxWidth: `1000px`}}>{post.internal.content}</p>
			</div>
		</section>
	);
}

export const query = graphql`
	query($fields__slug: String!) {
		markdownRemark(fields: { slug: { eq: $fields__slug } }) {
			frontmatter {
				title
			}
			internal {
				content
			}
		}
		allFile(filter: { relativeDirectory: { eq: $fields__slug } }) {
			edges {
				node {
					id
					extension
					relativePath
					childImageSharp {
						fluid{
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`;
