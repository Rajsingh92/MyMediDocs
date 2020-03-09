

const express = require('express');
const managerRoutes = express.Router();

// Require Product model in our routes module
let Doctor = require('../models/Doctor');
let Nurse = require('../models/Nurse');

// Add  Doctor
managerRoutes.route('/addDoctor').post(function (req, res) {
    let doctor = new Doctor(req.body);
    doctor.save()
        .then(doctor => {
            res.status(200).json({ 'Doctor': 'Doctor has been added successfully' });
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

// Add Nurse
managerRoutes.route('/addNurse').post(function (req, res) {
    let nurse = new Nurse(req.body);
    nurse.save()
        .then(nurse => {
            res.status(200).json({ 'Nurse': 'Nurse has been added successfully' });
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});



//Add Rec


module.exports = employeeRoutes;