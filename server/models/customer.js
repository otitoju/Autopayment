const mongoose = require('mongoose');
const email = require('mongoose-type-email')
const customerSchema = new mongoose.Schema({
    surname:{type: String, required: true},
    firstname:{type: String, required: true},
    occupation:{type: String, required:true},
    gender:{type: String, required:true},
    phoneNo:{type: Number, required:true},
    email:{type: email, required:true, unique:true},
    nationality: String,
    state: String,
    lga: String,
    dateOfBirth: Date,
    homeAddress:String,
    dish1:String,
    dish2:String,
    dish3:String,
    password:{type: String, required:true, unique:true}
})
module.exports =mongoose.model('customer', customerSchema);