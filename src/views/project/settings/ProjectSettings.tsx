// @css
import "../ProjectPage.css";

// @react
import React from "react";

// @mui
import { Container, Grid } from "@material-ui/core";
import { Box } from "@mui/material";

// @local
import { ProjectInfo } from "./ProjectInfo";
import { SoftwareStack } from "./SoftwareStack";

/**
 * ProjectSettings allows a user to specify the project name and description.
 * Business logic is currently disabled.
 */
export const ProjectSettings = () => {
	// NOTE: disabled for now
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		// eslint-disable-next-line no-console
		console.log({
			email: data.get("email"),
			password: data.get("password"),
		});
	};
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
			<Container maxWidth="lg">
				<div className="main">
					<Box sx={{ p: { xs: 3, md: 6 } }}>
						<Grid container justify="center" spacing={2}>
							<Grid item md={6}>
								<ProjectInfo />
								<SoftwareStack />
								{/* Add a Roles management component in the future */}
							</Grid>
						</Grid>
					</Box>
				</div>
			</Container>
		</div>
	);
};
