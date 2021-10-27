// @mui
import { Typography, Link } from "@mui/material";

// Copyright component, rendered inside a footer
export const Copyright = (props: any) => {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{"Copyright © "}
			<Link color="inherit" href="https://www.handrails.io/">
				handrails.io
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
};
