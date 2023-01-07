import { useState } from "react";
import Box from "@mui/material/Box";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useRouter } from "next/router";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";

import Link from "next/link";

import useSWR from "swr";

import TopicList from "./TopicList";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function NestedList() {
	const [open, setOpen] = useState(false);
	const { data, error, isLoading } = useSWR("/api/categories", fetcher);

	const router = useRouter();

	const params = router.query.params;
	const currentCategory = params ? params[0] : 0;

	if (error)
		return (
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<strong>Hiba történt a betöltés során.</strong>
			</Box>
		);
	if (isLoading)
		return (
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<CircularProgress />
			</Box>
		);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<>
			<List
				sx={{
					width: "100%",
					maxWidth: 360,
					bgcolor: "background.paper",
				}}
				component="nav"
				aria-labelledby="nested-list-subheader"
				subheader={
					<ListSubheader component="div" id="nested-list-subheader">
						Katagóriák
					</ListSubheader>
				}
			>
				{data.map((category) => {
					if (currentCategory == category.id) {
						return (
							<Box key={category.id}>
								<ListItemButton onClick={handleClick}>
									<ListItemText primary={category.name} />
									{open ? <ExpandLess /> : <ExpandMore />}
								</ListItemButton>
								<Collapse
									in={open}
									timeout="auto"
									unmountOnExit
								>
									<List
										component="div"
										disablePadding
									>
										<TopicList categoryId={category.id} />
									</List>
								</Collapse>
							</Box>
						);
					} else
						return (
							<Link
								href={`/categories/${category.id}`}
								key={category.id}
								legacyBehavior
							>
								<ListItemButton>
									<ListItemText primary={category.name} />
								</ListItemButton>
							</Link>
						);
				})}
			</List>
			<Divider />
		</>
	);
}
