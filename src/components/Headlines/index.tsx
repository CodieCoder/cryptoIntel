import React from "react"
import { Link } from "react-router-dom"

import EachHeadline from "./EachHeadline"
import "./index.scss"

const Headlines = ({ news }: { news: any }) => {
  const goToNews = (link: string): void => {
    window.open(link, "_blank")
  }
  return (
    <div className="container">
      <div className="headlines">
        <div className="row">
          {news
            ? news?.map((news: any, index: number) => {
                return (
                  <div className="col-lg-4 col-md-4 col-sm-12" key={index}>
                    <Link to={`/news/${news?.news_randkey}`}>
                      <EachHeadline news={news} />
                    </Link>
                  </div>
                )
              })
            : "Loading"}
        </div>
      </div>
    </div>
  )
}

export default Headlines
