import React, { useEffect, useState } from "react"
import NewsHeadlines from "../../Apis/NewsHeadlines"
import EachHeadline from "./EachHeadline"
import "./index.scss"

const Headlines = () => {
  const [newsData, setNewsData] = useState<any>()
  let checkr: number = 0
  //   const
  useEffect(() => {
    setNewsData(NewsHeadlines())
  }, [])

  const goToNews = (link: string): void => {
    window.open(link, "_blank")
  }
  return (
    <div className="container">
      <div className="headlines">
        <h3>Business news</h3>
        <div className="row">
          {newsData
            ? newsData?.results.map((news: any, index: number) => {
                if (checkr < 3 && news?.description && news?.image_url) {
                  checkr++
                  return (
                    <div
                      className="col-lg-4 col-md-4 col-sm-12"
                      onClick={() => goToNews(news.link)}
                      key={index}
                    >
                      <EachHeadline news={news} />
                    </div>
                  )
                }
              })
            : "Loading"}
        </div>
      </div>
    </div>
  )
}

export default Headlines
