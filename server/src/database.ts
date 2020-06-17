
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const lodashId = require('lodash-id')
const fs = require('fs');
import { _ } from 'lodash'

const dbDefaults = {
  Accounts: [{
    id: 1,
    name: 'Default Account'
  }],
  Stocks: [],
  Actions: [],
  DividendDates: [],
  Prices: [],
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
    quantity: 10,
    industrySector: 'Software',
    created: new Date().toJSON(),
  }],
  Actions: [{
    id: 1,
    stockId: 1,
    type: 'buy',
    quantity: 5,
    price: 5000,
    fees: 550,
    date: new Date().toJSON(),
  }],
  DividendDates: [],
  Prices: [],
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
    //fs.unlinkSync('db-test.json')
  },

}
