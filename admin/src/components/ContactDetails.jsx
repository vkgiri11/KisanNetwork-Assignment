import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Avatar, Button, Card, CardContent, Stack, Typography } from '@mui/material';

import sample from '../data.json';
import MessageBox from './MessageBox';

const ContactDetails = () => {
	const [openMessageBox, setOpenMessageBox] = useState(false);
	const { id } = useParams();

	const userData = sample.data.filter((el) => el.guid === id)[0];

	return (
		<>
			<Stack direction="column" justifyContent="center" alignItems="center" mt={7}>
				<Card>
					<CardContent>
						<Stack direction="row" justifyContent="center" alignItems="center">
							<Avatar alt="person_profile" sx={{ width: 76, height: 76, bgcolor: '#FFA500' }}>
								{userData.firstName[0]}
							</Avatar>
							<div style={{ marginLeft: '52px' }}>
								<Typography fontWeight="bold">Name</Typography>
								<Typography>
									{userData.firstName} {userData.lastName}
								</Typography>
								<Typography fontWeight="bold" mt={4}>
									Mobile Number
								</Typography>
								<Typography>{userData.mobile}</Typography>
							</div>
						</Stack>
					</CardContent>
					<Button
						fullWidth
						variant="contained"
						sx={{ marginTop: '25px' }}
						onClick={() => setOpenMessageBox(true)}>
						Compose Message
					</Button>
				</Card>
				<MessageBox open={openMessageBox} setOpen={setOpenMessageBox} data={userData} />
			</Stack>
		</>
	);
};

export default ContactDetails;
