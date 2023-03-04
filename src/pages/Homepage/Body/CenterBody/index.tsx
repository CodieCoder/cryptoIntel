import React from "react"
import CoinsListing from "../../../../components/CoinList.tsx"
import "./index.scss"
import TopStories from "./headlines"

const CenterBody = () => {
  return (
    <div className="center-body">
      <TopStories />
      <CoinsListing />
    </div>
  )
}

export default CenterBody
