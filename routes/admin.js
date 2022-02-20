const jwt = require('jsonwebtoken');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const { User } = require('../models/User');
const express = require('express');
const router = express.Router();

// use like this
router.post("/login", admin_controller.login)

router.post('/login', async (req, res) => {
    // First Validate The HTTP Request
//     es part ko alag file m likho
//     const { error } = validate(req.body);
//     if (error) {
//         return res.status(400).send(error.details[0].message);
//     }

//     //  Now find the user by their email address
//     let user = await User.findOne({ email: req.body.email });
//     if (!user) {
//         return res.status(400).send('Incorrect email or password.');
//     }

//     // Then validate the Credentials in MongoDB match
//     // those provided in the request
//     const validPassword = await bcrypt.compare(req.body.password, user.password);
//     if (!validPassword) {
//         return res.status(400).send('Incorrect email or password.');
//     }
//     const token = jwt.sign({ _id: user._id }, 'PrivateKey');
//     res.send(token);
});

const validate = (req) => {
//     esko bi alag file m
    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    };

    return Joi.validate(req, schema);
}

module.exports = router;  
 
 
