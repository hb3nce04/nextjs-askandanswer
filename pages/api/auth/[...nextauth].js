import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "/prisma/client.js";
import bcrypt from "bcrypt";

export const authOptions = {
	pages: {
		signIn: "/auth/sign",
	},
	providers: [
		CredentialsProvider({
			async authorize(credentials, req) {
				const creds = credentials;

				const foundUser = await prisma.User.findFirst({
					where: { username: creds.username },
				});

				if (foundUser === null) {
					return null;
				}
				const isValidPassword = await bcrypt.compare(
					foundUser.password,
					creds.password
				);

				if (!isValidPassword) {
					return null;
				}

				return {
					id: foundUser.id,
					email: foundUser.email,
					username: foundUser.username,
				};
			},
		}),
	],
};
export default NextAuth(authOptions);
