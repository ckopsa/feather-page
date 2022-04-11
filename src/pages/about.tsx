import * as React from "react"
import Greeting from '../components/greeting'
import { Link } from "gatsby";

const AboutPage = () => {
  return (
    <main>
      <title>About Me</title>
      <h1>About Me</h1>
      <Link to="/">Back to Home</Link>
      <p>Hi there, I'm the proud creator of this site, which I Built with Gatsby.</p>
      <Greeting name="Colton"/>
    </main>
  )
}

export default AboutPage
