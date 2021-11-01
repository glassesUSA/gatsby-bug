module.exports = {
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `blurred`,
          formats: ['auto', 'avif'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassRuleModulesTest: /\.s(a|c)ss$/,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1920,
      },
    },
  ],
}
