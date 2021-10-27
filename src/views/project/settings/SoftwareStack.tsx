// @css
import "../ProjectPage.css";

// @react
import React, { useState } from "react";

// @mui
import {
	Box,
	Grid,
	Button,
	Typography,
	FormGroup,
	TextField,
	Link,
	FormControlLabel,
	Checkbox,
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from "@mui/material";

// @icons
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";

/**
 * SoftwareStack is a settings form specifying which stack settings a project should use; it has make-or-break risk to a project's scaffolding settings. This is NOT fully implemented with business logic at this time. The form setup is also quite inefficient; in the future `@jsonform` or a useful form-minded package (`react-final-form` or `redux-form`) will be used to make this more maintainable.
 * @returns
 */
export const SoftwareStack = () => {
	/* ------------------------------- Stack State ------------------------------ */
	// NOTE this is a critical set of state!!!
	const [acknowledgeRisk, setAcknowledgeRisk] = useState(false);

	const [_react, setReact] = useState(true);
	const [_redux, setRedux] = useState(true);

	// Set additional local state for management form elements as needed
	// const [_react, setReact] = useState(true);
	// const [_react, setReact] = useState(true);
	// const [_react, setReact] = useState(true);
	// const [_react, setReact] = useState(true);
	// const [_react, setReact] = useState(true);
	// const [_react, setReact] = useState(true);
	// const [_react, setReact] = useState(true);
	// const [_react, setReact] = useState(true);
	// const [_react, setReact] = useState(true);
	// const [_react, setReact] = useState(true);
	// const [_react, setReact] = useState(true);

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
				<Typography variant="h5">Software Stack</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Typography sx={{ fontSize: 14 }} color="#d32f2f" gutterBottom>
								<strong>Warning!</strong> Changing these settings can
								drastically impact your project; you may even need to start from
								scratch. Please check this box confirm that you are aware of
								this risk before modifying these settings.
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<FormControlLabel
								control={
									<Checkbox
										checked={acknowledgeRisk}
										onChange={() => setAcknowledgeRisk(!acknowledgeRisk)}
										inputProps={{ "aria-label": "controlled" }}
									/>
								}
								label="I'm aware of the risks"
							/>
						</Grid>
						<Grid item xs={12}>
							<Typography variant="h6">Supported Databases</Typography>
							<FormGroup>
								<FormControlLabel
									control={
										<Checkbox
											disabled={!acknowledgeRisk}
											checked={_react}
											onChange={() => setReact(!_react)}
											inputProps={{ "aria-label": "controlled" }}
										/>
									}
									label="React"
								/>
								<FormControlLabel
									control={
										<Checkbox
											disabled={!acknowledgeRisk}
											checked={_redux}
											onChange={() => setRedux(!_redux)}
											inputProps={{ "aria-label": "controlled" }}
										/>
									}
									label="Redux"
								/>
							</FormGroup>
						</Grid>
						<Grid item xs={12}>
							<Typography variant="h6">API Types</Typography>
							<FormGroup>
								<FormControlLabel
									control={
										<Checkbox
											disabled={!acknowledgeRisk}
											checked={_react}
											onChange={() => setReact(!_react)}
											inputProps={{ "aria-label": "controlled" }}
										/>
									}
									label="React"
								/>
								<FormControlLabel
									control={
										<Checkbox
											disabled={!acknowledgeRisk}
											checked={_redux}
											onChange={() => setRedux(!_redux)}
											inputProps={{ "aria-label": "controlled" }}
										/>
									}
									label="Redux"
								/>
							</FormGroup>
						</Grid>
						<Grid item xs={12}>
							<Typography variant="h6">Back End Stack</Typography>
							<FormGroup>
								<FormControlLabel
									control={
										<Checkbox
											disabled={!acknowledgeRisk}
											checked={_react}
											onChange={() => setReact(!_react)}
											inputProps={{ "aria-label": "controlled" }}
										/>
									}
									label="React"
								/>
								<FormControlLabel
									control={
										<Checkbox
											disabled={!acknowledgeRisk}
											checked={_redux}
											onChange={() => setRedux(!_redux)}
											inputProps={{ "aria-label": "controlled" }}
										/>
									}
									label="Redux"
								/>
							</FormGroup>
						</Grid>
						<Grid item xs={12}>
							<Typography variant="h6">Front End Stack</Typography>

							<FormGroup>
								<FormControlLabel
									control={
										<Checkbox
											disabled={!acknowledgeRisk}
											checked={_react}
											onChange={() => setReact(!_react)}
											inputProps={{ "aria-label": "controlled" }}
										/>
									}
									label="React"
								/>
								<FormControlLabel
									control={
										<Checkbox
											disabled={!acknowledgeRisk}
											checked={_redux}
											onChange={() => setRedux(!_redux)}
											inputProps={{ "aria-label": "controlled" }}
										/>
									}
									label="Redux"
								/>
							</FormGroup>
						</Grid>
						<Grid item xs={12}>
							<Typography sx={{ fontSize: 14 }} color="#d32f2f" gutterBottom>
								<strong>Warning!</strong> Type in your account email address to
								confirm that you want to make these changes:
							</Typography>
							<TextField
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
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
					<Grid container justifyContent="flex-end">
						<Grid item>
							<Link href="#" variant="body2">
								Forgot your password?
							</Link>
						</Grid>
					</Grid>
				</Box>
			</AccordionDetails>
		</Accordion>
	);
};
