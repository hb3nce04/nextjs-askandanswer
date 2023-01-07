import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import useSWR from "swr";

import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function TopicList({ categoryId }) {
	const { data, error, isLoading } = useSWR(
		`/api/topics/categories/${categoryId}`,
		fetcher
	);

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

	return (
		<>
			{data.map((topic) => {
				return (
					<Link href={`/categories/${categoryId}/topics/${topic.id}`} key={topic.id} legacyBehavior>
						<ListItemButton sx={{ pl: 4 }}>
							<ListItemText primary={topic.name} />
						</ListItemButton>
					</Link>
				);
			})}
		</>
	);
}

export default TopicList;
