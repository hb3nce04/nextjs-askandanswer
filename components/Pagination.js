import { useRouter } from "next/router";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";

export default function BasicPagination({ count }) {
	const router = useRouter();

	const setPagination = (value) => {
		router.query.page = value;
		router.push(router);
	};

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			my="10px"
		>
			<Pagination
				count={count}
				color="primary"
				onChange={(e, value) => setPagination(value)}
			/>
		</Box>
	);
}
