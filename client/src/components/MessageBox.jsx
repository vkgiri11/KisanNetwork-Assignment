import { useState } from 'react';
import axios from 'axios';
import { customAlphabet } from 'nanoid';
import { Backdrop, Box, Button, Fade, Grid, Modal, TextField } from '@mui/material';

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
	const nanoid = customAlphabet('1234567890', 6);
	const [text, setText] = useState('Hi. Your OTP is ' + nanoid());
	const isDisabled = text.length > 30;

	const handleClose = () => setOpen(false);

	const handleTextChange = (val) => {
		setText(val);
	};

	const handleSubmit = async () => {
		try {
			await axios.post('/send_otp', {
				to: data.mobile,
				message: text,
				name: data.firstName + ' ' + data.lastName,
			});

			setOpen(false);
		} catch (error) {
			console.log(error);
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
						<TextField
							fullWidth
							multiline
							rows={6}
							label="Enter Your Message"
							value={text}
							onChange={(e) => handleTextChange(e.target.value)}
							error={isDisabled}
							helperText={isDisabled && 'The Length of message should be less than 30'}
						/>
						<Button disabled={isDisabled} onClick={handleSubmit}>
							Send OTP
						</Button>
					</Box>
				</Fade>
			</Modal>
		</>
	);
};

export default MessageBox;
