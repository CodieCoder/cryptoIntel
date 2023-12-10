export const CurrencyDetails = [
  {
    title: "USD",
    name: "United States Dollar",
    alt: "USDT",
    symbol: "$",
  },
  {
    title: "EUR",
    name: "Euro",
    alt: "EUR",
    symbol: "€",
  },
  {
    title: "GBP",
    name: "Great British Pound",
    alt: "GBP",
    symbol: "£",
  },
];

export const getCurrencyDetails = (value: string) => {
  const details = CurrencyDetails.find(
    (currency: any) =>
      currency.title.toLowerCase() === value ||
      currency.name === value.toLowerCase()
  );
  return details || CurrencyDetails[0];
};
