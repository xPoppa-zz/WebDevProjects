import { Box, Button, Heading, HStack, VStack } from "@chakra-ui/react";

import { NewQandA } from "../Home/HeroContainerHome";
import he from "he";

/*
{response_code: 0, results: Array(5)}

results = [{},{},{},{},{}]

results[0] = {
	category: "History"
	correct_answer: "Brazil"
	difficulty: "medium"
	incorrect_answers: (3) ['India', 'Mozambique', 'Madagascar']
	question: "Which of these countries was sea charted in 1500 by the Portuguese maritime explorations?"
	type: "multiple"
};
*/

interface Props {
	data: NewQandA;
	id: number;
	key: number;
	clicked: (event: any, uniqueQuestionId: number, answer: string) => void;
	checkAnswers: boolean;
}

const Questions = ({ data, id, clicked, checkAnswers }: Props) => {
	const answerElements = data.answers.map((answer: string, idx: number) => {
		return checkAnswers ? (
			<Box
				as={Button}
				colorScheme={
					answer === data.correct_answer && data.chosen_answer === answer
						? "rightAnswers"
						: answer === data.chosen_answer
						? "wrongAnswers"
						: data.correct_answer === answer
						? "rightAnswers"
						: "answers"
				}
				variant={
					answer === data.correct_answer && data.chosen_answer === answer
						? "solid"
						: answer === data.chosen_answer
						? "solid"
						: data.correct_answer === answer
						? "solid"
						: "outline"
				}
				opacity={
					answer === data.correct_answer && data.chosen_answer === answer
						? "1"
						: answer === data.chosen_answer
						? "0.5"
						: data.correct_answer === answer
						? "1"
						: "0.5"
				}
				color="#293264"
				fontWeight={"medium"}
				size="answers"
				borderRadius="1rem"
				key={idx}
			>
				{answer}
			</Box>
		) : (
			<Box
				as={Button}
				colorScheme="answers"
				borderRadius="1rem"
				fontWeight={"medium"}
				key={idx}
				variant={data.chosen_answer === answer ? "solid" : "outline"}
				onClick={(event: any) => {
					clicked(event, id, answer);
				}}
				size="answers"
			>
				{he.decode(answer)}
			</Box>
		);
	});

	return (
		<VStack>
			<Heading fontSize="3xl" color="heading.500">
				{he.decode(data.question)}
			</Heading>
			<HStack maxW="100vw">{answerElements}</HStack>
		</VStack>
	);
};

export default Questions;
