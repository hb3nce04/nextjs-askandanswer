import "react-toastify/dist/ReactToastify.min.css";
import { Container } from "@mui/system";
import Navbar from "./Navbar";
import { Grid } from "@mui/material";
import Footer from "./Footer";
import { CssBaseline } from "@mui/material";
import CategoryList from "./CategoryList";
import { ToastContainer } from "react-toastify";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function Layout({ children }) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss={false}
				draggable={false}
				pauseOnHover={false}
				theme="dark" // colored
			/>
			<Navbar />
			<Container maxWidth="lg" sx={{ bgcolor: "white", my: 1 }} disableGutters>
				<Grid container spacing={1}>
					<Grid item md={2}>
						<CategoryList />
					</Grid>
					<Grid item md={8} sx={{ mx: "auto" }}>
						{children}
					</Grid>
				</Grid>
				<Footer />
			</Container>
		</ThemeProvider>
	);
}
