import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import sample from '../data.json';

const ContactsList = () => {
	const navigate = useNavigate();

	const handleClick = (id) => navigate(`/contacts/${id}`);
  
	return (
		<>
			{sample.data.map((element, index) => (
				<Card
					onClick={() => handleClick(element.guid)}
					key={element.guid}
					sx={{ width: '275px', marginBottom: '15px', cursor: 'pointer' }}>
					<CardContent>
						<Typography>
							{element.firstName} {element.lastName}
						</Typography>
					</CardContent>
				</Card>
			))}
		</>
	);
};

export default ContactsList;
