import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import historyRoutes from './routes/history.js';
import sendOtpRoutes from './routes/sendOtp.js';

const app = express();
dotenv.config();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/history', historyRoutes);
app.use('/send_otp', sendOtpRoutes);

app.get('/', (req, res) => {
	res.send('App is Running !!');
});

const PORT = process.env.PORT || 5000;

mongoose
	.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() =>
		app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))
	)
	.catch((error) => console.log(`${error} did not connect`));
