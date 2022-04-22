import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Feather River Temple`,
    siteUrl: `https://beta.featherrivertemple.org`,
  },
  plugins: [
    'gatsby-plugin-sass'
  ],
}

export default config
