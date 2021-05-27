const sqlite3 = require("sqlite3").verbose();
const create = () => {
    let db = new sqlite3.Database("./test-db.sqlite");
    db.close();
}

module.exports = {
    create
}