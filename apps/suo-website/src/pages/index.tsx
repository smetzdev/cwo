import React from "react"
import Layout from "../components/Layout"
import tw from "twin.macro"

const Test = tw.div`bg-red-400`

export default function Index() {
  return (
    <Layout>
      <div tw="container bg-primary text-primary-contrast">
        <h1>Hello</h1>
        <Test as="button">Hello</Test>
      </div>
    </Layout>
  )
}
