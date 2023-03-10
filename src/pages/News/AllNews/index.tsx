import React, { useEffect, useState } from "react"
import Headlines from "../../../components/Headlines"
import { useQuery } from "react-query"
import { getNewsHeadlines } from "../../../Apis/news"
import "./index.scss"
import { Row, Col, Spinner } from "react-bootstrap"
import LandscapeCards from "../../../components/News/LandsscapeNewsCard/landscapeCard"
import NewsBrief from "../../../Widgets/Briefs"

const NewsPage = () => {
  const [newsData, setNewsData] = useState<string[]>()
  const [loading, setLoading] = useState(true)

  const {
    data: allNewsData,
    isLoading,
    isFetching,
    // refetch: refetchNews,
  } = useQuery("all-news", () => getNewsHeadlines(), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })

  //const
  useEffect(() => {
    if (allNewsData?.data?.error === false) {
      setNewsData(
        allNewsData.data.result.filter((news: any) => news?.news_image)
      )
      setLoading(false)
    }
  }, [allNewsData])

  return (
    <div className="container news-page">
      {loading && (
        <div className="loading-div">
          <Spinner
            as="span"
            animation="border"
            role="status"
            variant="dark"
            aria-hidden="true"
          />
          <br />
          Loading...
        </div>
      )}

      <div>
        <br />
        {newsData && <Headlines news={newsData?.slice(0, 3)} />}

        <Row>
          <Col xs={12} sm={12} md={8} className="right-pane">
            <h3>Latest news</h3>
            <Row xs={1} sm={1} md={1} lg={1} className="g-4 news-cards">
              {newsData &&
                newsData?.slice(3).map((eachNews: any, index: number) => (
                  <div className="news-cards-each" key={index}>
                    <LandscapeCards news={eachNews} />
                  </div>
                ))}
            </Row>
          </Col>
          <Col xs={12} sm={12} md={4} className="left-pane">
            <div className="news-brief-component">
              <NewsBrief />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default NewsPage
