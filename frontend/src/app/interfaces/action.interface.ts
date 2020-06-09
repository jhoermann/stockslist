export interface Action {
    id: number
    stockId: number
    type: string
    quantity: number
    price: number
    date: Date
}
