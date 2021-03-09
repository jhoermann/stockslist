import {Stock, EnhancedStock} from './../interfaces/stock.interface'
import {Action} from './../interfaces/action.interface'

export class StockHelper {
  private stock: EnhancedStock

  constructor(stock) {
    this.stock = stock
  }

  enhanceStock(): EnhancedStock {
    this.stock.quantity = this.getCurrentQuantity(this.stock.actions)
    this.stock.buyPrice = this.calculateBuyPrice()
    this.stock.buyPriceTotal = (this.stock.buyPrice * this.stock.quantity)
    this.stock.currentPrice = this.stock.prices[this.stock.prices.length -1]?.price
    this.stock.total = this.stock.currentPrice * this.stock.quantity
    this.stock.winLoss = this.stock.total - this.stock.buyPriceTotal
    this.stock.winLossPercent = this.winLossInPercent()
    this.stock.earnedDividends = this.calculateEarnedDividends()
    return this.stock
  }

  getCurrentQuantity(actions: Action[]): number {
    return actions
      .map(action => {
        if (action.type === 'sell') {
          return -1 * action.quantity
        }
        return action.quantity
      })
      .reduce((quantityA, quantityB) => quantityA + quantityB, 0)
  }

  calculateBuyPrice(): number {
    const currentQuantity: number = this.stock.quantity
    return this.stock.actions
      .map(action => {
        const weightedPrice: number = (action.quantity / currentQuantity) * action.price
        const feesPerPiece: number = action.fees / action.quantity
        return weightedPrice + feesPerPiece
      })
      .reduce((priceA, priceB) => priceA + priceB, 0)
  }

  winLossInPercent(): string {
    if(isNaN(this.stock.currentPrice)) {
      return 'N/A'
    }
    const winLossPercent: number = ((this.stock.currentPrice / this.stock.buyPrice) - 1) * 100
    return `${winLossPercent.toFixed(2)}%`
  }

  calculateEarnedDividends(): number {
    return this.stock.dividendDates
      .map(dividendDate => {
        // Remove actions after dividend date
        const dividendActions: Action[] = this.stock.actions
          .filter(action => Date.parse(action.date) < Date.parse(dividendDate.date))
        // Get quantity until dividend date and multiplicate with dividend
        return this.getCurrentQuantity(dividendActions) * dividendDate.dividend
      })
      .reduce((dividendA, dividendB) => dividendA + dividendB, 0)
  }

}
