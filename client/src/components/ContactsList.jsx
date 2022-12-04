import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Paper,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow,
	Typography,
} from '@mui/material';

import sample from '../data.json';

const ContactsList = () => {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const navigate = useNavigate();

	const handleChangePage = (event, newPage) => setPage(newPage);

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const handleClick = (id) => navigate(`/contacts/${id}`);

	return (
		<>
			<Stack direction="column" justifyContent="space-between" mt={7}>
				<TableContainer component={Paper}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>
									<Typography fontWeight="bold">S. No.</Typography>
								</TableCell>
								<TableCell align="center">
									<Typography fontWeight="bold">First Name</Typography>
								</TableCell>
								<TableCell align="center">
									<Typography fontWeight="bold">Last Name</Typography>
								</TableCell>
								<TableCell align="center">
									<Typography fontWeight="bold">Mobile</Typography>
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{sample.data
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((element, index) => (
									<TableRow
										key={element.guid}
										onClick={() => handleClick(element.guid)}
										style={{ cursor: 'pointer' }}>
										<TableCell>{index + 1}</TableCell>
										<TableCell align="center">{element.firstName}</TableCell>
										<TableCell align="center">{element.lastName}</TableCell>
										<TableCell align="center">{element.mobile}</TableCell>
									</TableRow>
								))}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
					component="div"
					count={sample.data.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</Stack>
		</>
	);
};

export default ContactsList;
