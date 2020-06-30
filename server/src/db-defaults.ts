export default {
  standart: {
    Accounts: [{
      id: 1,
      name: 'Default Account'
    }],
    Stocks: [],
    Actions: [],
    DividendDates: [],
    Prices: [],
  },
  test: {
    Accounts: [{
      id: 1,
      name: 'Default Account'
    }],
    Stocks: [{
      id: 1,
      accountId: 1,
      name: 'SAP SE',
      isin: 'DE0007164600',
      wkn: '716460',
      industrySector: 'Software',
      created: new Date().toJSON(),
    }],
    Actions: [{
      id: 1,
      stockId: 1,
      type: 'buy',
      quantity: 10,
      price: 6000,
      fees: 550,
      date: new Date().toJSON(),
    }],
    DividendDates: [{
      id: 1,
      stockId: 1,
      dividend: 150,
      date: new Date().toJSON(),
    }],
    Prices: [{
      id: 1,
      stockId: 1,
      price: 5500,
      date: new Date().toJSON(),
    }],
  },  
  sample: {
    Accounts: [{
      id: 1,
      name: 'Default Account'
    }],
    Stocks: [{
      id: 1,
      accountId: 1,
      name: 'SAP SE',
      isin: 'DE0007164600',
      wkn: '716460',
      industrySector: 'Software',
      created: new Date().toJSON(),
    },
    {
      id: 2,
      accountId: 1,
      name: 'Cisco Inc.',
      isin: 'US17275R1023',
      wkn: '878841',
      industrySector: 'Network',
      created: new Date().toJSON(),
    }],
    Actions: [{
      id: 1,
      stockId: 1,
      type: 'buy',
      quantity: 10,
      price: 6000,
      fees: 550,
      date: new Date().toJSON(),
    },
    {
      id: 2,
      stockId: 2,
      type: 'buy',
      quantity: 20,
      price: 4000,
      fees: 550,
      date: new Date().toJSON(),
    }],
    DividendDates: [{
      id: 1,
      stockId: 1,
      dividend: 150,
      date: new Date().toJSON(),
    }],
    Prices: [{
      id: 1,
      stockId: 1,
      price: 5500,
      date: new Date().toJSON(),
    },
    {
      id: 2,
      stockId: 2,
      price: 4500,
      date: new Date().toJSON(),
    }],
  }
}