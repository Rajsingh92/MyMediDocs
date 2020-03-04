const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let ConfigureAppointment = new Schema({
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
    collection: 'ConfigureAppointment'
});

module.exports = mongoose.model('ConfigureAppointment', ConfigureAppointment);