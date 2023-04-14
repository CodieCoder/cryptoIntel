import {
  IKlineData,
  IKlineParams,
  KlineDataLabelEnum,
  KlineDataTypeEnum,
  klineInterval,
} from "components/Charts/constants";
import Loading from "components/Loading";
import { ICoin } from "Constants";
import AxiosClient from "Library/axios";
import moment from "moment";
import UserContext from "pages/User/context";
import React, { useContext, useEffect, useState } from "react";
import BarChart from "./barChart";
import ChartTopBoxes from "./topBoxes";
import { useQuery } from "react-query";
import LineChart from "./lineChart";
import { ILinearChartData } from "./constants";
import {
  DateFormatter,
  DateIntervalEnum,
  dateTimeInterval,
  DateTypeEnum,
} from "utils/dateFormatter";
import ContainerBox from "components/Container";

interface IDashboardChart {
  coin: ICoin;
}

const DashboardChart: React.FC = () => {
  const { selectedCoin } = useContext(UserContext);
  const [coinKlineData, setCoinKlineData] = useState<any>();
  const [chartDataType, setChartDataType] = useState<KlineDataTypeEnum>(
    KlineDataTypeEnum.HighPrice
  );
  const [chartLabel, setChartLabel] = useState<KlineDataLabelEnum>(
    KlineDataLabelEnum.CloseTime
  );

  const createTopChartInfo = (selectedCoin: ICoin) => {
    return [
      {
        title: "Market cap",
        data: selectedCoin.market_cap,
      },
      {
        title: "Total volume",
        data: selectedCoin.total_volume,
      },
      {
        title: "Circulating supply",
        data: selectedCoin.circulating_supply,
      },
    ];
  };

  const currentDateTime = new Date().toString();

  const getCoinKline = async () => {
    const symbol: string = selectedCoin?.symbol || "USDT";
    const parameter = {
      symbol: `${symbol.toUpperCase()}USDT`,
      interval: klineInterval.OneDay,
      startTime: dateTimeInterval(7, "days", DateTypeEnum.unix),
      endTime: DateFormatter(DateTypeEnum.unix, currentDateTime),
      limit: 500,
    };

    const url = `https://api.binance.com/api/v3/klines?symbol=${parameter.symbol}&interval=${parameter.interval}&startTime=${parameter.startTime}&endTime=${parameter.endTime}`;
    return await AxiosClient.get(`${url}`);
  };

  const {
    data: coinData,
    refetch,
    isLoading,
    isFetching,
  } = useQuery("get-coin-chart", () => getCoinKline(), {
    onSuccess(data) {
      console.log("Testing coinKline :", data);
      data?.data && setCoinKlineData(data?.data);
    },
    onError(err) {},
    refetchOnMount: false,
    refetchOnReconnect: true,
    refetchOnWindowFocus: false,
    enabled: !!selectedCoin,
  });
  const arrangeKlineData = (klines: any) => {
    const dataToAdd: IKlineData[] = [];
    klines.map((kline: number[]) => {
      const tmp: IKlineData = {
        OpenTime: kline[0],
        OpenPrice: kline[1],
        HighPrice: kline[2],
        LowPrice: kline[3],
        ClosePrice: kline[4],
        Volume: kline[5],
        CloseTime: kline[6],
        QuoteAssetVolume: kline[7],
        NumberOfTrades: kline[8],
        TakerBuyBaseAssetVolume: kline[9],
        TakerBuyQuoteAssetVolume: kline[10],
        UnusedField: kline[11],
      };
      dataToAdd.push(tmp);
    });
    return dataToAdd;
  };

  const linearDatasetsFromKlineData = (
    klines: IKlineData[],
    type: KlineDataTypeEnum,
    label: KlineDataLabelEnum,
    formatLabels: (value: any) => string
  ) => {
    const data = klines?.map((kline: IKlineData) => kline[type]);
    const labels = klines?.map((kline: IKlineData) =>
      formatLabels(kline[label])
    );
    return {
      labels,
      data,
    };
  };

  const covertDateTime = (value: string) => {
    return moment(value).format("l");
  };

  const getLinearChartData = (
    rawData: any,
    selectedCoin: any
  ): ILinearChartData => {
    const klineData = arrangeKlineData(rawData);
    const linearData = linearDatasetsFromKlineData(
      klineData,
      chartDataType,
      chartLabel,
      covertDateTime
    );

    return {
      labels: linearData?.labels,
      datasets: [
        {
          label: selectedCoin.name,
          data: linearData?.data,
          fill: true,
          borderColor: "rgba(10, 136, 48, 1)",
          backgroundColor: "rgba(10, 136, 48, 0.2)",
          tension: 0.1,
        },
      ],
    };
  };

  useEffect(() => {
    refetch();
  }, [selectedCoin]);

  useEffect(() => {}, [coinKlineData]);

  return (
    <>
      <br />
      <ContainerBox title={"Chart"}>
        <div className="dashboard-chart">
          {selectedCoin ? (
            <Loading loading={isLoading || isFetching}>
              {coinKlineData && (
                <div className="dashboard-chart-div">
                  <div className="dashboard-chart-top">
                    <ChartTopBoxes info={createTopChartInfo(selectedCoin)} />
                  </div>
                  <div className="dashboard-chart-bdoy">
                    <div className="dashboard-chart-body-options"></div>
                    <LineChart
                      coinData={getLinearChartData(coinKlineData, selectedCoin)}
                    />
                  </div>
                </div>
              )}
            </Loading>
          ) : (
            <div>Nothing to show</div>
          )}
        </div>
      </ContainerBox>
    </>
  );
};

export default DashboardChart;
