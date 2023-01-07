import { Breadcrumbs, Divider, Typography } from "@mui/material";
import Link from "next/link";

function Breadcrumb({ activeLinks, currentPage }) {
	return (
		<>
			<Breadcrumbs separator="/" aria-label="breadcrumb" sx={{ mb: 1 }}>
				{activeLinks != null
					? activeLinks.map((item) => {
							return (
								<Link
									href={item.link}
									key={item.name}
									legacyBehavior
								>
									{item.name}
								</Link>
							);
					  })
					: null}
				<Typography>{currentPage}</Typography>
			</Breadcrumbs>
			<Divider sx={{ mb: 1 }} />
		</>
	);
}

export default Breadcrumb;
