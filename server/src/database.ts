
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const lodashId = require('lodash-id')
const fs = require('fs');
import { _ } from 'lodash'
import dbDefaults from './db-defaults'

export default {
  db: null,

  connectDb(fileName:string): void {
    const adapter = new FileSync(fileName)
    this.db = low(adapter)
    lodashId.createId = collection => _.max(collection.map(item => item.id)) + 1
    this.db._.mixin(lodashId)
  },

  initDb(): void {
    this.connectDb('db.json')
    const dbState = this.db.getState()
    if (_.isEmpty(dbState)) {
      // Set database defaults
      this.db.defaults(dbDefaults.sample).write() // Use sample data for now
    }
  },

  initTestDb(): void {
    this.connectDb('db-test.json')
    // Set test database defaults
    this.db.defaults(dbDefaults.test).write()
  },

  deleteTestDb(): void {
    fs.unlinkSync('db-test.json')
  },

}
