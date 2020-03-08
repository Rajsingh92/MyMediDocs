const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('./../models/datbase');

const UserSchema = new mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String,
        required: true
    },
    username:{
        type:String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});



const user = module.exoorts=mongoose.model('User',UserSchema);
