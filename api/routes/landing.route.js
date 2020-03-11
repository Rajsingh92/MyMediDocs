const express = require('express');
const landingRoutes = express.Router();

let Complain = require('../models/Complain');



// Add  Complaint
managerRoutes.route('/complain').post(function (req, res) {
        var d = new Date();
		var y = d.getFullYear();
		var m = d.getMonth() + 1;
        var date = d.getDate();
        
		var today = y + "-" + m + "-" + date;
        var id = (new Date()).getTime().toString(36) + Math.random().toString(36).slice(2);


        let complain = new Complain();
        complain.id = id;
        complain.dof = today;
        complain.name = req.body.name;
        complain.type = req.body.type;
        complain.desc = req.body.desc;
        
    complain.save()
        .then(complain => {
            res.status(200).json({ 'complain': 'complain has been added successfully' });
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});


module.exports = landingRoutes;