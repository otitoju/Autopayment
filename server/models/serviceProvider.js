const mongoose = require('mongoose');
const satellite = new mongoose.Schema({
    nameOfProvider:{type: String, required:true, unique:true},
    address: String,
    contact: Number
});
module.exports = mongoose.model('satellite', satellite);