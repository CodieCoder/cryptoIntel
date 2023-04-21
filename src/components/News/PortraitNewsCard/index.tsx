import moment from "moment";
import Card from "react-bootstrap/Card";
import { TruncateText } from "../../../utils/TruncateText";
import "../asset/index.scss";

const NewsCard = ({ news }: { news: any }) => {
  return (
    <div className="newsCard">
      <Card className="card-news">
        <Card.Img
          className="card-news-img"
          variant="top"
          src={news?.news_image}
        />
        {/* <Card.ImgOverlay> */}
        {/* <Card.Header className="card-news-header"> */}
        <Card.Title className="card-news-title">{news?.news_title}</Card.Title>
        {/* {news?.news_categories} */}
        {/* <Card.Subtitle>{news?.news_tags}</Card.Subtitle> */}
        {/* </Card.Header> */}
        {/* </Card.ImgOverlay> */}
        <Card.Body className="card-news-body">
          <Card.Text>{TruncateText(news?.news_body, 150)}</Card.Text>
        </Card.Body>
        <Card.Footer className="card-news-footer">
          {moment(news?.news_date).format("lll")}
        </Card.Footer>
      </Card>
    </div>
  );
};

// export const CreateNewsQuery = [
//   "news_title",
//   "news_date",
//   "news_image",
//   "news_url",
//   "news_body",
//   "news_tags",
//   "news_language",
//   "news_categories",
//   "news_source_info",
//   "news_randkey",
// ]

export default NewsCard;
