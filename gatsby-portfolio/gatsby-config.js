module.exports = {
  siteMetadata: {
    title: `Alex Carr`,
    description: `Alex Carr's professional and artistic portfolio`,
    author: `@sandymilesg`,
  },
  plugins: [
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
        icon: `src/images/favicons/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
