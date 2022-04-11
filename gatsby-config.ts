import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  pathPrefix: "/feather-page",
  siteMetadata: {
    title: `new`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-sass'
  ],
}

export default config
