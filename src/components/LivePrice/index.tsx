import React, { useEffect, useState } from "react"
import useWebSocket from "react-use-websocket"
import NumberType from "../NumberType"
const LivePrice = ({
  currency,
  vs_currency,
  initialPrice,
}: {
  currency: string
  vs_currency: string
  initialPrice: number
}) => {
  const [messageHistory, setMessageHistory] = useState<any>(false)

  //   vs_currency = "usdt";
  //WebSocket using "react-use-websocket"

  const {
    sendMessage,
    lastMessage,
  }: // readyState,
  {
    sendMessage: any
    lastMessage: any
    // readyState: any;
  } = useWebSocket(
    `wss://stream.binance.com:9443/ws/${currency}${vs_currency}@miniTicker`
  )

  useEffect(() => {
    if (lastMessage !== null) {
      const data = JSON.parse(lastMessage?.data)
      setMessageHistory(data)
    }
    // console.log("Testing okay : ", messageHistory);
  }, [lastMessage, currency, vs_currency, initialPrice])

  const percentage = (newNumber: number, oldNumber: number) => {
    let result =
      newNumber > oldNumber ? newNumber - oldNumber : oldNumber - newNumber
    result = result / oldNumber
    result = result * 100
    return newNumber > oldNumber ? result : Number(`-${result}`)
  }

  return (
    <>
      {messageHistory !== false ? (
        <>
          <div className="live-price">
            <NumberType
              type="number"
              length={3}
              number={messageHistory?.c}
              checker={percentage(messageHistory?.c, messageHistory?.o)}
              icon={false}
            />
          </div>
          <div className="live-percent">
            <NumberType
              type="percent"
              length={2}
              number={percentage(messageHistory?.c, messageHistory?.o)}
              checker={messageHistory?.c - messageHistory?.o}
              icon={true}
            />
          </div>
        </>
      ) : (
        <div className="coin-page-currentPrice">
          <NumberType
            type="number"
            length={2}
            number={initialPrice}
            checker={initialPrice}
            icon={false}
          />
        </div>
      )}
    </>
  )
}

export default LivePrice
