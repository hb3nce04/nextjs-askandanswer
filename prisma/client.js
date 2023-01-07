import { PrismaClient } from "@prisma/client";

export const prisma =
	process.env.NODE_ENV == "development"
		? new PrismaClient({
				log: ["query"],
		  })
		: new PrismaClient();
