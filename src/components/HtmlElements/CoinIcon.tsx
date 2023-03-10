import React from "react"

const CoinIcon = ({ src, className }: { src: string; className?: string }) => {
  return (
    <img
      src={src}
      className={`${className ? className : "coinIcon"}`}
      alt="icon"
    />
  )
}

export default CoinIcon
