import axios from 'axios';
import { setAxiosDefault } from './axiosDefault';

function App() {
	setAxiosDefault();

	const handleSubmit = async () => {
		try {
			await axios.post('/send_otp', {
				to: '+917905058598',
				message: 'OTP successfully generated',
				name: 'Vivek',
			});
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<button onClick={handleSubmit}>Send Otp</button>
		</>
	);
}

export default App;
