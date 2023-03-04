import React, { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { getNewsHeadlines } from "../../../../Apis/news"
import Headlines from "../../../../components/Headlines"

const TopStories = () => {
  const [newsData, setNewsData] = useState<any>()

  const {
    data: allNewsData,
    isLoading,
    // refetch: refetchNews,
  } = useQuery("user-profile", () => getNewsHeadlines(), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })

  //   const
  useEffect(() => {
    if (allNewsData?.data?.error === false) {
      const numberOfNews = allNewsData.data.result.slice(0, 3)
      setNewsData(numberOfNews)
    }
  }, [allNewsData])

  return (
    <div>
      <br />
      <h3>Top stories</h3>
      {newsData && <Headlines news={newsData} />}
    </div>
  )
}

export default TopStories
