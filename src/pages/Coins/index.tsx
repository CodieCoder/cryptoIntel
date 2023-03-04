import React from "react"
import CoinsListing from "../../components/CoinList.tsx"
import Trending from "../../components/Trending"

const CoinsPage = () => {
  return (
    <div className="container coins">
      <br />
      <Trending />
      {/* <h3>All coins</h3> */}
      <CoinsListing pagination={true} />
    </div>
  )
}

export default CoinsPage
