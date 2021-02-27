import React from "react";
import {graphql} from 'gatsby';

export default function PostTemplate({ data }) {
	return (
		<div>
			<h1>Post Template</h1>
            <p>{data.markdownRemark.internal.content}</p>
		</div>
	);
}

export const query = graphql`
	query($id: String!) {
		markdownRemark(id: { eq: $id }) {
			frontmatter {
				title
			}
			internal {
				content
			}
		}
	}
`;
