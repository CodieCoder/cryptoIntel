import React, { useEffect, useState } from "react"
import Headlines from "components/Headlines"
import { useQuery } from "react-query"
import { getNews } from "Apis/news"
import "./index.scss"
import { Row, Col } from "react-bootstrap"
import LandscapeCards from "components/News/LandsscapeNewsCard/landscapeCard"
import NewsBrief from "Widgets/Briefs"
import { TNews } from "Constants"
import CoinPagination from "components/Pagination/Pagination"
import NewsOptions from "../newsOptions"
import NewsPlaceholder from "components/News/placeholder"

const NewsPage: React.FC = () => {
  const [newsData, setNewsData] = useState<TNews[]>()
  // const [error, setError] = useState(false);
  const [pageNo, setPageNo] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [totalPages, setTotalPage] = useState(10)
  // const [category, setCategory] = useState("All")

  const { data: allNewsData, refetch: refetchNews } = useQuery(
    "all-news",
    () => getNews(pageNo, pageSize),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  )

  //const
  useEffect(() => {
    if (allNewsData?.data?.error === false) {
      setNewsData(
        allNewsData.data?.result?.data?.filter((news: any) => news?.image)
      )
      setTotalPage(allNewsData.data?.result?.totalPages)
      // setLoading(false);
    }
  }, [allNewsData])

  useEffect(() => {
    refetchNews()
    // eslint-disable-next-line
  }, [pageNo, pageSize])

  return (
    <div className="container news-page">
      <div>
        <br />
        {newsData && <Headlines />}

        <Row>
          <Col xs={12} sm={12} md={8} className="right-pane">
            <h3>Latest news</h3>
            <NewsOptions
              setPageSize={setPageSize}
              // setCategory={setCategory}
            />
            <Row xs={1} sm={1} md={1} lg={1} className="news-cards">
              {newsData ? (
                newsData?.map((eachNews: any, index: number) => (
                  <div className="news-cards-each" key={index}>
                    <LandscapeCards news={eachNews} />
                  </div>
                ))
              ) : (
                <NewsPlaceholder count={5} />
              )}
              {newsData && (
                <CoinPagination
                  pageNo={pageNo}
                  setPageNo={setPageNo}
                  totalPages={totalPages}
                />
              )}
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
