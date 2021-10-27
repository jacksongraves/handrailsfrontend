// @css
import "./ProjectPage.css";

// @react
import React, { useState } from "react";

// @mui
import { Box, Tab, Tabs } from "@mui/material";

// @components
// Redacted as product is not yet mature
// import { ProjectSandbox } from "./react-flow/ProjectSandbox";
import { ProjectSettings } from "./settings/ProjectSettings";

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && children}
		</div>
	);
}

export const ProjectPage = (props: any) => {
	const [value, setValue] = useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	const a11yProps = (index: number) => {
		return {
			id: `simple-tab-${index}`,
			"aria-controls": `simple-tabpanel-${index}`,
		};
	};

	return (
		<>
			<Tabs
				value={value}
				onChange={handleChange}
				aria-label="basic tabs example"
				centered
			>
				<Tab label="Sandbox" {...a11yProps(0)} />
				<Tab label="Settings" {...a11yProps(1)} />
				<Tab label="Databases" {...a11yProps(2)} />
				<Tab label="APIs" {...a11yProps(3)} />
				<Tab label="CLI" {...a11yProps(4)} />
			</Tabs>
			<Box sx={{ width: "100%" }}>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}></Box>
				{/* Redacted as product is not yet mature */}
				{/* <TabPanel value={value} index={0}>
					<ProjectSandbox />
				</TabPanel> */}
				<TabPanel value={value} index={1}>
					<ProjectSettings />
				</TabPanel>
				<TabPanel value={value} index={2} />
				<TabPanel value={value} index={3} />
				<TabPanel value={value} index={4} />
			</Box>
		</>
	);
};
