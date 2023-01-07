import { prisma } from "/prisma/client.js";

import AnswerItem from "../../components/AnswerItem";

import Pagination from "../../components/Pagination";
import Rating from '@mui/material/Rating';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Breadcrumb from "../../components/Breadcrumb";


export default function Question({ question, answers, pagination }) {
	return (
		<>
			<Breadcrumb
				activeLinks={[
					{ name: "Főoldal", link: "/" },
					{ name: question.Topic.Category.name, link: "/categories/"+question.Topic.Category.id },
					{name: question.Topic.name, link: `/categories/${question.Topic.Category.id}/topics/${question.Topic.id}`}
				]}
				currentPage={question.title}
			/>
			<Card sx={{ boxShadow: 3, my: 2 }}>
				<CardContent>
					<Typography gutterBottom variant="h4" component="div" align="center">
						{question.title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{question.text}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{question.User.username} kérdése, {question.createdAt}
					</Typography>
					<Rating name="read-only" value={question.rating} precision={0.5} readOnly />
				</CardContent>
			</Card>
			{answers.length > 0 ? (
				answers.map((answer) => {
					return (
						<AnswerItem
							id={answer.id}
							text={answer.text}
							createdAt={answer.createdAt}
							username={answer.User.username}
							rating={answer.rating}
							key={answer.id}
						/>
					);
				})
			) : (
				<Typography variant="h5">
					Ehhez a kérdéshez még nem érkezett válasz!
				</Typography>
			)}
			{pagination.count > 0 && <Pagination count={pagination.count} />}
		</>
	);
}

export async function getServerSideProps(context) {
	const id = parseInt(context.params.id);
	const page = parseInt(context.query.page) || 1;
	const question = await prisma.Question.findUnique({
		where: { id: id },
		include: {
			Topic: {
				include: {
					Category: true,
				},
			},
			User: true
		},
	});
	question.createdAt = question.createdAt.toString();
	question.User.createdAt = question.User.createdAt.toString();
	const numberOfAnswers = await prisma.Answer.count({
		where: { questionId: id },
	});
	const answers = await prisma.Answer.findMany({
		include: {User: true},
		where: { questionId: id },
		skip: (page - 1) * 10,
		take: 10,
	});
	answers.map((item) => {
		item.createdAt = item.createdAt.toString();
		item.User.createdAt = item.User.createdAt.toString();
	});
	// questionrating
	const aggregations = await prisma.Rating_Question.aggregate({
		where: {questionId: question.id},
		_avg: {
			rating: true,
		},
	})
	question.rating = aggregations._avg.rating
	return {
		props: {
			question,
			answers,
			pagination: {
				count: parseInt(numberOfAnswers / 10),
			},
		},
	};
}
