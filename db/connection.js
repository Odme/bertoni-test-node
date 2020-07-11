const  mongoose = require('mongoose');

global.db = global.db ? global.db: mongoose.createConnection('mongodb://localhost:27017/bertoni_test', { useCreateIndex: true });

module.exports = {mongoose};