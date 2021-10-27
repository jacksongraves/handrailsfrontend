import ReactDOM from "react-dom";
import { App } from "./App";
import "./index.css";

ReactDOM.render(
	<App />,
	// Themes are not in use for this basic front end implementation (yet)
	// <ThemeProvider theme={theme}>
	// 	{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
	// 	<CssBaseline />

	// </ThemeProvider>,
	document.querySelector("#root")
);
