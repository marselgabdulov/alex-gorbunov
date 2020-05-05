module.exports = {
  pathPrefix: "/alex-gorbunov",
  siteMetadata: {
    title: `Алексей Горбунов. Ведущий. Шоумен. +7 985 644 64 89`,
    description: `Алексей Горбунов. Ведущий праздничных мероприятий любого формата. Веду свадьбы, корпоративы, дни рождения, детские и городские праздники и т.д. +7 985 644 64 89`,
    author: `marsel.gabdulov@gmail.com`,
    siteUrl: `https://alexeygorbunov.com`,
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://alexeygorbunov.com",
        sitemap: "https://alexeygorbunov/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
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
            family: `Montserrat`,
            subsets: [`cyrillic`],
            variants: [`300`, `400`, `500`, `600`, `700`, `900`],
          },
          {
            family: `Marck Script`,
            subsets: [`cyrillic`],
            variants: [`400`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-82477285-2",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "alexeygorbunov.com",
      },
    },
    {
      resolve: `gatsby-plugin-yandex-metrika`,
      options: {
        trackingId: "55002796",
        webvisor: true,
        trackHash: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
