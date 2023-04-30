import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { getNewsHeadlines } from "../../../../Apis/news"
import Headlines from "../../../../components/Headlines"

const TopStories = () => {
  //   const [newsData, setNewsData] = useState<any>()

  //   const {
  //     data: allNewsData,
  //     // refetch: refetchNews,
  //   } = useQuery("user-profile", () => getNewsHeadlines(1, 3), {
  //     refetchOnMount: false,
  //     refetchOnWindowFocus: false,
  //   })

  //   //   const
  //   useEffect(() => {
  //     if (allNewsData?.data?.error === false) {
  //       // const numberOfNews = allNewsData.data.result.slice(0, 3);
  //       setNewsData(allNewsData.data?.result.data)
  //     }
  //   }, [allNewsData])

  return (
    <div>
      <br />
      <h4>Top stories</h4>
      <Headlines />
    </div>
  )
}

export default TopStories
