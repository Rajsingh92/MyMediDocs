const express = require('express');
const managerRoutes = express.Router();


let Doctor = require('../models/Doctor');
let Nurse = require('../models/Nurse');
let MStaff = require('../models/MStaff');
let Rec = require('../models/Rec');
let Complain = require('../models/Complain');

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
managerRoutes.route('/getComplaints').get(function (req, res) {
    Complain.find(function (err, complaints){
      if(err){
        console.log(err);
      }
      else {
        res.json(complaints);
      }
    });
  });

//get  doctors
managerRoutes.route('/getDoctors').get(function (req, res) {
    Doctor.find(function (err, doctors){
      if(err){
        console.log(err);
      }
      else {
        res.json(doctors);
      }
    });
  });

  //get  mstaff
  managerRoutes.route('/getMStaff').get(function (req, res) {
    MStaff.find(function (err, mstaff){
      if(err){
        console.log(err);
      }
      else {
        res.json(mstaff);
      }
    });
  });


  //get  nurse
  managerRoutes.route('/getNurse').get(function (req, res) {
    Nurse.find(function (err, nurse){
      if(err){
        console.log(err);
      }
      else {
        res.json(nurse);
      }
    });
  });

  //get  rec
  managerRoutes.route('/getRec').get(function (req, res) {
    Rec.find(function (err, rec){
      if(err){
        console.log(err);
      }
      else {
        res.json(rec);
      }
    });
  });

// delete Doctor
managerRoutes.route('/deleteDoctor/:id').get(function (req, res) {
  Doctor.findByIdAndRemove({_id: req.params.id}, function(err, doctor){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

//delete mstaff
managerRoutes.route('/deleteMstaff/:id').get(function (req, res) {
  MStaff.findByIdAndRemove({_id: req.params.id}, function(err, mstaff){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

//delete nurse
managerRoutes.route('/deleteNurse/:id').get(function (req, res) {
  Nurse.findByIdAndRemove({_id: req.params.id}, function(err, nurse){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

//delete rec
managerRoutes.route('/deleteRec/:id').get(function (req, res) {
  Rec.findByIdAndRemove({_id: req.params.id}, function(err, rec){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

//edit Doctor
managerRoutes.route('/editDoctor/:id').get(function (req, res) {
  let id = req.params.id;
  Doctor.findById(id, function (err, doctor){
      res.json(doctor);
  });
});

//edit mstaff
managerRoutes.route('/editMStaff/:id').get(function (req, res) {
  let id = req.params.id;
  MStaff.findById(id, function (err, mstaff){
      res.json(mstaff);
  });
});

//edit nurse
managerRoutes.route('/editNurse/:id').get(function (req, res) {
  let id = req.params.id;
  Nurse.findById(id, function (err, nurse){
      res.json(nurse);
  });
});

//edit rec
managerRoutes.route('/editRec/:id').get(function (req, res) {
  let id = req.params.id;
  Rec.findById(id, function (err, rec){
      res.json(rec);
  });
});

//update doctor
managerRoutes.route('/updateDoctor/:id').post(function (req, res) {
  Doctor.findById(req.params.id, function(err, doctor) {
    if (!doctor)
      res.status(404).send("Record not found");
    else {
      doctor.Name = req.body.Name;
      doctor.Qualification = req.body.Qualification;
      doctor.Type = req.body.Type;
      doctor.PrevExperience = req.body.PrevExperience;
      doctor.Salary = req.body.Salary;
      doctor.Address = req.body.Address;
      doctor.City = req.body.City;
      doctor.State = req.body.State;
      doctor.Email = req.body.Email;
      doctor.AlternateEmail = req.body.AlternateEmail;
      doctor.Contact = req.body.Contact;
      doctor.AlternateContact = req.body.AlternateContact;
      doctor.Gender = req.body.Gender;


      doctor.save().then(doctor => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

//update nurse
managerRoutes.route('/updateNurse/:id').post(function (req, res) {
  Nurse.findById(req.params.id, function(err, nurse) {
    if (!nurse)
      res.status(404).send("Record not found");
    else {
      nurse.Name = req.body.Name;
      nurse.Qualification = req.body.Qualification;
      nurse.PrevExperience = req.body.PrevExperience;
      nurse.Salary = req.body.Salary;
      nurse.Email = req.body.Email;
      nurse.AlternateEmail = req.body.AlternateEmail;
      nurse.Contact = req.body.Contact;
      nurse.AlternateContact = req.body.AlternateContact;
      nurse.Address = req.body.Address;
      nurse.City = req.body.City;
      nurse.State = req.body.State;
      nurse.Gender = req.body.Gender;


      nurse.save().then(nurse => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

///update mstaff
managerRoutes.route('/updateMStaff/:id').post(function (req, res) {
  MStaff.findById(req.params.id, function(err, mstaff) {
    if (!mstaff)
      res.status(404).send("Record not found");
    else {
      mstaff.Name = req.body.Name;
      mstaff.Salary = req.body.Salary;
      mstaff.Email = req.body.Email;
      mstaff.AlternateEmail = req.body.AlternateEmail;
      mstaff.Contact = req.body.Contact;
      mstaff.AlternateContact = req.body.AlternateContact;
      mstaff.Address = req.body.Address;
      mstaff.City = req.body.City;
      mstaff.State = req.body.State;
      mstaff.Gender = req.body.Gender;


      mstaff.save().then(mstaff => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

//update rec 
managerRoutes.route('/updateRec/:id').post(function (req, res) {
  Rec.findById(req.params.id, function(err, rec) {
    if (!rec)
      res.status(404).send("Record not found");
    else {
      rec.Name = req.body.Name;
      rec.Qualification = req.body.Qualification;
      rec.PrevExperience = req.body.PrevExperience;
      rec.Salary = req.body.Salary;
      rec.Email = req.body.Email;
      rec.AlternateEmail = req.body.AlternateEmail;
      rec.Contact = req.body.Contact;
      rec.AlternateContact = req.body.AlternateContact;
      rec.Address = req.body.Address;
      rec.City = req.body.City;
      rec.State = req.body.State;
      rec.Gender = req.body.Gender;


      rec.save().then(rec => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});




//settings

//stats

module.exports = managerRoutes;