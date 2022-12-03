import express from 'express';
import Message from '../models/message.js';
import dotenv from 'dotenv';
import twilio from 'twilio';

const router = express.Router();

dotenv.config();

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

router.post('/', async (req, res) => {
	const { to, message, name } = req.body;

	const phoneNumber = process.env.TWILIO_PHONE_NUMBER;

	try {
		const result = await client.messages.create({ body: message, from: phoneNumber, to: to });
		const sent = await new Message({ message, name, to });
		await sent.save();

		res.status(200).json('Message Sent Sucessfully from Twilio');
	} catch (error) {
		res.status(500).json({ message: error });
	}
});

export default router;
