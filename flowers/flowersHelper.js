const db = require('../data/dbConfig.js');

function find() {
    return db('flowers').select('id', 'name');
}


module.exports = {
    find
}