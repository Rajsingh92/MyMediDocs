require('./config/config');
require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const rtsIndex = require('./routes/index.router');
const employeeRoute = require('./routes/employee.route');
const managerRoute = require('./routes/manager.route');
const doctorsRoute = require('./routes/doctors.route');
//const landingRoute = require('./routes/landing.route');
const mastaffRoute = require('./routes/mstaff.route');
const nurseRoute = require('./routes/nurse.route');
const receptionistRoute = require('./routes/receptionist.route');

var app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api', rtsIndex);
app.use('/employees', employeeRoute);
app.use('/manager', managerRoute);
// app.use('/doctors', doctorsRoute);
//app.use('/landing', landingRoute);
// app.use('/mstaff', mastaffRoute);
// app.use('/nurse', nurseRoute);
// app.use('/rec', receptionistRoute);

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
    else{
        console.log(err);
    }
});

// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));