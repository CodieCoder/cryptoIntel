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

  // [(1499040000000, // Kline open time
  // "0.01634790", // Open price
  // "0.80000000", // High price
  // "0.01575800", // Low price
  // "0.01577100", // Close price
  // "148976.11427815", // Volume
  // 1499644799999, // Kline Close time
  // "2434.19055334", // Quote asset volume
  // 308, // Number of trades
  // "1756.87402397", // Taker buy base asset volume
  // "28.46694368", // Taker buy quote asset volume
  // "0")]; // Unused field, ignore.

  const getCoinKline = async () => {
    const symbol: string = selectedCoin?.symbol || "USDT";
    const parameter = {
      symbol: `${symbol.toUpperCase()}USDT`,
      // symbol: `BTCUSDT`,
      interval: klineInterval.OneDay,
      startTime: "",
      endTime: "",
      limit: 500,
    };

    const url = `https://api.binance.com/api/v3/klines?symbol=${parameter.symbol}&interval=${parameter.interval}`;
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
    return moment(value).format("lll");
  };

  const getLinearChartData = (rawData: any, selectedCoin: any) => {
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
          backgroundColor: "rgba(155, 219, 132, 0.5)",
        },
      ],
    };
  };

  useEffect(() => {
    refetch();
  }, [selectedCoin]);

  useEffect(() => {}, [coinKlineData]);

  return (
    <div className="dashboard-chart">
      {selectedCoin ? (
        <Loading loading={isLoading || isFetching}>
          {coinKlineData && (
            <>
              <ChartTopBoxes info={createTopChartInfo(selectedCoin)} />
              <BarChart
                coinData={getLinearChartData(coinKlineData, selectedCoin)}
              />
            </>
          )}
        </Loading>
      ) : (
        <div>Nothing to show</div>
      )}
    </div>
  );
};

export default DashboardChart;
