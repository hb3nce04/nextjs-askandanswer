import { Typography } from "@mui/material";
import Link from "next/link";

export default function Custom404() {
	return (
		<>
			<Typography variant="h3">404</Typography>
			<Typography variant="h4">Az oldal nem található!</Typography>
			<Link href="/">Vissza a főoldalra</Link>
		</>
	);
}
