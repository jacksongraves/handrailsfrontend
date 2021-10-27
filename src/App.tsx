// @react
import { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// @views
import {
	PricingPage,
	SignUpPage,
	SignInPage,
	DocsPage,
	LandingPage,
	ProjectPage,
	ConsolePage,
} from "./views";

// @components
import { ButtonAppBar, Footer } from "./components";

/**
 * App is the basic component that holds the SPA; in this implementation, we use a BrowserRouter to bind specific hyperlinks to views
 * @returns React
 */
export const App = () => {
	/*
    Please read the following link to find the difference between the Hash and Browser Router.
    https://reactrouter.com/web/guides/primary-components#:~:text=At%20the%20core%20of%20every,BrowserRouter%3E%20uses%20regular%20URL%20paths.
  */
	return (
		<Fragment>
			<BrowserRouter>
				<ButtonAppBar />
				<Switch>
					<Route path="/docs" component={DocsPage} />
					<Route path="/pricing" component={PricingPage} />
					<Route path="/login" component={SignInPage} />
					<Route path="/signup" component={SignUpPage} />
					<Route path="/account" component={SignUpPage} />
					<Route path="/project" component={ProjectPage} />
					<Route path="/console" component={ConsolePage} />
					<Route path="/" component={LandingPage} />
				</Switch>
				<Footer
					description="A smarter scaffolding solution."
					title="handrails.io"
				/>
			</BrowserRouter>
		</Fragment>
	);
};
