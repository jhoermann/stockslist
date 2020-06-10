
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const fs = require('fs');
import { _ } from 'lodash'

export default {
  db: null,

  connectDb(): void {
    const adapter = new FileSync('db.json')
    this.db = low(adapter)
  },

  connectTestDb(): void {
    const adapter = new FileSync('db-test.json')
    this.db = low(adapter)
  },

  deleteTestDb(): void {
    fs.unlinkSync('file.txt')
  },

  initDb(): void {
    const dbState = this.db.getState()
    if (_.isEmpty(dbState)) {
      // Set database defaults
      this.db.defaults({
        Accounts: [{
          id: 1,
          name: 'Default Account'
        }],
        Stocks: [],
        Actions: [],
        DividendDates: [],
        Prices: [],
      }).write()
    }
  }

}
