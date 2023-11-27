import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function Tool3() {
	return (
		<Box
			sx={{
				bgcolor: "background.paper",
				pt: 3,
				pb: 1,
			}}
		>
			<Container>
				<Box>
					<h2>Tool Comparison</h2>
					<p>
						These are subjective reviews from our experts who designed the tests
						of the tutorial. How easy is it to use? Does the tests cover the
						entire application? Does it impact my system when I test? Do the
						tests.. well test the application correctly? We ranked scores for
						each tool based off these questions and our experience programming
						the tests!
						<br />
						<br />
						The following chart shows the comparison between the two tools with
						a score between 1 to 5 (worst to best).
						<br />
						<br />
					</p>
				</Box>
				<Box>
					{" "}
					<TableContainer component={Paper}>
						<Table sx={{ minWidth: 650 }} aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell></TableCell>
									<TableCell align="right">
										<b>Ease of Use</b>
									</TableCell>
									<TableCell align="right">
										<b>Functionality & Flexibility</b>
									</TableCell>
									<TableCell align="right">
										<b>Performance</b>
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<TableRow>
									<TableCell>
										<b>Cypress.io</b>
									</TableCell>
									<TableCell align="right">4</TableCell>
									<TableCell align="right">5</TableCell>
									<TableCell align="right">5</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										<b>Jest</b>
									</TableCell>
									<TableCell align="right">5</TableCell>
									<TableCell align="right">4</TableCell>
									<TableCell align="right">4</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
				</Box>
			</Container>
		</Box>
	);
}
