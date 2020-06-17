export interface Action {
    id: number
    stockId: number
    type: string
    quantity: number
    price: number
    fees: number
    date: string
}
