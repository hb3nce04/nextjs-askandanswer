import { prisma } from "/prisma/client.js";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import Breadcrumb from '../../components/Breadcrumb'
import QuestionItem from "../../components/QuestionItem";

export default function Questions({ questions, category, topic }) {
	const router = useRouter();

	const pathNums = router.query.params.length;

	const otherPaths = [];

	if (pathNums > 1) {
		otherPaths.push({
			name: category.name,
			link: `/categories/${category.id}`,
		});
	}

	return (
		<>
			<Breadcrumb
				activeLinks={[
					{ name: "Főoldal", link: "/" },
					...otherPaths
				]}
				currentPage={pathNums == 1 ? category.name : topic.name }
			/>
			<Typography align="center" variant="h4">
				Legfrissebb kérdések{" "}
				{(pathNums == 1 ? category.name : topic.name).toLowerCase()}{" "}
				{(pathNums == 1 ? "kategóriában" : "témában").toLowerCase()}:
			</Typography>
			{questions.length > 0 ? (
				questions.map((question) => {
					return (
						<QuestionItem
							id={question.id}
							title={question.title}
							topic={question.Topic.name}
							category={question.Topic.Category.name}
							key={question.id}
						/>
					);
				})
			) : (
				<Typography variant="h5">
					Ebben a{" "}
					{(pathNums == 1 ? "kategóriában" : "témában").toLowerCase()}{" "}
					nincs egyetlen egy kérdés sem!
				</Typography>
			)}
		</>
	);
}

export async function getServerSideProps(context) {
	const urlParams = context.params.params;
	const categoryId = parseInt(urlParams[0]);
	var topic = null;
	const topicId = parseInt(urlParams[2]) || 0; // ha nincs topic megadva
	var whereParams = { Topic: { categoryId: categoryId } }; // ha nincs topic megadva
	if (topicId != 0) {
		topic = await prisma.Topic.findUnique({ where: { id: topicId } });
		whereParams = { topicId: topicId };
	}
	const category = await prisma.Category.findUnique({
		where: { id: categoryId },
	});
	const questions = await prisma.Question.findMany({
		where: whereParams,
		include: {
			Topic: {
				include: {
					Category: true,
				},
			},
		},
	});
	questions.map((item) => {
		item.createdAt = item.createdAt.toString();
	});
	return { props: { questions, category, topic } };
}
