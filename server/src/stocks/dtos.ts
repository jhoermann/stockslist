interface CreateStockDto {
    accountId: number,
    name: string
    isin: string
    wkn: string
    quantity: number
    industrySector: string
}

interface UpdateStockDto {
    accountId: number,
    name: string
    isin: string
    wkn: string
    quantity: number
    industrySector: string
}

export { CreateStockDto, UpdateStockDto }