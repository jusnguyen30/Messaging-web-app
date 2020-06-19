import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    timeSent: {
        type: Date,
        required: true
    },
    senderID: {
        type: Number,
        required: true
    }
});

const Message = mongoose.model('Message', messageSchema);

export default Message;