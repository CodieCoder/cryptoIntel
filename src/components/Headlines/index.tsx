import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import EachHeadline from "./EachHeadline"
import "./index.scss"
import { useQuery } from "react-query"
import { getNewsHeadlines } from "Apis/news"
import { TNews } from "Constants"
import Loading from "components/Loading"

const Headlines = () => {
  const [newsData, setNewsData] = useState<TNews[]>()
  const {
    data: allNewsData,
    isLoading,
    isFetching,
  } = useQuery("headline-news", () => getNewsHeadlines(1, 3), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })
  useEffect(() => {
    if (allNewsData?.data?.error === false) {
      setNewsData(
        allNewsData.data?.result?.data?.filter((news: any) => news?.image)
      )
    }
  }, [allNewsData])
  return (
    <div className="container">
      <div className="headlines">
        <Loading loading={isLoading || isFetching}>
          <div className="row">
            {newsData
              ? newsData?.map((news: any, index: number) => {
                  return (
                    <div className="col-lg-4 col-md-4 col-sm-12" key={index}>
                      <Link to={`/news/${news?.randkey}`}>
                        <EachHeadline news={news} />
                      </Link>
                    </div>
                  )
                })
              : "Loading"}
          </div>
        </Loading>
      </div>
    </div>
  )
}

export default Headlines
