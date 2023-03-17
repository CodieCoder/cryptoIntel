import React from "react"
import "./index.scss"
import { BsDatabaseSlash } from "react-icons/bs"

const NoData = () => {
  return (
    <div className="error-noData">
      <div className="noData">
        <div className="noData-icon">
          <BsDatabaseSlash />
        </div>
        <div className="noData-text">No data found</div>
      </div>
    </div>
  )
}

export default NoData
