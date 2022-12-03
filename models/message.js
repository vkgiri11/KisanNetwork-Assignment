import mongoose from 'mongoose';

const messageSchema = mongoose.Schema(
	{
		Name: {
			type: String,
			max: 30,
		},
		to: {
			type: String,
			max: 15,
		},
		message: {
			type: String,
			max: 160,
		},
	},
	{ timestamps: true }
);

const Message = mongoose.model('Message', messageSchema);

export default Message;
