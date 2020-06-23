import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello, humanoids!</h1>
    <p>Welcome to My new Gatsby website.</p>
    <p>Please, feel free to explore the sample.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/page-3/">Go to page 3</Link> <br />
    <Link to="/using-typescript/">Section "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
