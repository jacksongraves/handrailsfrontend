import { Box, Typography, Link } from "@mui/material";
import { Grid } from "@material-ui/core";

export const GIFSection = (props: any) => {
	return (
		<Grid container>
			<Grid item md={4}>
				<Box
					sx={{
						position: "relative",
						p: { xs: 3, md: 6 },
						pr: { md: 0 },
					}}
					style={{ border: "1px solid black", borderRadius: "8px" }}
				>
					<Typography component="h1" variant="h3" color="inherit" gutterBottom>
						CLI GIF
					</Typography>
					<Typography variant="h5" color="inherit" paragraph>
						Here's a gif of the handrails CLI
					</Typography>
					<Link variant="subtitle1" href="#">
						to/cli
					</Link>
				</Box>
			</Grid>
			<Grid item md={4}>
				<Box
					sx={{
						position: "relative",
						p: { xs: 3, md: 6 },
						pr: { md: 0 },
					}}
					style={{ border: "1px solid black", borderRadius: "8px" }}
				>
					<Typography component="h1" variant="h3" color="inherit" gutterBottom>
						Sandbox GIF
					</Typography>
					<Typography variant="h5" color="inherit" paragraph>
						Here's a gif of the components sandbox.
					</Typography>
					<Link variant="subtitle1" href="#">
						to/sandbox
					</Link>
				</Box>
			</Grid>
			<Grid item md={4}>
				<Box
					sx={{
						position: "relative",
						p: { xs: 3, md: 6 },
						pr: { md: 0 },
					}}
					style={{ border: "1px solid black", borderRadius: "8px" }}
				>
					<Typography component="h1" variant="h3" color="inherit" gutterBottom>
						Deploy and Collab GIF
					</Typography>
					<Typography variant="h5" color="inherit" paragraph>
						Here's a view of folks collaborating.
					</Typography>
					<Link variant="subtitle1" href="#">
						to/collaboration
					</Link>
				</Box>
			</Grid>
		</Grid>
	);
};
