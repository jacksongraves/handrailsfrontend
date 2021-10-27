// @react
import { Fragment } from "react";

// @mui
import { Box } from "@mui/material";
import { Grid, SvgIcon } from "@material-ui/core";

// @icons
import { stackIcons } from "./stack-icons";

const stackCarousel = stackIcons.map((obj: any) => (
	<Grid item md={1}>
		<Box
			sx={{
				position: "relative",
				p: { xs: 1, md: 1 },
				pr: { md: 0 },
				height: 100,
				maxHeight: 100,
			}}
		>
			<SvgIcon component={obj.icon} />
		</Box>
	</Grid>
));

export const StackSection = (props: any) => {
	return (
		<Fragment>
			<Grid container justify="center">
				<Grid item xs={12} sm={12} md={8}>
					<h2>Supported Frameworks</h2>
					<h5 className="description">
						<b>handrails</b> supports a number of JavaScript frameworks on the
						frontend and backend, and also has advanced features to process API
						specifications and database schemas.
					</h5>
				</Grid>
			</Grid>
			<Grid container>{stackCarousel}</Grid>
		</Fragment>
	);
};
