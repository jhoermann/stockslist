
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const lodashId = require('lodash-id')
const fs = require('fs');
import { _ } from 'lodash'

/* const dbDefaults = {
  Accounts: [{
    id: 1,
    name: 'Default Account'
  }],
  Stocks: [],
  Actions: [],
  DividendDates: [],
  Prices: [],
} */

// Use sample data for now
const dbDefaults = {
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

const dbTestDefaults = {
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
}

export default {
  db: null,

  connectDb(fileName:string): void {
    const adapter = new FileSync(fileName)
    this.db = low(adapter)
    lodashId.createId = collection => Math.max(collection.map(item => item.id)) + 1
    this.db._.mixin(lodashId)
  },

  initDb(): void {
    this.connectDb('db.json')
    const dbState = this.db.getState()
    if (_.isEmpty(dbState)) {
      // Set database defaults
      this.db.defaults(dbDefaults).write()
    }
  },

  initTestDb(): void {
    this.connectDb('db-test.json')
    // Set test database defaults
    this.db.defaults(dbTestDefaults).write()
  },

  deleteTestDb(): void {
    fs.unlinkSync('db-test.json')
  },

}
