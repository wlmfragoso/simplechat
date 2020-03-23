const mongoose = require('mongoose');
const { Schema } = mongoose;

const sessionSchema = new Schema({
    // _id: { type: String, required: true},
    id: { type: String, required: false},
    userName: { type: String, required: true},
    info: { type: String, required: true },
    phone: { type: String, required: false },
    lastHeartBit: { type: Date, required: true}
});

module.exports = mongoose.model('User', sessionSchema);