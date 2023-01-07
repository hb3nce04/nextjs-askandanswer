import { prisma } from "/prisma/client.js";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import Box from "@mui/material/Box";
import QuestionItem from "../components/QuestionItem";
import { Typography } from "@mui/material";

export default function Questions({ categories }) {
	return (
		<>
			<Breadcrumb currentPage={"Főoldal"} />
			<Typography align="center" variant="h4">
				Üdvözlünk az oldalon látogató!
			</Typography>
			<Typography align="center" variant="h5">
				Legfrissebb kérdések
			</Typography>
			{categories.map((category) => {
				return (
					<Box sx={{ my: 1 }} key={category.id}>
						{category.questions.length == 0 ? (
							<Typography variant="span">
								{category.name} kategória: -
							</Typography>
						) : (
							<>
								<Typography variant="span">
									{category.name} kategória:
								</Typography>
								<Typography align="center" variant="span">
									<Link href={`/categories/${category.id}`}>
										További kérdések
									</Link>
								</Typography>
							</>
						)}
						{category.questions.length > 0
							? category.questions.map((question) => {
									return (
										<QuestionItem
											id={question.id}
											title={question.title}
											topic={question.Topic.name}
											key={question.id}
										/>
									);
							  })
							: null}
					</Box>
				);
			})}
		</>
	);
}

export async function getServerSideProps() {
	const categories = await prisma.Category.findMany();
	const data = await Promise.all(
		categories.map(async (item) => {
			const questions = await prisma.Question.findMany({
				where: {
					Topic: { categoryId: item.id },
				},
				include: {
					Topic: {
						include: {
							Category: true,
						},
					},
				},
				take: 3,
			});
			return { ...item, questions };
		})
	);
	data.map((item) => {
		const questions = item.questions;
		if (questions.length > 0) {
			questions.map((item) => {
				item.createdAt = item.createdAt.toString();
			});
		}
	});
	return { props: { categories: data } };
}
