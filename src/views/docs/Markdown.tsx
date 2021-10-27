// @markdown
import ReactMarkdown from "markdown-to-jsx";
import { Typography, Link, Box } from "@mui/material";

// MarkdownListItem is a convenience wrapper that wraps markdown list syntax and renders it properly due to a bug in the ReactMarkdown library
export const MarkdownListItem = (props: any) => {
	return <Box component="li" sx={{ mt: 1, typography: "body1" }} {...props} />;
};

// The Markdown component is a convenience wrapper to make it easier to pass in props and ensure that markdown gets rendered appropriately
export const Markdown = (props: any) => {
	const { source } = props;

	const options = {
		overrides: {
			h1: {
				component: Typography,
				props: {
					gutterBottom: true,
					variant: "h4",
					component: "h1",
				},
			},
			h2: {
				component: Typography,
				props: { gutterBottom: true, variant: "h6", component: "h2" },
			},
			h3: {
				component: Typography,
				props: { gutterBottom: true, variant: "subtitle1" },
			},
			h4: {
				component: Typography,
				props: {
					gutterBottom: true,
					variant: "caption",
					paragraph: true,
				},
			},
			p: {
				component: Typography,
				props: { paragraph: true },
			},
			a: { component: Link },
			li: {
				component: MarkdownListItem,
			},
		},
	};

	return <ReactMarkdown options={options} children={source} {...props} />;
};
