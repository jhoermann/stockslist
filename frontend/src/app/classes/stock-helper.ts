import {Stock, EnhancedStock} from './../interfaces/stock.interface'

export class StockHelper {
  private stock: EnhancedStock

  constructor(stock) {
    this.stock = stock
  }

  enhanceStock(): EnhancedStock {
    this.stock.quantity = this.getCurrentQuantity()
    this.stock.buyPrice = this.calculateBuyPrice()
    this.stock.buyPriceTotal = this.stock.buyPrice * this.stock.quantity
    this.stock.currentPrice = this.stock.prices[this.stock.prices.length -1].price
    this.stock.total = this.stock.currentPrice * this.stock.quantity
    this.stock.winLoss = this.stock.total - this.stock.buyPriceTotal
    this.stock.winLossPercent = this.winLossInPercent()
    this.stock.earnedDividends = this.calculateEarnedDividends()
    return this.stock
  }

  getCurrentQuantity(): number {
    return 10 // Sample value for now
  }

  calculateBuyPrice(): number {
    return 5000 // Sample value for now
  }

  winLossInPercent(): string {
    const winLossPercent = (this.stock.winLoss / this.stock.total) * 100
    return `${winLossPercent.toFixed(2)} %`
  }

  calculateEarnedDividends(): number {
    return 600 // Sample value for now
  }

}
