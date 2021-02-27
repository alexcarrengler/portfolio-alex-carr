import React from "react";
import {graphql} from 'gatsby';

export default function PostTemplate({ data }) {
	const post = data.markdownRemark;
	return (
		<div>
			<h1>{post.frontmatter.title}</h1>
            <p>{post.internal.content}</p>
		</div>
	);
}

export const query = graphql`
	query($fields__slug: String!) {
		markdownRemark(fields: {slug: {eq: $fields__slug}}) {
			frontmatter {
				title
			}
			internal {
				content
			}
		}
	}
`;
