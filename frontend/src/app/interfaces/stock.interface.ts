import { Price } from './price.interface'
import { DividendDate } from './dividend-date.interface'
import { Action } from './action.interface'

interface Stock {
    id: number
    accountId: number
    name: string
    isin: string
    wkn: string
    industrySector: string
    created: string
    prices: Price[]
    dividendDates: DividendDate[]
    actions: Action[]
}

interface EnhancedStock extends Stock {
    quantity: number
    buyPrice: number
    buyPriceTotal: number
    currentPrice?: number
    total?: number
    winLoss?: number
    winLossPercent: string
    earnedDividends: number
}

export { Stock, EnhancedStock }
