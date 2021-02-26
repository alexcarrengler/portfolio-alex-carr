const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;

	if (node.internal.type === `MarkdownRemark`) {
        
		const fullPath = createFilePath({ node, getNode, trailingSlash: false });
		const path_array = fullPath.split("/");
        const slug = path_array[path_array.length - 1];
        
		createNodeField({
			name: 'slug',
			node,
			value: slug
		});
	}
};
