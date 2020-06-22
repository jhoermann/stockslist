type actionType = 'buy' | 'sell' 

export interface Action {
    id: number
    stockId: number
    type: actionType
    quantity: number
    price: number
    fees: number
    date: string
}
