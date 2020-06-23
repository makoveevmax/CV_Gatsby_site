import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <SEO title="Page three" />
    <h1>This is my third page</h1>
    <p>You could even propose the website content! :)</p>
    <Link to="/page-2/">Back to Page 2</Link> <br />
    <Link to="/">Back to Homepage</Link>
  </Layout>
)

export default ThirdPage