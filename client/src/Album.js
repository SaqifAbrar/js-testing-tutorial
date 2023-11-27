import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import GitHubIcon from "@mui/icons-material/GitHub";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
//	import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Tool1 from "./Tool1";
import Tool2 from "./Tool2";
import Tool3 from "./Tool3";

const cards = ["Cypress.js", "Jest", "Comparison"];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

function ProjectDetailsUnit() {
	return (
		<Box
			sx={{
				bgcolor: "background.paper",
				pt: 3,
				pb: 1,
			}}
		>
			<Container maxWidth="sm">
				<Typography
					component="p"
					variant="h7"
					align="center"
					color="text.primary"
					gutterBottom
				>
					This website has various elements of interaction. You'll find that
					there will be tests on the actual website itself. Below, you'll see a
					3 cards for each JavaScript tool and a standard sign-in page commonly
					found on social media and e-commerce websites. Click to discover each
					tool and how they test different types of testing methods to learn
					more.
					<br />
					<br />
					The project consists of the frontend (client) and the backend
					(server). The client is a react development folder with all the basic
					components of the frontend. It is compiled into a static servable
					website through the node.js server.
					<br />
					<br />
					The frontend. The React.js frontend (found in /client) consists of
					App.js, Album.js and SignIn.js. App.js - Contains all the components
					of this website. Album.js - Contains all the tutorial information and
					testing instructions/results for this module. SignIn.js - Contains the
					practical use case code for testing (note that Album.js is also used
					for testing as well).
					<br />
					<br />
					The backend. The Node.js backend (found in /server) consists of
					____.js, ___.js, ___.js. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Labore magni itaque quae perferendis? Enim,
					laboriosam officiis aperiam atque, non dicta vero quisquam qui impedit
					labore eaque. Ratione aut adipisci sed.
				</Typography>
			</Container>
		</Box>
	);
}

function SetUpDetailsUnit() {
	return (
		<Box
			sx={{
				bgcolor: "background.paper",
				pt: 3,
				pb: 6,
			}}
		>
			<Container maxWidth="sm">
				<Typography
					component="p"
					variant="h7"
					align="center"
					color="text.primary"
					gutterBottom
				>
					1. Install Node.js
					<br />
					<br />
					2. Install React.js
					<br />
					<br />
					3. commit sepuku because you have commited war crimes so you must
					attone for your sins and protect your honour.
					<br />
					<br />
					4. Run `npm install`
				</Typography>
			</Container>
		</Box>
	);
}

function StartUnit() {
	const [startMessage, setStartMessage] = useState("");

	return (
		<Box
			sx={{
				bgcolor: "background.paper",
				pt: 3,
				pb: 6,
			}}
		>
			<Container maxWidth="md">
				<Stack
					sx={{ pt: 1 }}
					direction="row"
					spacing={3}
					justifyContent="center"
				>
					<Button
						variant={startMessage === "project" ? `contained` : `outlined`}
						onClick={() => setStartMessage("project")}
					>
						Project Details
					</Button>
					<Button
						variant={startMessage === "set-up" ? `contained` : `outlined`}
						onClick={() => setStartMessage("set-up")}
					>
						Prerequisite Set-Up
					</Button>
					<Button
						href="https://github.com/SaqifAbrar/js-testing-tutorial"
						target="_blank"
						variant="outlined"
						startIcon={<GitHubIcon />}
						style={{
							backgroundColor: "black",
							color: "white",
						}}
						hoverStyle={{ backgroundColor: "white", color: "black" }}
					>
						Project Repository
					</Button>
				</Stack>
				<Container>
					{startMessage === "project" && <ProjectDetailsUnit />}
					{startMessage === "set-up" && <SetUpDetailsUnit />}
				</Container>
			</Container>
		</Box>
	);
}

function HeroUnit() {
	return (
		<Box
			sx={{
				bgcolor: "background.paper",
				pt: 8,
			}}
		>
			<Container maxWidth="sm">
				<Typography
					component="h1"
					variant="h2"
					align="center"
					color="text.primary"
					gutterBottom
				>
					JavaScript Testing Tools Module
				</Typography>
				<Typography
					component="h4"
					variant="h5"
					align="center"
					color="text.primary"
					gutterBottom
				>
					Use this website to learn, discover, test and compare JavaScript
					testing libraries!
				</Typography>
				<Typography
					variant="h7"
					align="center"
					color="text.secondary"
					paragraph
				>
					Did you know that among 1.8 billion websites in the world, 98% of them
					use JavaScript? JavaScript is a powerful scripting language use in
					many applications in the world of tech. This is why having an arsenal
					of testing tools becomes crucial to build high quality and reliable
					apps and products!
				</Typography>
			</Container>
		</Box>
	);
}

function ToolCards({ setTool }) {
	return (
		<Box>
			<Box></Box>
			<Container sx={{ py: 1 }} maxWidth="md">
				{/* End hero unit */}
				<Grid container spacing={4}>
					{cards.map((card) => (
						<Grid item key={card} xs={12} sm={6} md={4}>
							<Card
								sx={{
									height: "100%",
									display: "flex",
									flexDirection: "column",
								}}
								onClick={() => setTool(card)}
							>
								<CardMedia
									component="div"
									sx={{
										// 16:9
										pt: "56.25%",
									}}
									image="https://source.unsplash.com/random?wallpapers"
								/>
								<CardContent sx={{ flexGrow: 1 }}>
									<Typography gutterBottom variant="h5" component="h2">
										{`${card}`}
									</Typography>
									<Typography>Brief description of testing tool.</Typography>
								</CardContent>
								<CardActions>
									<Button size="small">View</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
}

export default function Album() {
	const [tool, setTool] = useState("");

	return (
		<ThemeProvider theme={defaultTheme}>
			<CssBaseline />
			<main>
				{/* Hero unit */}
				<HeroUnit />
				<StartUnit />
				<ToolCards setTool={setTool} />
				{tool === cards[0] && <Tool1 />}
				{tool === cards[1] && <Tool2 />}
				{tool === cards[2] && <Tool3 />}
			</main>
		</ThemeProvider>
	);
}
