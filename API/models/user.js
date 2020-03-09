const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    id: { type: Number, required: true},
    userName: { type: String, required: true},
    info: { type: String, required: true },
    phone: { type: String, required: false },
    lastHeartBit: { type: Date, required: true}
});

module.exports = mongoose.model('User', userSchema);