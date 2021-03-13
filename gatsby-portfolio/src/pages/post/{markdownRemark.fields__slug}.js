import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import EmbedWrapper from "../../components/iframeWrapper";

import postStyles from "./post.module.scss";
import projectsStyles from "../projects.module.scss";
import pageStyles from "../index.module.scss";

export default function PostTemplate({ data }) {
	const imgFiles = data.allFile.edges.filter((edge) => edge.node.extension !== "md");
	const post = data.markdownRemark;
	return (
		<section className={postStyles.page}>
			<h1 className={`${pageStyles.title} ${projectsStyles.pageTitle}`}>{post.frontmatter.title}</h1>
			<div className={`${postStyles.container}`}>
				{/* {imgFiles.map((file) => <Img key={file.node.id} fluid={file.node.childImageSharp.fluid} className={postStyles.mainImage} />)} */}
				<EmbedWrapper link={post.frontmatter.embeded_link} title={post.frontmatter.title} imgFiles={imgFiles}/>
				<p className={postStyles.link}>
					<a href={post.frontmatter.source_link} className={postStyles.a} target="_blank" rel="noopener noreferrer">
						Published Work
					</a>
				</p>
				{/* <p className={pageStyles.aboutText} style={{maxWidth: `1000px`}}>{post.internal.content}</p> */}
				<div
					className={postStyles.text}
					dangerouslySetInnerHTML={{ __html: post.html }}
				/>
			</div>
		</section>
	);
}

export const query = graphql`
	query($fields__slug: String!) {
		markdownRemark(fields: { slug: { eq: $fields__slug } }) {
			frontmatter {
				title
				source_link
				embeded_link
			}
			html
		}
		allFile(filter: { relativeDirectory: { eq: $fields__slug } }) {
			edges {
				node {
					id
					extension
					relativePath
					childImageSharp {
						fluid {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`;
