import { formatCurrency } from "@coingecko/cryptoformat"

export const priceFormat = (price: number, currency: string) => {
  return formatCurrency(price, currency, "en", false, {
    significantFigures: 2,
  })
}

export const numberFormat = (price: number) => {
  return price.toLocaleString()
}
