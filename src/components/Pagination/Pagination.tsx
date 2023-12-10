import React from "react";
import { Pagination } from "react-bootstrap";
import "./index.scss";

interface IPagination {
  pageNo: number;
  setPageNo: React.Dispatch<React.SetStateAction<number>>;
  totalPages?: number;
  size?: "sm" | "lg";
}

// const defaultCoinMax = 1000r

const CoinPagination: React.FC<IPagination> = ({
  pageNo,
  setPageNo,
  totalPages = 200,
  size,
}) => {
  const clickHandler = (item: number) => {
    setPageNo(item);
  };
  const prevItems = (pageNo: number) => {
    const result = [];
    for (let i = 3; i > 0; i--) {
      pageNo - i >= 1 &&
        result.push(
          <Pagination.Item key={i} onClick={() => clickHandler(pageNo - i)}>
            {pageNo - i}
          </Pagination.Item>
        );
    }
    return result;
  };
  const nextItems = (pageNo: number) => {
    let max: number;
    if (pageNo === 1) {
      max = 5;
    } else if (pageNo > 1 && pageNo < 3) {
      max = 4;
    } else {
      max = 3;
    }
    const result = [];
    for (let i = 1; i < max; i++) {
      pageNo + i <= totalPages &&
        result.push(
          <Pagination.Item key={i} onClick={() => clickHandler(pageNo + i)}>
            {pageNo + i}
          </Pagination.Item>
        );
    }
    return result;
  };

  return (
    <div className="pagination">
      <Pagination className="pagination-component" size={size}>
        <Pagination.First
          disabled={pageNo > 1 ? false : true}
          onClick={() => pageNo > 1 && clickHandler(1)}
        />
        <Pagination.Prev
          disabled={pageNo > 1 ? false : true}
          onClick={() => pageNo > 1 && clickHandler(pageNo - 1)}
        />
        {pageNo > 1 && prevItems(pageNo)}
        <Pagination.Item active onClick={() => clickHandler(pageNo)}>
          {pageNo}
        </Pagination.Item>
        {pageNo < totalPages && nextItems(pageNo)}
        <Pagination.Next
          disabled={pageNo < totalPages ? false : true}
          onClick={() => pageNo < totalPages && clickHandler(pageNo + 1)}
        />

        <Pagination.Last
          disabled={pageNo < totalPages ? false : true}
          onClick={() => pageNo < totalPages && clickHandler(totalPages)}
        />
      </Pagination>
    </div>
  );
};

export default CoinPagination;
