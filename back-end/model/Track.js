const mongoose = require('mongoose');

const trackSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    email:{
        type: String,
        required: true
    },
    order_id:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

const Track = mongoose.Track || mongoose.model('Track', trackSchema);
module.exports = Track;