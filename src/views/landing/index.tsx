// @css
import "./LandingPage.css";

// @mui
import { Container } from "@mui/material";
import { Grid } from "@material-ui/core";

// @sections
import { GIFSection, StackSection } from "./sections";

export const LandingPage = (props: any) => {
	return (
		<div>
			<div className="parallax">
				<div className="container">
					<Grid container className="grid-container">
						<Grid item className="grid-item">
							<div className="brand">
								<h1 className="title">handrails.io</h1>
								<h3 className="subtitle">
									A smarter, safer scaffolding solution.
								</h3>
							</div>
						</Grid>
					</Grid>
				</div>
			</div>
			<div className="main">
				<Container maxWidth="lg">
					{/* Description Section */}
					<Grid container justify="center">
						<Grid item xs={12} sm={12} md={8}>
							<h2>Let's talk product</h2>
							<h5 className="description">
								<b>handrails</b> makes it simple, easy, and fast to scaffold
								full-stack JavaScript projects.
							</h5>
						</Grid>
					</Grid>

					{/* GIF Section */}
					<GIFSection />

					{/* Pro-Tip Section */}
					<Grid container>
						<Grid item md={4}></Grid>
						<Grid item md={4}></Grid>
						<Grid item md={4}></Grid>
					</Grid>

					{/* Stack Carousel */}
					<StackSection />
				</Container>
			</div>
		</div>
	);
};
