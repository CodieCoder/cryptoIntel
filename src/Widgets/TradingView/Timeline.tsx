import { Timeline } from "react-ts-tradingview-widgets-fixed";

const WidgetTimeLine = () => {
  return (
    <div style={{ margin: "auto" }}>
      <Timeline
        // colorTheme="dark"
        feedMode="market"
        market="crypto"
        height={800}
        width={325}
      ></Timeline>
    </div>
  );
};

export default WidgetTimeLine;
