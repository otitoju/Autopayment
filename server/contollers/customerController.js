const bodyPaser = require('body-parser');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config')
const customer = require('../models/customer');


//REGISTER USER
exports.registerUser = async (req, res) => {
    const hashpassword = bcrypt.hashSync(req.body.password)
    let body = req.body;
    if (!body.surname && !body.firstname && !body.occupation && !body.phoneNo && !body.email && !body.gender && 
        !body.nationality && !body.state && !body.lga && !body.homeAddress && !body.dateOfBirth && !body.password) {
        res.json({
            message:`Please fill all required input fields`
        })
    }
    else if (body.surname.length > 20 && body.firstname.length > 20) {
        res.json({
            message:`Surname and Firstname must not be more than 20 characters`
        })
    }
    else if (body.number.length > 12) {
        res.json({
            message:`What kind of number is this, please check and ensure number is not more than 12`
        })
    }
    else if (body.gender > 6) {
        res.json({
            message:`Who are you, gender is must not be more than 6 characters`
        })
    }
    else if (!body.dish1 || !body.dish2 || !body.dish3) {
        res.json({
            message:`Please select one or more of the dish`
        })
    }
    else {
        await customer.create({
            surname:body.surname,
            firstname:body.firstname,
            occupation:body.occupation,
            gender:body.gender,
            phoneNo:body.phoneNo,
            email:body.email,
            nationality: body.nationality,
            state: body.state,
            lga: body.lga,
            dateOfBirth: body.date,
            homeAddress: body.homeAddress,
            dish1:body.dish1,
            dish2:body.dish2,
            dish3:body.dish3,
            password:hashpassword
        })
        const token = jwt.sign({id:customer.id}, config.secret);
        res.json({
            message:`Customer successfully created`
        })
    }
}