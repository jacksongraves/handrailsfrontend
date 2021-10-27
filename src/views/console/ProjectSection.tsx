// @css
import "./ConsolePage.css";

// @react
import { Link } from "react-router-dom";

// @mui
import { Container, Grid } from "@material-ui/core";
import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	Typography,
	IconButton,
} from "@mui/material";

// @icons
import { AddCircle } from "@mui/icons-material";

const projects = [
	{
		name: "ABC",
		description:
			"ASdAKSJ09 asd fasd f 2323 asdf 32 324ASdAKSJ09 asd fasd f 2323 asdf 32 324",
	},
	{
		name: "ABC",
		description:
			"ASdAKSJ09 asd fasd f 2323 asdf 32 324ASdAKSJ09 asd fasd f 2323 asdf 32 324",
	},
	{
		name: "ABC",
		description:
			"ASdAKSJ09 asd fasd f 2323 asdf 32 324ASdAKSJ09 asd fasd f 2323 asdf 32 324",
	},
	{
		name: "ABC",
		description:
			"ASdAKSJ09 asd fasd f 2323 asdf 32 324ASdAKSJ09 asd fasd f 2323 asdf 32 324",
	},
	{
		name: "ABC",
		description:
			"ASdAKSJ09 asd fasd f 2323 asdf 32 324ASdAKSJ09 asd fasd f 2323 asdf 32 324",
	},
	{
		name: "ABC",
		description:
			"ASdAKSJ09 asd fasd f 2323 asdf 32 324ASdAKSJ09 asd fasd f 2323 asdf 32 324",
	},
	{
		name: "ABC",
		description:
			"ASdAKSJ09 asd fasd f 2323 asdf 32 324ASdAKSJ09 asd fasd f 2323 asdf 32 324",
	},
	{
		name: "ABC",
		description:
			"ASdAKSJ09 asd fasd f 2323 asdf 32 324ASdAKSJ09 asd fasd f 2323 asdf 32 324",
	},
	{
		name: "ABC",
		description:
			"ASdAKSJ09 asd fasd f 2323 asdf 32 324ASdAKSJ09 asd fasd f 2323 asdf 32 324",
	},
	{
		name: "ABC",
		description:
			"ASdAKSJ09 asd fasd f 2323 asdf 32 324ASdAKSJ09 asd fasd f 2323 asdf 32 324",
	},
	{
		name: "ABC",
		description:
			"ASdAKSJ09 asd fasd f 2323 asdf 32 324ASdAKSJ09 asd fasd f 2323 asdf 32 324",
	},
	{
		name: "ABC",
		description:
			"ASdAKSJ09 asd fasd f 2323 asdf 32 324ASdAKSJ09 asd fasd f 2323 asdf 32 324",
	},
	{
		name: "ABC",
		description:
			"ASdAKSJ09 asd fasd f 2323 asdf 32 324ASdAKSJ09 asd fasd f 2323 asdf 32 324",
	},
	{
		name: "ABC",
		description:
			"ASdAKSJ09 asd fasd f 2323 asdf 32 324ASdAKSJ09 asd fasd f 2323 asdf 32 324",
	},
	{ name: "ABC", description: "ASdAKSJ09 asd fasd f 2323 asdf 32 324" },
	{ name: "ABC", description: "ASdAKSJ09 asd fasd f 2323 asdf 32 324" },
	{ name: "ABC", description: "ASdAKSJ09 asd fasd f 2323 asdf 32 324" },
	{ name: "ABC", description: "ASdAKSJ09 asd fasd f 2323 asdf 32 324" },
	{ name: "ABC", description: "ASdAKSJ09 asd fasd f 2323 asdf 32 324" },
	{ name: "ABC", description: "ASdAKSJ09 asd fasd f 2323 asdf 32 324" },
	{ name: "ABC", description: "ASdAKSJ09 asd fasd f 2323 asdf 32 324" },
	{ name: "ABC", description: "ASdAKSJ09 asd fasd f 2323 asdf 32 324" },
	{ name: "ABC", description: "ASdAKSJ09 asd fasd f 2323 asdf 32 324" },
	{ name: "ABC", description: "ASdAKSJ09 asd fasd f 2323 asdf 32 324" },
];

export const ProjectSection = (props: any) => {
	const renderProjects = (projects: any[]) =>
		projects.map((project) => (
			<Grid item key={project.name} md={3}>
				<Card>
					<Link style={{ textDecoration: "none" }} to="/project">
						<CardActionArea sx={{ position: "relative" }}>
							<CardContent sx={{ minHeight: 175 }}>
								<Typography variant="h5" component="div">
									{project.name}
								</Typography>
								<Typography
									sx={{ fontSize: 14 }}
									color="text.secondary"
									gutterBottom
								>
									{project.description}
								</Typography>

								<Typography
									sx={{ fontSize: 12, bottom: 12, position: "absolute" }}
									color="text.secondary"
								>
									{new Date().toLocaleString()}
								</Typography>
							</CardContent>
						</CardActionArea>
					</Link>
				</Card>
				{/* </Box> */}
			</Grid>
		));
	return (
		<div style={{ backgroundColor: "#f3f6f9" }}>
			<div className="parallax" style={{ height: "40vh" }}>
				<div className="container">
					<Grid container className="grid-container">
						<Grid item className="grid-item">
							<div className="brand">
								<h1 className="title">handrails.io</h1>
								<h3 className="subtitle">What will we build today?</h3>
							</div>
						</Grid>
					</Grid>
				</div>
			</div>
			{/* <div className="main"> */}
			<Container maxWidth="lg">
				{/* Project Section */}
				<Box sx={{ p: { xs: 3, md: 6 } }}>
					<Grid container justify="center" spacing={2}>
						<Grid item md={3}>
							<Card>
								<CardActionArea>
									<CardContent sx={{ minHeight: 175 }}>
										<Typography variant="h5" component="div">
											Create a new project
										</Typography>
										<Typography
											sx={{ fontSize: 14 }}
											color="text.secondary"
											gutterBottom
										>
											Get started on something new today!
										</Typography>
										<Grid justify="center" alignItems="center" spacing={0}>
											<IconButton
												color="primary"
												aria-label="Create a new project"
												// size="large"
												style={{ fontSize: 40 }}
											>
												<AddCircle style={{ height: 60, width: 60 }} />
											</IconButton>
										</Grid>
									</CardContent>
								</CardActionArea>
							</Card>
							{/* </Box> */}
						</Grid>
						{renderProjects(projects)}
					</Grid>

					{/* Pro-Tip Section */}
					<Grid container>
						<Grid item md={4}></Grid>
						<Grid item md={4}></Grid>
						<Grid item md={4}></Grid>
					</Grid>
				</Box>
			</Container>
			{/* </div> */}
		</div>
	);
};
