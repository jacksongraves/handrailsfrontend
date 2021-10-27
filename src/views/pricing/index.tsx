// @react
import * as React from "react";

// @mui
import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CssBaseline,
	Grid,
	Container,
	GlobalStyles,
	Typography,
} from "@mui/material";

// @icons
import StarIcon from "@mui/icons-material/StarBorder";

const tiers = [
	{
		title: "Free",
		price: "0",
		description: ["1 project", "Zip export", "Email support", "Sandbox access"],
		buttonText: "Sign up for free",
		buttonVariant: "outlined",
	},
	{
		title: "Pro",
		subheader: "Most popular",
		price: "15",
		description: [
			"Up to 5 projects",
			"Handrails CLI",
			"Sandbox access",
			"Email support",
		],
		buttonText: "Get started",
		buttonVariant: "contained",
	},
	{
		title: "Enterprise",
		price: "30",
		description: [
			"Up to 20 projects",
			"Handrails CLI + Diffs",
			"Sandbox access",
			"Email support",
		],
		buttonText: "Contact us",
		buttonVariant: "outlined",
	},
];

export const PricingPage = () => {
	return (
		<React.Fragment>
			<GlobalStyles
				styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
			/>
			<CssBaseline />
			<Container
				disableGutters
				maxWidth="sm"
				component="main"
				sx={{ pt: 8, pb: 6 }}
			>
				<Typography
					component="p"
					variant="h2"
					align="center"
					color="text.primary"
					// gutterBottom
				>
					Pricing
				</Typography>
				<Typography
					variant="h5"
					align="center"
					color="text.secondary"
					component="p"
				>
					We have a number of different subscription options to best meet your
					project scaffolding needs.
				</Typography>
			</Container>
			{/* End hero unit */}
			<Container maxWidth="md" component="main">
				<Grid container spacing={5} alignItems="flex-end">
					{tiers.map((tier) => (
						// Enterprise card is full width at sm breakpoint
						<Grid
							item
							key={tier.title}
							xs={12}
							sm={tier.title === "Enterprise" ? 12 : 6}
							md={4}
						>
							<Card>
								<CardHeader
									title={tier.title}
									subheader={tier.subheader}
									titleTypographyProps={{ align: "center" }}
									action={tier.title === "Pro" ? <StarIcon /> : null}
									subheaderTypographyProps={{
										align: "center",
									}}
									sx={{
										backgroundColor: (theme) =>
											theme.palette.mode === "light"
												? theme.palette.grey[200]
												: theme.palette.grey[700],
									}}
								/>
								<CardContent>
									<Box
										sx={{
											display: "flex",
											justifyContent: "center",
											alignItems: "baseline",
											mb: 2,
										}}
									>
										<Typography
											component="h2"
											variant="h3"
											color="text.primary"
										>
											${tier.price}
										</Typography>
										<Typography variant="h6" color="text.secondary">
											/mo
										</Typography>
									</Box>
									<ul>
										{tier.description.map((line) => (
											<Typography
												component="li"
												variant="subtitle1"
												align="center"
												key={line}
											>
												{line}
											</Typography>
										))}
									</ul>
								</CardContent>
								<CardActions>
									<Button
										fullWidth
										variant={tier.buttonVariant as "outlined" | "contained"}
									>
										{tier.buttonText}
									</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</React.Fragment>
	);
};
