const CoinIcon = ({ src, className }: { src: string; className?: string }) => {
  return (
    <img
      src={src}
      className={`${className ? className : "coinIcon"}`}
      alt="iconyrn"
    />
  );
};

export default CoinIcon;
