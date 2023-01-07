import Link from "next/link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

export default function QuestionItem({ id, title, rating, category, topic }) {
	return (
		<Link className="link" href={`/questions/${id}`} legacyBehavior>
			<Card sx={{ boxShadow: 3, my: 2 }}>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{title}
					</Typography>
					{category ? (
						<Typography variant="body2" color="text.secondary">
							{category}
						</Typography>
					) : null}
					{topic ? (
						<Typography variant="body2" color="text.secondary">
							{topic}
						</Typography>
					) : null}
					<Rating
						name="read-only"
						value={rating}
						precision={0.5}
						readOnly
					/>
				</CardContent>
			</Card>
		</Link>
	);
}
