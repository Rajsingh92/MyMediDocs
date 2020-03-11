const express = require('express');
const managerRoutes = express.Router();

// Require Product model in our routes module
let Doctor = require('../models/Doctor');
let Nurse = require('../models/Nurse');
let MStaff = require('../models/MStaff');
let Rec = require('../models/Rec');

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

// Add MStaff
managerRoutes.route('/addMStaff').post(function (req, res) {
    let mstaff = new MStaff(req.body);
    mstaff.save()
        .then(mstaff => {
            res.status(200).json({ 'mstaff': 'mstaff has been added successfully' });
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
managerRoutes.route('/addRec').post(function (req, res) {
    let rec = new Rec(req.body);
    rec.save()
        .then(rec => {
            res.status(200).json({ 'rec': 'rec has been added successfully' });
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

//get  complaints

module.exports = managerRoutes;