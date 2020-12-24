import React from "react"
import tw, { styled } from "twin.macro"
const Button = styled.button`
  ${tw`p-2 text-white bg-blue-500 rounded hover:bg-blue-800`}
  border: 2px solid red
`

const TestPage = () => {
  return (
    <div>
      <h1 className="w-1/2 p-6 m-6 rounded-full bg-primary text-secondary">
        test
      </h1>
      <Button>Button</Button>
    </div>
  )
}

export default TestPage
