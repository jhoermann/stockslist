interface CreateStockDto {
    name: string
    isin: string
    wkn: string
    quantity: number
    industrySector: string
}

interface UpdateStockDto {
    name: string
    isin: string
    wkn: string
    quantity: number
    industrySector: string
}

export { CreateStockDto, UpdateStockDto }