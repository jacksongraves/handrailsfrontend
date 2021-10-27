// @references
// https://dev.to/muyunyun/create-react-doc-write-markdown-site-with-no-build-configuration-hk7
// https://stackoverflow.com/questions/57654378/dynamically-loading-markdown-file-in-react

// @react
import { useState, useEffect } from "react";

// @mui
import {
	Grid,
	Box,
	Typography,
	Container,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	MenuItem,
	ListItemText,
	ListItemIcon,
} from "@mui/material";

// @icons
import { ExpandMore } from "@mui/icons-material";

// @components
import * as Documentation from "./documentation";
import { Markdown } from "./Markdown";
import { MenuData } from "./MenuData";

export const DocsPage = () => {
	// doc is the reference to a documentation markdown file
	const [doc, setDoc] = useState(Documentation.introduction.overview);

	// md is the actual markdown itself (in form of a string)
	const [md, setMD] = useState("");

	// UseEffect asynchronously updates the markdown
	// FIXME currently has a loader bug
	useEffect(() => {
		const getMarkdown = async () => {
			fetch(doc)
				.then((data) => data.text())
				.then((text) => {
					setMD(text);
				});
		};
		getMarkdown();
	}, [doc]);
	const menuItems = (items: any[]) =>
		items.map(
			({ icon, name, docs }: { icon: any; name: string; docs: string }) => {
				return (
					<MenuItem onClick={(e) => setDoc(docs)}>
						<ListItemIcon>{icon}</ListItemIcon>
						<ListItemText>{name}</ListItemText>
					</MenuItem>
				);
			}
		);

	const accordionItems = (items: any[]) =>
		items.map(({ accordion, menus }: { accordion: string; menus: any[] }) => (
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMore />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography>{accordion}</Typography>
				</AccordionSummary>
				<AccordionDetails>{menuItems(menus)}</AccordionDetails>
			</Accordion>
		));
	return (
		<div>
			<Container maxWidth="lg">
				<Grid container>
					<Grid item md={3}>
						<Box
							sx={{
								pt: { xs: 8, md: 8 },
							}}
						>
							{accordionItems(MenuData)}
						</Box>
					</Grid>
					<Grid item md={9}>
						<Box
							sx={{
								position: "relative",
								p: { xs: 3, md: 6 },
							}}
						>
							<Markdown source={md}></Markdown>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};
