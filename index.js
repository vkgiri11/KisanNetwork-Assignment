import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

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

app.use(express.static('admin/dist'));
app.get('*', function (req, res) {
	res.sendFile(path.resolve('admin', 'dist', 'index.html'));
});

const PORT = process.env.PORT || 5000;

mongoose
	.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() =>
		app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))
	)
	.catch((error) => console.log(`${error} did not connect`));
