import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getOneNews } from "../../../Apis/news";
import FullNewsCard from "../../../components/News/FullNewsCard";
import NewsBrief from "../../../Widgets/Briefs";
import "./index.scss";

const FullNews = () => {
  const params = useParams();
  const [thisNewsId, setThisNewsId] = useState<string>();

  useEffect(() => {
    const { newsId } = params;
    setThisNewsId(newsId);
  }, [params]);
  const [newsData, setNewsData] = useState<any>();

  const getOneNewsFn = async () => {
    return await getOneNews(thisNewsId || "");
  };
  const {
    data: oneNewsData,
    // refetch: refetchNews,
  } = useQuery("one-news", () => getOneNewsFn(), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: !!thisNewsId,
  });

  //   const
  useEffect(() => {
    if (oneNewsData?.data?.error === false) {
      setNewsData(oneNewsData.data.result);
    } // eslint-disable-next-line
  }, [oneNewsData]);

  return (
    <div className="container one-news-page">
      <Row className="row one-news-row">
        <Col xs={12} sm={12} md={8} lg={8} className="one-news-left">
          {newsData && <FullNewsCard news={newsData} />}
        </Col>
        <Col xs={12} sm={12} md={4} lg={4} className="one-news-right">
          <div className="heading">Hot Headlines</div>
          <NewsBrief count={6} />
        </Col>
      </Row>
    </div>
  );
};

export default FullNews;
