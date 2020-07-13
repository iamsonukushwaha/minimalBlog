require(`dotenv`).config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    siteTitleAlt: `Sonu kumar kushwaha`,
    siteTitle: `Sonu\'s blog`,
    siteHeadline: "Sonu's blog",
    siteUrl: "https://blog-minimal.netlify.app/",
    siteDescription: "Sonu's personal blog",
    siteLanguage: "en",
    author: "Sonu kumar kushwaha",
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/sonukumarkush12`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/flyingsonu736/`,
          },
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/sonukumarkushwaha/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sonu's Blog `,
        short_name: `Sonu`,
        description: `Sonu's personal blog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
