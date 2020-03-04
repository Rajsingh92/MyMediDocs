const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Appointment = new Schema({
    SpecializationType: {
        type: String
    },
    DoctorName: {
        type: String
    },
    EventType: {
        type: String
    },
    AppointmentDuration: {
        type: String
    },
    StartDate: {
        type: String
    },
    EndDate: {
        type: String
    },
    StartTime: {
        type: String
    },
    EndTime: {
        type: String
    }
}, {
    collection: 'Appointment'
});

module.exports = mongoose.model('Appointment', Appointment);