import { Container } from '@mui/system';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { setAxiosDefault } from './axiosDefault';

import ContactDetails from './components/ContactDetails';
import ContactsList from './components/ContactsList';
import NavBar from './components/NavBar/NavBar';

function App() {
	setAxiosDefault();
	return (
		<>
			<BrowserRouter>
				<Container maxWidth="xl">
					<NavBar />
					<Routes>
						<Route path="*" element={<Navigate to="/contacts" replace />} />
						<Route path="contacts" element={<ContactsList />} />
						<Route path="contacts/:id" element={<ContactDetails />} />
					</Routes>
				</Container>
			</BrowserRouter>
		</>
	);
}

export default App;
