import React, { useEffect, useState } from "react"
import { Row } from "react-bootstrap"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { getOneNews } from "../../../Apis/news"
import FullNewsCard from "../../../components/News/FullNewsCard"
import NewsCard from "../../../components/News/PortraitNewsCard"
import "./index.scss"

const FullNews = ({}) => {
  const params = useParams()
  const [thisNewsId, setThisNewsId] = useState<string>()

  useEffect(() => {
    const { newsId } = params
    setThisNewsId(newsId)
  }, [params])
  const [newsData, setNewsData] = useState<any>()

  const getOneNewsFn = async () => {
    return await getOneNews(thisNewsId || "")
  }
  const {
    data: oneNewsData,
    isLoading,
    // refetch: refetchNews,
  } = useQuery("one-news", () => getOneNewsFn(), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: !!thisNewsId,
  })

  //   const
  useEffect(() => {
    if (oneNewsData?.data?.error === false) {
      setNewsData(oneNewsData.data.result)
    }
  }, [oneNewsData])

  return (
    <div className="container one-news-page">
      <Row className="row one-news-row">
        <div className="one-news-right">
          {newsData && <FullNewsCard news={newsData} />}
        </div>
        <div className="col-6 col-md-10 one-news-left"></div>
      </Row>
    </div>
  )
}

export default FullNews
