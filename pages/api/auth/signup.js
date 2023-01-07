import { prisma } from "/prisma/client.js";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
	if (req.method === "POST") {
		const data = req.body;
		if (data.password !== data.password2) {
			res.status(200).json({
				message: "A két jelszó nem egyezik!",
				type: "error",
			});
			return;
		}

		const foundUser = await prisma.User.findFirst({
			where: { username: data.username },
		});
		if (foundUser) {
			res.status(200).json({
				message: "Ez a felhasználónév már foglalt!",
				type: "error",
			});
			return;
		}

		const foundEmail = await prisma.User.findFirst({
			where: { email: data.email },
		});
		if (foundEmail) {
			res.status(200).json({
				message: "Ez az e-mail cím már foglalt!",
				type: "error",
			});
			return;
		}

		const hashedPasword = await bcrypt.hash(data.password, 8);

		const user = await prisma.User.create({
			data: {
				username: data.username,
				password: hashedPasword,
				email: data.email,
			},
		});

		res.status(200).json({
			message: "Sikeres regisztráció! Mostmár bejelentkezhetsz!",
			type: "success",
		});
	} else {
		res.status(404);
	}
}
