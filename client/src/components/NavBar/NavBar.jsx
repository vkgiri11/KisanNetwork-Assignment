import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material';

const NavBar = () => {
	const navigate = useNavigate();

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
					<Toolbar>
						<IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
							KISAN NETWORK
						</IconButton>
						<Button color="inherit" sx={{ flexGrow: 1 }} onClick={() => navigate('/contacts')}>
							Contacts List
						</Button>
						<Button color="inherit" sx={{ flexGrow: 1 }} onClick={() => navigate('/history')}>
							History
						</Button>
					</Toolbar>
				</AppBar>
			</Box>
		</>
	);
};

export default NavBar;
