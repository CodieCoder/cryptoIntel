import moment from "moment"
import React from "react"
import { Link } from "react-router-dom"
import { TruncateText } from "../../../utils/TruncateText"
import "../asset/index.scss"
import ShareButtons from "../../Share/ShareButtons"

interface ILandscape {
  news: any
}

const LandscapeCards: React.FC<ILandscape> = ({ news }) => {
  return (
    <div className="news-landscape-card">
      <div className="row news-landscape-card-div">
        <div className="col-lg-3 col-md-4 col-sm-6 news-landscape-left">
          <Link to={`/news/${news?.news_randkey}`}>
            {/* <div
              className="news-landscape-image"
              style={{
                backgroundImage: `url(${news?.news_image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div> */}
            <img src={news?.news_image} width="100%" />
          </Link>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-6 news-landscape-right">
          <div className="news-landscape-header">
            <Link to={`/news/${news?.news_randkey}`}>
              <div className="news-landscape-title">{news?.news_title}</div>
            </Link>
          </div>
          <div className="news-landscape-body">
            {TruncateText(news?.news_body, 150)}
          </div>
          {/* //todo: make reusable component - ShareButtons */}
          <div className="news-landscape-footer">
            <div className="news-landscape-date">
              {moment(news?.news_date).format("lll")}
            </div>
            <div className="news-landscape-share">
              <ShareButtons link="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandscapeCards
