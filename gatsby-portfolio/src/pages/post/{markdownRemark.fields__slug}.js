import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image"

export default function PostTemplate({ data }) {
	const imgFiles = data.allFile.edges.filter((edge) => edge.node.extension !== "md");
	console.log("imgfiles", imgFiles);
	const post = data.markdownRemark;
	return (
		<div>
			<h1>{post.frontmatter.title}</h1>
			{imgFiles.map(file => (
				<Img fluid={file.node.childImageSharp.fluid} style={{width:`50%`}}/>
			))}
			<p>{post.internal.content}</p>
		</div>
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
						fluid(quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`;
