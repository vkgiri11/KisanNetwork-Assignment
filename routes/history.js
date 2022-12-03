import express from 'express';
import Message from '../models/message.js';

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const history = await Message.find().sort({ createdAt: -1 });
		res.status(200).json({ history });
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
});

export default router;
