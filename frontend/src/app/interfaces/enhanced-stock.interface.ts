import { Stock } from './stock.interface'
import { Price } from './price.interface'
import { DividendDate } from './dividend-date.interface'
import { Action } from './action.interface'

export interface EnhancedStock extends Stock {
    prices: Price[]
    dividendDates: DividendDate[]
    actions: Action[]
    buyPrice: number
    currentPrice: number
    winLoss: number
    winLossPercent: number
    earnedDividends: number
}