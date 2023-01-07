import SignUp from "../../components/sign/SignUp";
import SignIn from "../../components/sign/SignIn";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Breadcrumb from "../../components/Breadcrumb";

export default function Sign() {
	return (
		<>
			<Breadcrumb
				activeLinks={[{ name: "Főoldal", link: "/" }]}
				currentPage={"Bejelentkezés vagy Regisztráció"}
			/>
			<Typography align="center" variant="h4">
				Bejelentkezés / Regisztráció
			</Typography>
			<Typography align="center" variant="h6">
				Az oldal teljeskörű használatához kérlek jelentkezz be vagy
				regisztrálj!
			</Typography>
			<Grid container spacing={4}>
				<Grid item md={6}>
					<SignIn />
				</Grid>
				<Grid item md={6}>
					<SignUp />
				</Grid>
			</Grid>
			<Typography align="center" component="h1" variant="h4">
				Szabályzat
			</Typography>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis lorem erat, sed rutrum mi varius ac. Ut convallis finibus nisl, at sagittis massa tempor a. Morbi semper neque risus, ac porttitor urna pretium sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ut justo sit amet odio interdum mattis. Integer felis justo, aliquam nec cursus id, ultricies quis libero. Ut hendrerit ipsum non accumsan porta. Vivamus eu massa rutrum, pretium metus tristique, vulputate mauris. Ut sapien sapien, eleifend sit amet commodo et, interdum sed lectus. Nullam vehicula fringilla eros, non faucibus turpis dignissim vel. Morbi ut sollicitudin velit. Nunc eget faucibus lectus, non pharetra tellus. Vestibulum semper velit lorem, in pellentesque mi facilisis ac. Donec consectetur ullamcorper porttitor. Phasellus efficitur quis ex in gravida.</p>
			<p>Proin ultricies aliquet purus, nec elementum orci consectetur at. Morbi consectetur vitae nulla nec convallis. Sed pulvinar tincidunt mi. Suspendisse potenti. Maecenas molestie lorem odio, vel molestie lacus accumsan vel. Curabitur sit amet molestie tellus. Nulla facilisi. Proin lobortis mauris in nibh tempus aliquam.</p>
			<p>Pellentesque egestas, nibh vitae consequat commodo, neque augue commodo turpis, quis auctor risus arcu at justo. Donec quis purus in nulla posuere dictum. Aliquam erat volutpat. Etiam vel quam vestibulum, sodales nunc nec, aliquam leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut scelerisque eleifend nisi id luctus. Donec tincidunt lectus quis lorem ultrices mattis. Etiam nunc nisl, vulputate ac odio id, feugiat mattis odio. Aenean consequat enim a volutpat venenatis. Proin eleifend vel dolor sit amet pulvinar. Vivamus fringilla gravida lorem sed dapibus. Vivamus egestas, libero quis pellentesque ultrices, leo nisi tempus ante, vitae varius justo nisi quis massa. Pellentesque in ipsum quis tortor suscipit porttitor at vel risus.</p>
			<p>Pellentesque iaculis, felis sed lobortis dignissim, ex magna facilisis dolor, a pulvinar orci magna in nisi. Vivamus ultricies dolor ut massa aliquet, vulputate consectetur erat suscipit. Donec euismod nec dui quis vestibulum. Vestibulum sed quam quis lacus rhoncus facilisis. Vivamus tortor lacus, egestas sed mi quis, tempus laoreet nisi. Etiam lobortis convallis feugiat. Sed semper odio nec mollis consectetur. Nullam aliquam sapien metus. In pharetra leo non sapien consectetur, id mattis ligula egestas. Praesent quis blandit nisi, eu mattis erat. Phasellus varius libero quis quam accumsan, eget maximus felis mattis. Fusce sit amet tincidunt ligula. Nullam et nibh consequat, ullamcorper erat sed, finibus libero. Maecenas eget auctor nisi. Donec id cursus sem.</p>
		</>
	);
}
