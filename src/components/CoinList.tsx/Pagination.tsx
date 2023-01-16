import React from "react"
import { Pagination } from "react-bootstrap"

interface IPagination {
  pageNo: number
  setPageNo: React.Dispatch<React.SetStateAction<number>>
}

const defaultCoinMax = 1000
const testPageNo = 6
const CoinPagination: React.FC<IPagination> = ({ pageNo, setPageNo }) => {
  const prevItems = (pageNo: number) => {
    const result = []
    for (let i = 3; i < pageNo; i--) {
      result.push(<Pagination.Item key={i}>{pageNo - i}</Pagination.Item>)
    }
    return result
  }

  return (
    <div className="coin-list-pagination">
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        {testPageNo > 1 && prevItems(testPageNo)}
        <Pagination.Item active>{testPageNo}</Pagination.Item>
        {testPageNo < 200 && (
          <Pagination.Item>{testPageNo + 1}</Pagination.Item>
        )}
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  )
}

export default CoinPagination
