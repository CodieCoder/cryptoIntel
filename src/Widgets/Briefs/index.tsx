import CoinPagination from "components/Pagination/Pagination";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getNewsBrief } from "../../Apis/news";
import { IBriefObject, INewsBrief } from "./constants";
import EachBrief from "./eachBrief";
import "./index.scss";
import BriefPlaceholder from "./placeholder";

const NewsBrief: React.FC<INewsBrief> = ({ count }) => {
  const [briefData, setBriefData] = useState<any>();
  const [pageNo, setPageNo] = useState(1);
  // const [pageSize, setPageSize] = useState(12);
  const [totalPages, setTotalPage] = useState(10);
  const { data, isLoading, isFetching, refetch } = useQuery(
    "news-brief",
    () => getNewsBrief(pageNo, count),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    if (data?.data?.error === false && data.data?.result?.data) {
      setBriefData(data.data?.result?.data);
      setTotalPage(data.data?.result?.totalPages);
    }
  }, [data]);

  useEffect(() => {
    refetch();
    // eslint-disable-next-line
  }, [pageNo, count]);

  return (
    <div className="widget-news-brief">
      {briefData && isLoading === false && isFetching === false ? (
        briefData?.map((brief: IBriefObject, index: number) => (
          <div className="each" key={index}>
            <EachBrief brief={brief} />
          </div>
        ))
      ) : (
        <BriefPlaceholder count={count} />
      )}
      {briefData && (
        <CoinPagination
          pageNo={pageNo}
          setPageNo={setPageNo}
          totalPages={totalPages}
          size="sm"
        />
      )}
    </div>
  );
};
// BriefPlaceholder;
export default NewsBrief;
