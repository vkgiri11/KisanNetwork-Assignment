import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, CardContent } from '@mui/material';

import sample from '../data.json';
import MessageBox from './MessageBox';

const ContactDetails = () => {
	const [openMessageBox, setOpenMessageBox] = useState(false);
	const { id } = useParams();
	const navigate = useNavigate();

	const userData = sample.data.filter((el) => el.guid === id)[0];

	const handleBack = () => navigate('/contacts');

	return (
		<>
			<Button onClick={handleBack}>Go Back</Button>
			<Card>
				<CardContent>
					{userData.firstName}
					{userData.lastName}
					{userData.mobile}
				</CardContent>
				<Button onClick={() => setOpenMessageBox(true)}>Compose Message</Button>
			</Card>
			<MessageBox open={openMessageBox} setOpen={setOpenMessageBox} data={userData} />
		</>
	);
};

export default ContactDetails;
