import React from "react"
import { Pagination } from "react-bootstrap"
import "./index.scss"

interface IPagination {
  pageNo: number
  setPageNo: React.Dispatch<React.SetStateAction<number>>
}

const defaultCoinMax = 1000
const testPageNo = 6

const CoinPagination: React.FC<IPagination> = ({ pageNo, setPageNo }) => {
  const prevItems = (pageNo: number) => {
    const result = []
    for (let i = 3; i > 0; i--) {
      result.push(<Pagination.Item key={i}>{pageNo - i}</Pagination.Item>)
    }
    return result
  }
  const nextItems = (pageNo: number) => {
    let max: number
    if (pageNo === 1) {
      max = 5
    } else if (pageNo > 1 && pageNo < 3) {
      max = 4
    } else {
      max = 3
    }
    const result = []
    for (let i = 1; i < max; i++) {
      result.push(<Pagination.Item key={i}>{pageNo + i}</Pagination.Item>)
    }
    return result
  }

  return (
    <div className="pagination">
      <Pagination className="pagination-component">
        <Pagination.First />
        <Pagination.Prev />
        {testPageNo > 1 && prevItems(testPageNo)}
        <Pagination.Item active>{testPageNo}</Pagination.Item>
        {testPageNo < 200 && nextItems(testPageNo)}
        <Pagination.Next />

        <Pagination.Last />
      </Pagination>
    </div>
  )
}

export default CoinPagination
