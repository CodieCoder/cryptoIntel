import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getNewsBrief } from "../../Apis/news";
import { IBriefObject } from "./constants";
import EachBrief from "./eachBrief";
import "./index.scss";

interface ISocialTrends {
  count?: number;
}
const NewsBrief = () => {
  const [briefData, setBriefData] = useState<any>();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const {
    data,
    isLoading,
    isFetching,
    // refetch: refetchNews,
  } = useQuery("news-brief", () => getNewsBrief(page, pageSize), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    data && setBriefData(data?.data?.result?.data);
  }, [data]);

  return (
    <div className="widget-news-brief">
      {data?.data?.error === false &&
        briefData?.map((brief: IBriefObject, index: number) => (
          <div className="each">
            <EachBrief brief={brief} key={index} />
          </div>
        ))}
    </div>
  );
};

export default NewsBrief;
