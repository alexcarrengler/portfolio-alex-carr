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
				{/* {imgFiles.map((file) => <Img key={file.node.id} fluid={file.node.childImageSharp.fluid} className={postStyles.mainImage} />)} */}
				<div className={`${pageStyles.iframeContainer}`} style={{margin: `0 auto`, marginBottom: `32px`}}>
						<iframe
							title={`${post.frontmatter.title}-mobile`}
							className={pageStyles.iframeResponsive}
							src={post.frontmatter.embeded_link}
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
					</div>
					<div className={`${pageStyles.iframeDesktop}`} style={{maxWidth: `840px`, margin: `0 auto`, marginBottom: `32px`}}>
						<iframe
							title={post.frontmatter.title}
							className={pageStyles.iframeFullSize}
							width="840"
							height="472"
							src={post.frontmatter.embeded_link}
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
					</div>
					<p className={postStyles.link}><a href={post.frontmatter.source_link} className={postStyles.a}>Link</a></p>
				{/* <p className={pageStyles.aboutText} style={{maxWidth: `1000px`}}>{post.internal.content}</p> */}
				<div className={pageStyles.aboutText} style={{maxWidth: `1000px`, paddingTop: `0`, paddingBottom: `0`}} dangerouslySetInnerHTML={{__html:post.html}}></div>
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
						fluid{
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`;
