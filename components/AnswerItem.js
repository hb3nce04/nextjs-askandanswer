import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Rating from '@mui/material/Rating';

function AnswerItem({ id, text, createdAt, username, rating }) {
	return (
		<Card sx={{ boxShadow: 3, my: 2 }}>
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					{id}/10
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{text}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{username}, {createdAt}
				</Typography>
				<Rating name="read-only" value={rating} precision={0.5} readOnly />
			</CardContent>
		</Card>
	);
}

export default AnswerItem;
