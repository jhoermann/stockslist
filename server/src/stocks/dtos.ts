interface CreateStockDto {
    accountId: number,
    name: string
    isin: string
    wkn: string
    industrySector: string
}

interface UpdateStockDto {
    accountId: number,
    name: string
    isin: string
    wkn: string
    industrySector: string
}

export { CreateStockDto, UpdateStockDto }