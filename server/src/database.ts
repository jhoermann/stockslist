
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

export default {
  db: null,

  connectDb(): void {
    const adapter = new FileSync('db.json')
    this.db = low(adapter)
  },

  initDb(): void {
    // Set database defaults
    this.db.defaults({
      Accounts: [],
      Stocks: [],
      Actions: [],
      DividendDates: [],
    }).write()
     
    /*// Add a post
    db.get('posts')
      .push({ id: 1, title: 'lowdb is awesome'})
      .write()
     
    // Set a user using Lodash shorthand syntax
    db.set('user.name', 'typicode')
      .write()

    // Use .value() instead of .write() if you're only reading from db
    const post = db.get('posts')
      .find({ id: 1 })
      .value()*/
  }
}
