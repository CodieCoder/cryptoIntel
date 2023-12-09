import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./index.scss";
import Spinner from "react-bootstrap/esm/Spinner";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets-fixed";
import LivePrice from "../../components/LivePrice";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { getCoinData } from "Apis/coins/getCoins";
import { useQuery } from "react-query";
import usePagesProvider from "usePagesProvider";

const Coinpage = () => {
  const { vs_currency } = usePagesProvider();
  const { coinId } = useParams();

  const { data, refetch, isLoading, isFetching } = useQuery(
    "get-coin-chart",
    () => getCoinData(coinId!),
    {
      refetchOnMount: false,
      refetchOnReconnect: true,
      refetchOnWindowFocus: false,
      enabled: !!coinId,
    }
  );

  useEffect(() => {
    coinId && refetch();
  }, [coinId, vs_currency]);

  const coinData = data?.data;

  const displayData = (coin: any) => {
    if (coin) {
      return (
        <div className='coin-page-render'>
          <div className='coin-page-top'>
            <div className='coin-page-top-chart'>
              <AdvancedRealTimeChart
                theme='light'
                interval='D'
                // style="5"
                autosize
                show_popup_button={true}
                popup_width='1000'
                popup_height='600'
                hide_side_toolbar={true}
                symbol={`${coin?.symbol}${vs_currency}`}
              ></AdvancedRealTimeChart>
            </div>
            <hr />
            <div className='row'>
              <div className='col-lg-6 coin-page-left'>
                <div className='coin-page-name'>
                  <div className='coin-page-name-img'>
                    <img
                      src={coin?.image?.large}
                      width='35px'
                      className='float-start'
                      alt={coin?.name}
                    />
                  </div>
                  <div className='coin-page-name-name'>
                    {coin?.name} ({coin?.symbol?.toUpperCase()})
                    <span style={{ color: "#aaa", marginLeft: "0.3rem" }}>
                      | &nbsp;
                      {vs_currency.toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className='coin-page-numbers'>
                  <div className='coin-page-price'>
                    <LivePrice
                      currency={coin?.symbol}
                      vs_currency={vs_currency}
                      initialPrice={
                        coin?.market_data?.current_price?.[vs_currency]
                      }
                    />
                  </div>
                </div>
                <div
                  className='coin-page-sparkline'
                  style={{ textAlign: "center" }}
                >
                  <Sparklines
                    data={coin?.market_data?.sparkline_7d?.price}
                    height={90}
                  >
                    <SparklinesLine
                      color={
                        coin?.market_data?.price_change_24h < 0
                          ? "#f35484"
                          : "#0a8830"
                      }
                    />
                  </Sparklines>
                  <small>7 days sparkline</small>
                </div>
              </div>
              <div className='col-lg-6 coin-page-right'>
                <div className='coin-page-dsecription'>
                  <h5>Info</h5>
                </div>
                <div className='coin-page-dsecription-div'>
                  <div className='coin-page-dsecription-hd'>Website</div>
                  <div className='coin-page-dsecription-info'>
                    <a
                      className='coin-page-description-links'
                      href={coin?.links?.homepage[0]}
                    >
                      Official website
                    </a>
                  </div>
                </div>
                <div className='coin-page-dsecription-div'>
                  <div className='coin-page-dsecription-hd'>Community</div>
                  <div className='coin-page-dsecription-info'>
                    <a
                      className='coin-page-description-links'
                      href={coin?.links?.subreddit_url}
                    >
                      Reddit
                    </a>
                  </div>
                  <div className='coin-page-dsecription-info'>
                    <a
                      className='coin-page-description-links'
                      href={`https://wwww.twitter.com/${coin?.links?.twitter_screen_name}`}
                    >
                      Twitter
                    </a>
                  </div>
                  <div className='coin-page-dsecription-info'>
                    <a
                      className='coin-page-description-links'
                      href={`https://wwww.facebook.com/${coin?.links?.facebook_username}`}
                    >
                      Facebook
                    </a>
                  </div>
                  <div className='coin-page-dsecription-info'>
                    <a
                      className='coin-page-description-links'
                      href={coin?.links?.official_forum_url[0]}
                    >
                      Forum
                    </a>
                  </div>
                </div>
                <div className='coin-page-dsecription-div'>
                  <div className='coin-page-dsecription-hd'>Source code</div>
                  <div className='coin-page-dsecription-info'>
                    <a
                      className='coin-page-description-links'
                      href={coin?.links?.repos_url?.github[0]}
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className='coin-page-market'>
              {coin?.market_data && (
                <>
                  <div className='row coin-page-market-divs'>
                    <div className='col'>
                      <div className='coin-page-market-hd'>Market Cap</div>
                      <div className='coin-page-market-text'>
                        {coin?.market_data?.market_cap?.[
                          vs_currency
                        ]?.toLocaleString()}
                      </div>
                    </div>
                    <div className='col'>
                      <div className='coin-page-market-hd'>
                        24 Hour Trading Volume
                      </div>
                      <div className='coin-page-market-text'>
                        {coin?.market_data?.total_volume?.[
                          vs_currency
                        ]?.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <div className='row coin-page-market-divs'>
                    <div className='col'>
                      <div className='coin-page-market-hd'>
                        Fully Diluted Valuation
                      </div>
                      <div className='coin-page-market-text'>
                        {coin?.market_data?.fully_diluted_valuation?.[
                          vs_currency
                        ]?.toLocaleString()}
                      </div>
                    </div>
                    <div className='col'>
                      <div className='coin-page-market-hd'>
                        Circulating Supply
                      </div>
                      <div className='coin-page-market-text'>
                        {coin?.market_data?.circulating_supply?.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div className='row coin-page-market-divs'>
                    <div className='col'>
                      <div className='coin-page-market-hd'>24h High</div>
                      <div className='coin-page-market-text'>
                        {coin?.market_data?.high_24h?.[
                          vs_currency
                        ]?.toLocaleString()}
                      </div>
                    </div>
                    <div className='col'>
                      <div className='coin-page-market-hd'>24h Low</div>
                      <div className='coin-page-market-text'>
                        {coin?.market_data?.low_24h?.[
                          vs_currency
                        ]?.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <br />
          <div className='coin-page-about'>
            <h5>
              About {coin?.name} ({coin?.symbol?.toUpperCase()})
            </h5>
            <div
              className='coin-page-about-text'
              dangerouslySetInnerHTML={{ __html: coin?.description?.en }}
            ></div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12'>
          <div className='coin-page'>
            {isLoading || isFetching ? (
              <div className='coin-page-loading'>
                <Spinner
                  as='span'
                  animation='border'
                  role='status'
                  variant='dark'
                  aria-hidden='true'
                />
                <br />
                Loading...
              </div>
            ) : (
              <div className='coin-page-data'>{displayData(coinData)}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coinpage;
