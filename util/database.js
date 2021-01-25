const MongoClient = require("mongodb").MongoClient;

let _db;

const url = "mongodb://localhost:27017/shop";
//mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false
//atlas
//mongodb+srv://premnath:password@clustor0-ntrwp.mongodb.net/test?retrywrites=true

const mongoConnect = (callback) => {
  MongoClient.connect(url)
    .then((client) => {
      console.log("connected");
      //_db = client.s.options.dbName
      _db = client.db();
      callback(client);
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No Database Found";
};

module.exports = { mongoConnect, getDb };
