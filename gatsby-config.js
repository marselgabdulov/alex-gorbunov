module.exports = {
  pathPrefix: "/alex-gorbunov",
  siteMetadata: {
    siteUrl: `https://marselgabdulov.github.io/alex-gorbunov`,
    title: `Алексей Горбунов. Ведущий праздничных мероприятий абсолютно любого формата`,
    description: `Ведущий. Москва. Свадьба. Корпоратив. Детский праздник. Торжества.`,
    author: `@marselgabdulov`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-react-redux`,
      options: {
        // [required] - path to your createStore module
        pathToCreateStoreModule: "./src/state/createStore",
        // [optional] - options passed to `serialize-javascript`
        // info: https://github.com/yahoo/serialize-javascript#options
        // will be merged with these defaults:
        serialize: {
          space: 0,
          isJSON: true,
          unsafe: false,
        },
      },
    },
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://marselgabdulov.github.io/alex-gorbunov",
        sitemap: "https://marselgabdulov.github.io/alex-gorbunov/sitemap.xml",
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `alexey-gorbunov-website`,
        short_name: `alex-gorbunov`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/android-chrome-512x512.png`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Oswald`,
            subsets: [`cyrillic`],
            variants: [`300`, `400`, `500`, `600`, `700`],
          },
          {
            family: `Source Sans Pro`,
            subsets: [`cyrillic`],
            variants: [`300`, `400`, `500`, `700`, `800`, `900`],
          },
          {
            family: `Roboto`,
            subsets: [`cyrillic`],
            variants: [`300`, `400`, `500`, `700`, `800`, `900`],
          },
          {
            family: `Ubuntu`,
            subsets: [`cyrillic`],
            variants: [`300`, `400`, `500`, `700`, `800`, `900`],
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
