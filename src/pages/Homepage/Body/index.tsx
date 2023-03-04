import React from "react"
import CenterBody from "./CenterBody"
import LeftBody from "./LeftBody"

const Body = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-9 col-md-12 col-sm-12">
          <CenterBody />
        </div>
        <div className="col-lg-3">
          <LeftBody />
        </div>
      </div>
    </div>
  )
}

export default Body
