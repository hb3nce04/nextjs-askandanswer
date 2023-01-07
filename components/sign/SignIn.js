import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { toast } from 'react-toastify';
import Box from "@mui/material/Box";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Typography from "@mui/material/Typography";
import { signIn	 } from "next-auth/react";

function SignIn() {
    const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const method = signIn('credentials', {redirect: false, username: data.get("username"), password: data.get("password")})
		//.then((res) => !res.ok ? toast.error('Hibás felhasználónév vagy jelszó!') : toast.success('Sikeresen bejelentkeztél!'))
		.then((res) => console.log(res))	
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
				<LockOpenIcon />
			</Avatar>
			<Typography component="h1" variant="h5">
				Bejelentkezés
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
				</Grid>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					sx={{ mt: 3, mb: 2 }}
				>
					Bejelentkezés
				</Button>
			</Box>
		</Box>
	);
}

export default SignIn;