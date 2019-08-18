/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Let's show more cute pictures`,
  },
  pathPrefix: "/gatsby-poc",
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DGHA Portal`,
        /*eslint-disable */
        short_name: `DGHA`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        /*eslint-enable */
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `static/images/dgha-logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`, // Must be listed after manifest plugin
  ],
};
