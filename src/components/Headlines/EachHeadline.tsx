const EachHeadline = ({ news }: { news: any }) => {
  return (
    <div className="headline-single">
      <div className="headlines-thumb">
        <div
          style={{
            backgroundImage: `url(${news.image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="headlines-thumb-dark">
            <br />
            <div className="headlines-title">{news.title}</div>
          </div>
        </div>
      </div>

      <div className="headlines-description">{news.title}</div>
      {/* <div className="headlines-title">{news.title}</div> */}
    </div>
  );
};

export default EachHeadline;
