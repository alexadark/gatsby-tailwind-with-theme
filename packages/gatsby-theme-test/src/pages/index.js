import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import tw, { styled } from "twin.macro"
const Button = styled.button`
  ${tw`p-2 text-white bg-blue-500 rounded hover:bg-blue-800`}
  border: 2px solid red
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="text-secondary">Hi people</h1>
    <Button>Activate</Button>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
