import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
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
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const cards = [1, 2, 3];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

function ProjectDetailsUnit() {
	return (
		<Box
			sx={{
				bgcolor: "background.paper",
				pt: 3,
				pb: 6,
			}}
		>
			<Container maxWidth="sm">
				<Button
					href="https://github.com/SaqifAbrar/js-testing-tutorial"
					target="_blank"
					variant="outlined"
					startIcon={<GitHubIcon />}
				>
					Project Repository
				</Button>
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

function StartUnit() {
	return (
		<Box
			sx={{
				bgcolor: "background.paper",
				pt: 3,
				pb: 6,
			}}
		>
			<Container maxWidth="sm">
				<Stack
					sx={{ pt: 4 }}
					direction="row"
					spacing={2}
					justifyContent="center"
				>
					<Button variant="contained">Project Details</Button>
					<Button variant="outlined">Prerequisite Set-Up</Button>
				</Stack>
				<Container>
					<ProjectDetailsUnit />
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
					JavaScript Testing Tutorial
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

export default function Album() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<CssBaseline />
			<main>
				{/* Hero unit */}
				<HeroUnit />
				<StartUnit />
				<Container sx={{ py: 8 }} maxWidth="md">
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
											{`Testing Tool #${card}`}
										</Typography>
										<Typography>
											This is a media card. You can use this section to describe
											the content.
										</Typography>
									</CardContent>
									<CardActions>
										<Button size="small">View</Button>
										<Button size="small">Edit</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</main>
		</ThemeProvider>
	);
}
