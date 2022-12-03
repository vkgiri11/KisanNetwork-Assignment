import express from 'express';
import Message from '../models/message.js';
import dotenv from 'dotenv';
import twilio from 'twilio';

const router = express.Router();

dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

router.post('/', async (req, res) => {
	const phoneNumber = process.env.TWILIO_PHONE_NUMBER;
	const to = await req.body.to;
	const messageBody = await req.body.message;
	const name = await req.body.Name;

	try {
		const result = await client.messages.create({ body: messageBody, from: phoneNumber, to: to });
		const sent = await new Message({ message: messageBody, Name: name, to: to });
		await sent.save();

		res.status(200).json('Message Sent Sucessfully from Twilio');
	} catch (e) {
		const errorMessage = `Something seems fishy, please try again, here is error :- ${e}`;
		res.status(500).json({ message: errorMessage });
	}
});

export default router;
