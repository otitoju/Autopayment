const jwt = require('jsonwebtoken');
const config = require('../config')

const authToken = async (req, res, next) => {
    const token = req.headers['x-access-token']
    if (!token) {
        res.json({
            message:`No token provided`,
            token:null,
        })
    }
    else {
        await jwt.verify(token, config.secret, (err, decoded) => {
            if (err) {
                res.json({
                    message:`Error from server, please try again`
                })
            }
            else{
                req.customerId = decoded.id
                next()
            }
        })
    }
}