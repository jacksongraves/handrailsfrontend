// @react
import { Link } from "react-router-dom";

// @mui
import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	Button,
	IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// The App Bar is an adapted header with links for the top of the page in a SPA
export const ButtonAppBar = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position="static"
				color="default"
				elevation={0}
				sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
			>
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>

					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						<Link to="/">handrails.io</Link>
					</Typography>
					<Link style={{ textDecoration: "none" }} to="/docs">
						<Button color="inherit">Docs</Button>
					</Link>
					<Link style={{ textDecoration: "none" }} to="/pricing">
						<Button color="inherit">Pricing</Button>
					</Link>
					<Link style={{ textDecoration: "none" }} to="/console">
						<Button color="inherit">Console</Button>
					</Link>
					<Link style={{ textDecoration: "none" }} to="/login">
						<Button color="inherit">Login</Button>
					</Link>
					<Link style={{ textDecoration: "none" }} to="/signup">
						<Button color="inherit">Signup</Button>
					</Link>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
