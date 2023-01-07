import { prisma } from "/prisma/client.js";

export default async function handler(req, res) {
	const questionCount = await prisma.Question.count();
	const skip = Math.floor(Math.random() * questionCount);
	const randomQuestion = await prisma.Question.findFirst({
		take: 1,
		skip: skip,
		select: {
			id: true,
		},
	});
    res.status(200).json(randomQuestion.id)
}
