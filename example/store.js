 module.exports = Store;

function Store(db) {
  if ( !(this instanceof Store) ) return new Store(db);
  this._db = db;
}

// get stuff from db
Store.prototype.find = function(type) {
  return this._db.allDocs({
    include_docs: true,
    startkey: type,
    endkey: type + '\uffff'
  });
};

Store.prototype.feed = function(type) {
  var opts = {
    live: true,
    since: 'now',
    include_docs: true,
    filter: function(doc) {
      return doc.type === type;
    }
  };
  return this._db.changes(opts);
};
