import React from "react"
import CoinsListing from "../../components/CoinList.tsx"
import Trending from "../../components/Trending"

const CoinsPage = () => {
  return (
    <div className="container coins">
      <br />
      <Trending />
      <hr />
      {/* <h3>All coins</h3> */}
      <CoinsListing />
    </div>
  )
}

export default CoinsPage
