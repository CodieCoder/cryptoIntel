import {
  KlineDataLabelEnum,
  KlineDataTypeEnum,
  KlineIntervalEnum,
} from "components/Charts/constants";
import React, { useEffect, useState } from "react";
import ChartTopBoxes from "./components/topBoxes";
import { useQuery } from "react-query";
import LineChart from "./lineChart";
import { IChartInterval, simpleIntervals } from "utils/dateFormatter";
import ContainerBox from "components/Container";
import { IconTypesEnum } from "components/Container/constants";
import ChartTools from "./components/chartOptions";
import "./assets/index.scss";
import NoData from "components/Errors/NoData";
import { createTopChartInfo, getLinearChartData } from "./components/helper";
import useUserProvider from "pages/User/useUserContext";
import { getKlineDataFromBinance } from "Apis/chart/getChartData";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets-fixed";
import { ChartTypeEnum } from "./constants";
import usePagesProvider from "usePagesProvider";

const DashboardChart: React.FC = () => {
  const { selectedCoin } = useUserProvider();
  const { currency } = usePagesProvider();
  const [coinKlineData, setCoinKlineData] = useState<any>();
  const [chartType, setChartType] = useState(ChartTypeEnum.line);
  // const [chartDataType, setChartDataType] = useState<KlineDataTypeEnum>(
  //   KlineDataTypeEnum.ClosePrice
  // );
  // const [chartLabel, setChartLabel] = useState<KlineDataLabelEnum>(
  //   KlineDataLabelEnum.CloseTime
  // );
  const [intervalType, setIntervalType] = useState<IChartInterval>(
    simpleIntervals(KlineIntervalEnum.OneDay)
  );

  const getCoinKline = async () => {
    if (selectedCoin && intervalType) {
      const { interval, startTime, endTime } = intervalType;
      const isSymbol = selectedCoin.symbol;
      // const limit = 500;
      const symbol = `${isSymbol.toUpperCase()}USDT`;
      return getKlineDataFromBinance(symbol, interval, startTime, endTime);
    }
  };

  const {
    data: coinData,
    refetch,
    isLoading,
    isFetching,
  } = useQuery("get-coin-chart", () => getCoinKline(), {
    refetchOnMount: false,
    refetchOnReconnect: true,
    refetchOnWindowFocus: false,
    enabled: !!selectedCoin,
  });

  useEffect(() => {
    coinData?.data && setCoinKlineData(coinData.data);
  }, [coinData]);

  useEffect(() => {
    refetch();
    //eslint-disable-next-line
  }, [selectedCoin, intervalType]);

  const displayChartTYpe = (chartType: ChartTypeEnum) => {
    switch (chartType) {
      case ChartTypeEnum.line:
        return (
          <LineChart
            coinData={getLinearChartData(
              coinKlineData,
              selectedCoin,
              KlineDataTypeEnum.ClosePrice,
              KlineDataLabelEnum.CloseTime
            )}
          />
        );
      case ChartTypeEnum.advanced:
        return (
          <AdvancedRealTimeChart
            theme="light"
            interval="D"
            // style="5"
            autosize
            show_popup_button={true}
            popup_width="1000"
            popup_height="600"
            hide_side_toolbar={true}
            symbol={`${selectedCoin?.symbol}${currency}`}
          ></AdvancedRealTimeChart>
        );
    }
  };

  return (
    <>
      <br />
      <ContainerBox
        title={"Chart"}
        loading={isLoading || isFetching}
        icon={IconTypesEnum.chart}
      >
        <div className="dashboard-chart">
          {selectedCoin && coinKlineData ? (
            <div className="dashboard-chart-div">
              <div className="dashboard-chart-top">
                <ChartTools
                  intervalType={intervalType}
                  setIntervalType={setIntervalType}
                  setChartType={setChartType}
                />
              </div>
              <div className="dashboard-chart-top">
                <ChartTopBoxes info={createTopChartInfo(selectedCoin)} />
              </div>
              <div className="dashboard-chart-bdoy">
                <div className="dashboard-chart-body-options"></div>
                {selectedCoin && displayChartTYpe(chartType)}
              </div>
            </div>
          ) : (
            <NoData />
          )}
        </div>
      </ContainerBox>
    </>
  );
};

export default DashboardChart;
