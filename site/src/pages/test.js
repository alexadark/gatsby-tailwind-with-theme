import React from "react"
import tw, { styled } from "twin.macro"
import Layout from "gatsby-theme-test/src/components/layout"
const Button = styled.button`
  ${tw`p-2 text-white bg-blue-500 rounded hover:bg-blue-800`}
  border: 2px solid red
`

const TestPage = () => {
  return (
    <Layout>
      <h1 className="w-1/2 p-6 m-6 bg-blue-300 rounded-full text-secondary">
        test
      </h1>
      <Button>Button</Button>
    </Layout>
  )
}

export default TestPage
