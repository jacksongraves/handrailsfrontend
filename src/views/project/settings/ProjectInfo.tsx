// @css
import "../ProjectPage.css";

// @react
import React from "react";

// @mui
import {
	Box,
	Grid,
	Button,
	Typography,
	TextField,
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from "@mui/material";

// @icons
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";

export const ProjectInfo = (props: any) => {
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
		<Accordion>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1a-content"
				id="panel1a-header"
			>
				<Typography variant="h5">Project Info</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							{/* <Typography variant="h6">Project Name</Typography> */}
							<TextField
								autoComplete="pname"
								name="projectName"
								required
								fullWidth
								id="projectName"
								label="Project Name"
								autoFocus
							/>
						</Grid>
						<Grid item xs={12}>
							{/* <Typography variant="h6">Description</Typography> */}
							<TextField
								required
								multiline
								minRows={2}
								maxRows={4}
								fullWidth
								id="description"
								label="Description"
								name="description"
								autoComplete="desc"
							/>
						</Grid>
					</Grid>
					<Button
						disabled
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Save Changes
					</Button>
				</Box>
			</AccordionDetails>
		</Accordion>
	);
};
