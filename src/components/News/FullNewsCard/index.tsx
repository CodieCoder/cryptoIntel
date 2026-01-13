import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { TNews } from "../../../Constants";
import ShareButtons from "../../Share/ShareButtons";
import "./index.scss";

interface IFullNewsCard {
  news: TNews;
}

const FullNewsCard: React.FC<IFullNewsCard> = ({ news }) => {
  return (
    <div className="FullNewsCard">
      <div className="header">
        <Row>
          <Col xs={10} sm={10} md={4} lg={4}>
            <div className="top-image">
              <Image
                fluid
                // width="100%"
                // height="100%"
                src={news?.image}
                loading="lazy"
                className="image"
                alt={news?.title}
              />
            </div>
          </Col>
          <Col>
            <div className="share">
              {/* <div>Share : </div> */}
              <div>
                <ShareButtons link="" />
              </div>
            </div>
            <div className="title">{news?.title}</div>
          </Col>
        </Row>
        <div className="body">{news.body}</div>
      </div>
    </div>
  );
};

export default FullNewsCard;
