import React from "react"
import { useQuery } from "react-query"
import { getNewsBrief } from "../../Apis/news"
import { IBriefObject } from "./constants"
import EachBrief from "./eachBrief"
import "./index.scss"

interface ISocialTrends {
  count?: number
}
const NewsBrief = () => {
  const {
    data,
    isLoading,
    isFetching,
    // refetch: refetchNews,
  } = useQuery("news-brief", () => getNewsBrief(), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })

  return (
    <div className="widget-news-brief">
      {data?.data?.error === false &&
        data?.data?.result.map((brief: IBriefObject, index: number) => (
          <div className="each">
            <EachBrief brief={brief} key={index} />
          </div>
        ))}
    </div>
  )
}

export default NewsBrief
