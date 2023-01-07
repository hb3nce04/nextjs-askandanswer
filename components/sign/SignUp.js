import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import { toast } from "react-toastify";
import Box from "@mui/material/Box";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import Typography from "@mui/material/Typography";

function SignUp() {
	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		fetch("/api/auth/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: data.get("username"),
				password: data.get("password"),
				password2: data.get("password2"),
				email: data.get("email"),
			}),
		})
			.then((res) => res.json())
			.then((res) =>
				res.type === "success"
					? toast.success(res.message)
					: toast.error(res.message)
			);
	};

	return (
		<Box
			sx={{
				marginTop: 8,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
				<HowToRegIcon />
			</Avatar>
			<Typography component="h1" variant="h5">
				Regisztráció
			</Typography>
			<Box
				component="form"
				noValidate
				onSubmit={handleSubmit}
				sx={{ mt: 3 }}
			>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<TextField
							required
							fullWidth
							id="username"
							label="Felhasználónév"
							name="username"
							autoComplete="username"
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							fullWidth
							name="password"
							label="Jelszó"
							type="password"
							id="password"
							autoComplete="password"
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							fullWidth
							name="password2"
							label="Jelszó mégegyszer"
							type="password"
							id="password2"
							autoComplete="password2"
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							fullWidth
							name="email"
							label="E-mail cím"
							type="email"
							id="email"
							autoComplete="email"
						/>
					</Grid>
					<Grid item xs={12}>
						<FormControlLabel
							control={
								<Checkbox value="understand" color="primary" />
							}
							label="Elolvastam, megértettem és elfogadom a szabályzatot."
						/>
					</Grid>
				</Grid>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					sx={{ mt: 3, mb: 2 }}
				>
					Regisztráció
				</Button>
			</Box>
		</Box>
	);
}

export default SignUp;
