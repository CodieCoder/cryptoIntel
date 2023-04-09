import React, { useEffect, useState } from "react";
import Headlines from "../../../components/Headlines";
import { useQuery } from "react-query";
import { getNews } from "../../../Apis/news";
import "./index.scss";
import { Row, Col, Spinner } from "react-bootstrap";
import LandscapeCards from "../../../components/News/LandsscapeNewsCard/landscapeCard";
import NewsBrief from "../../../Widgets/Briefs";
import { TNews } from "Constants";

const NewsPage: React.FC = () => {
  const [newsData, setNewsData] = useState<TNews[]>();
  const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  const {
    data: allNewsData,
    isLoading,
    isFetching,
    // refetch: refetchNews,
  } = useQuery("all-news", () => getNews(page, pageSize), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  //const
  useEffect(() => {
    if (allNewsData?.data?.error === false) {
      setNewsData(
        allNewsData.data?.result?.data?.filter((news: any) => news?.image)
      );
      // setLoading(false);
    } else {
      setError(true);
    }
  }, [allNewsData]);

  return (
    <div className="container news-page">
      {isLoading && (
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
  );
};

export default NewsPage;
