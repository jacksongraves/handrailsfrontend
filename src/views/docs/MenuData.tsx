import {
	ContentCut,
	FileDownload,
	PlayArrow,
	Pin,
	Extension,
	Lock,
	PublishedWithChanges,
	Person,
	People,
	Apartment,
	AccountTree,
	Info,
} from "@mui/icons-material";
import SvgIcon from "@material-ui/core/SvgIcon";

import * as StackIcons from "../landing/sections/stack-icons";
import * as Documentation from "./documentation";

/**
 * A manual JSON specifying the hierarchical, logo, and markdown import structure of the documentation menu. The structure is:
 * @type {{accordion, menus[]}[]}
 */
export const MenuData = [
	{
		accordion: "Introduction",
		menus: [
			{
				name: "Quick Start",
				icon: <PlayArrow />,
				docs: Documentation.introduction.quickStart,
			},
			{
				name: "Design Patterns",
				icon: <Extension />,
				docs: Documentation.introduction.designPatterns,
			},
			{
				name: "Best Practices",
				icon: <Pin />,
				docs: Documentation.introduction.bestPractices,
			},
		],
	},
	{
		accordion: "Sandbox",
		menus: [
			{
				name: "Usage",
				icon: <Info />,
				docs: Documentation.sandbox.usage,
			},
			{
				name: "Structure",
				icon: <AccountTree />,
				docs: Documentation.sandbox.structure,
			},
		],
	},
	{
		accordion: "CLI",
		menus: [
			{
				name: "Installation",
				icon: <FileDownload />,
				docs: Documentation.cli.installation,
			},
		],
	},
	{
		accordion: "Back End Architecture",
		menus: [
			{
				name: "Overview",
				icon: <Info />,
				docs: Documentation.backend.overview,
			},
			{
				name: "Node.js",
				icon: <SvgIcon component={StackIcons.NodeDotJSIcon} color="action" />,
				docs: Documentation.backend.node,
			},
			{
				name: "Express",
				icon: "",
				docs: Documentation.backend.express,
			},
			{
				name: "Nodemon",
				icon: <SvgIcon component={StackIcons.NodemonIcon} color="action" />,
				docs: Documentation.backend.nodemon,
			},
		],
	},
	{
		accordion: "Front End Architecture",
		menus: [
			{
				name: "React",
				icon: <SvgIcon component={StackIcons.ReactIcon} color="action" />,
				docs: Documentation.frontend.react,
			},
			{
				name: "Redux",
				icon: <SvgIcon component={StackIcons.ReduxIcon} color="action" />,
				docs: Documentation.frontend.redux,
			},
			{
				name: "Vue",
				icon: "",
				docs: Documentation.frontend.vue,
			},
		],
	},
	{
		accordion: "Database Integrations",
		menus: [
			{
				name: "MySQL",
				icon: <SvgIcon component={StackIcons.MySQLIcon} color="action" />,
				docs: Documentation.databases.mysql,
			},
			{
				name: "PostgreSQL",
				icon: <SvgIcon component={StackIcons.PostgreSQLIcon} color="action" />,
				docs: Documentation.databases.postgresql,
			},
			{
				name: "MongoDB",
				icon: <SvgIcon component={StackIcons.MongoDBIcon} color="action" />,
				docs: Documentation.databases.mongodb,
			},
		],
	},
	{
		accordion: "API Specifications",
		menus: [
			{
				name: "OpenAPI",
				icon: (
					<SvgIcon
						component={StackIcons.OpenAPIInitiativeIcon}
						color="action"
					/>
				),
				docs: Documentation.apis.openapi,
			},
			{
				name: "AsyncAPI",
				icon: "",
				docs: Documentation.apis.asyncapi,
			},
		],
	},
	{
		accordion: "FAQ",
		menus: [
			{
				name: "Use Cases",
				icon: <ContentCut />,
				docs: Documentation.faq.usecases,
			},
			{
				name: "Security",
				icon: <Lock />,
				docs: Documentation.faq.security,
			},
			{
				name: "Change Management",
				icon: <PublishedWithChanges />,
				docs: Documentation.faq.changemanagement,
			},
			{
				name: "Users",
				icon: <Person />,
				docs: Documentation.faq.users,
			},
			{
				name: "Teams",
				icon: <People />,
				docs: Documentation.faq.teams,
			},
			{
				name: "Businesses",
				icon: <Apartment />,
				docs: Documentation.faq.businesses,
			},
		],
	},
];
