import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary" align="center">
			Készítette:
			<Link color="inherit" href="https://github.com/b3nce04">
				Hagymási Bence
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

function Footer() {
	return (
		<Box sx={{ color: "primary", p: 1 }} component="footer">
			<Typography variant="h6" align="center" gutterBottom>
				Ask & Answer
			</Typography>
			<Typography
				variant="subtitle1"
				align="center"
				color="text.secondary"
				component="p"
			>
				© Minden jog fenntartva!
			</Typography>
			<Copyright />
		</Box>
	);
}

export default Footer;
