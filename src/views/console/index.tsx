// @css
import "./ConsolePage.css";

// @react
import React, { useState } from "react";

// @mui
import { Box, Tab, Tabs } from "@mui/material";

// @sections
import { ProjectSection } from "./ProjectSection";
import { ProfileSection } from "./ProfileSection";

// @components
import { TabPanel } from "../../components";

export const ConsolePage = () => {
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
				<Tab label="Projects" {...a11yProps(0)} />
				<Tab label="Profile" {...a11yProps(1)} />
			</Tabs>
			<Box sx={{ width: "100%" }}>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}></Box>
				<TabPanel value={value} index={0}>
					<ProjectSection />
				</TabPanel>
				<TabPanel value={value} index={1}>
					<ProfileSection />
				</TabPanel>
			</Box>
		</>
	);
};
