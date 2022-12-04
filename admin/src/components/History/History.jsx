import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Avatar, Box, Card, CardContent, CircularProgress, Stack, Typography } from '@mui/material';

const History = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);

	const getHistory = async () => {
		setLoading(true);

		try {
			const res = await axios.get('/history');
			setData(res.data.data);
			setLoading(false);
		} catch (error) {
			console.log(error.response);
			setLoading(false);
		}
	};

	useEffect(() => {
		getHistory();
	}, []);

	if (loading) {
		<Box sx={{ display: 'flex' }}>
			<CircularProgress />
		</Box>;
	}

	return (
		<>
			{data.map((element, index) => (
				<Card key={index} style={{ marginTop: '50px' }}>
					<CardContent>
						<Stack direction="row" justifyContent="space-evenly">
							<Avatar sx={{ width: 36, height: 36, bgcolor: '#A020F0' }}>{element.name[0]}</Avatar>
							<Typography>{element.name}</Typography>
							<Typography>{element.to}</Typography>
							<Typography>{element.message}</Typography>
							<Typography>{moment(element.createdAt).format('DD-MM-YYYY HH:mm')}</Typography>
						</Stack>
					</CardContent>
				</Card>
			))}
		</>
	);
};

export default History;
