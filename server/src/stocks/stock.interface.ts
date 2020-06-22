import { Price } from './prices/price.interface'
import { DividendDate } from './dividend-dates/dividend-date.interface'
import { Action } from './actions/action.interface'

export interface Stock {
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
