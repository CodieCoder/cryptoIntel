import React from "react"
import EachNewsPlaceholder from "./EachNewsPlaceholder"

interface INewsPlaceholder {
  count: number
}
const NewsPlaceholder: React.FC<INewsPlaceholder> = ({ count }) => {
  const render = () => {
    const result: React.ReactNode[] = []
    for (let i = 0; i <= count; i++) {
      result.push(<EachNewsPlaceholder key={i} />)
    }
    return result
  }

  return <div className="NewsPlaceholder">{render()}</div>
}

export default NewsPlaceholder
