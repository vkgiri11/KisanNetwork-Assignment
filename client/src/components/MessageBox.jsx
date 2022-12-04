import { useState } from 'react';
import axios from 'axios';
import { customAlphabet } from 'nanoid';
import { Backdrop, Box, Button, Fade, Modal, TextField, Typography } from '@mui/material';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '30%',
	borderRadius: '15px',
	bgcolor: 'background.paper',
	boxShadow: 24,
	p: 4,
};

const MessageBox = ({ open, setOpen, data }) => {
	const [btnText, setBtnText] = useState('Send OTP');

	const nanoid = customAlphabet('1234567890', 6);
	const text = 'Hi. Your OTP is ' + nanoid();

	const isDisabled = text.length > 30;

	const handleClose = () => setOpen(false);

	const handleSubmit = async () => {
		try {
			setBtnText('Sending OTP...');

			await axios.post('/send_otp', {
				to: data.mobile,
				message: text,
				name: data.firstName + ' ' + data.lastName,
			});

			setBtnText('OTP Sent Successfully !!');

			setTimeout(() => {
				setOpen(false);
			}, 1000);
		} catch (error) {
			setBtnText("Can't Send OTP");
			console.log(error.response.data.message);
		}
	};

	return (
		<>
			<Modal
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				<Fade in={open}>
					<Box sx={style}>
						<Typography style={{ marginBottom: '25px' }}>
							The following message will be sent to{' '}
							<span style={{ fontWeight: 'bold' }}>
								{data.firstName} {data.lastName}
							</span>
						</Typography>
						<Typography>{text}</Typography>
						<Button
							variant="contained"
							sx={{ marginTop: '25px' }}
							disabled={isDisabled}
							onClick={handleSubmit}>
							{btnText}
						</Button>
					</Box>
				</Fade>
			</Modal>
		</>
	);
};

export default MessageBox;
