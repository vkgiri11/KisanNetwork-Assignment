import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableFooter,
	TableHead,
	TablePagination,
	TableRow,
} from '@mui/material';

import sample from '../data.json';

const ContactsList = () => {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const navigate = useNavigate();

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const handleClick = (id) => navigate(`/contacts/${id}`);

	return (
		<>
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableCell>First Name</TableCell>
						<TableCell>Last Name</TableCell>
						<TableCell>Mobile Number</TableCell>
					</TableHead>
					<TableBody>
						{sample.data.map((element) => (
							<TableRow key={element.guid}>
								<TableCell scope="row">{element.firstName}</TableCell>
								<TableCell>{element.lastName}</TableCell>
								<TableCell>{element.mobile}</TableCell>
							</TableRow>
						))}
					</TableBody>
					<TableFooter>
						<TableRow>
							<TablePagination
								rowsPerPageOptions={[5, 10, 25]}
								count={sample.data.length}
								rowsPerPage={rowsPerPage}
								page={page}
								onPageChange={handleChangePage}
								onRowsPerPageChange={handleChangeRowsPerPage}
							/>
						</TableRow>
					</TableFooter>
				</Table>
			</TableContainer>
		</>
	);
};

export default ContactsList;
