import React from "react"
import CoinsListing from "../../../../components/CoinList.tsx"
import "./index.scss"
import Headlines from "../../../../components/Headlines"

const CenterBody = () => {
  return (
    <div className="center-body">
      <Headlines />
      <CoinsListing />
    </div>
  )
}

export default CenterBody
