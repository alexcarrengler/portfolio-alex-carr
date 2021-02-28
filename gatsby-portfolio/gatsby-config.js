module.exports = {
	siteMetadata: {
		title: `Alex Carr`,
		description: `Alex Carr's professional and artistic portfolio`,
		author: `@sandymilesg`
	},
	plugins: [
		`gatsby-plugin-smoothscroll`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `scoring`,
				path: `${__dirname}/content/scoring`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `scoring`,
				path: `${__dirname}/content/production`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `scoring`,
				path: `${__dirname}/content/performance`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				// CommonMark mode (default: true)
				commonmark: true,
				// Footnotes mode (default: true)
				footnotes: true,
				// Pedantic mode (default: true)
				pedantic: true,
				// GitHub Flavored Markdown mode (default: true)
				gfm: true,
				// Plugins configs
				plugins: []
			}
		},
		`gatsby-plugin-netlify-cms`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Alex Carr Portfolio`,
				short_name: `Portfolio`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#000000`,
				display: `minimal-ui`,
				icon: `src/images/favicons/favicon-32x32.png` // This path is relative to the root of the site.
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
