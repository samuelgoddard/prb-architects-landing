module.exports = {
  siteMetadata: {
    title: `Player Roberts Bell`,
    description: `The built environment relies on change, and we exist to make progress. This means that we are realistic, and driven to build. If you’re looking to extend, adapt, refurbish, or to create something new, we can help you.`,
    author: `@samuelgoddard`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `player-roberts-bell`,
        short_name: `prb`,
        start_url: `/`,
        background_color: `#E34F2D`,
        theme_color: `#E34F2D`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
}
