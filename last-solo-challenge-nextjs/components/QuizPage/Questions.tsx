import {
	Box,
	Button,
	Flex,
	Heading,
	HStack,
	useColorModeValue,
	VStack,
} from "@chakra-ui/react";

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

// Fix styling of the box so that you have the sae as the buttons just to get the text nicely aligned with each other. Do this tommorow bro. Check.

interface Props {
	data: NewQandA;
	id: number;
	key: number;
	clicked: (event: any, uniqueQuestionId: number, answer: string) => void;
	checkAnswers: boolean;
}

const Questions = ({ data, id, clicked, checkAnswers }: Props) => {
	const color = useColorModeValue("#293264", "white");
	const headingColor = useColorModeValue("heading.500", "answers.300");
	let answerElements = [<Box key={5}></Box>];
	if (data !== undefined) {
		answerElements = data.answers.map((answer: string, idx: number) => {
			return checkAnswers ? (
				<Box
					as="button"
					bg={
						answer === data.correct_answer && data.chosen_answer === answer
							? "rightAnswers.500"
							: answer === data.chosen_answer
							? "wrongAnswers.500"
							: data.correct_answer === answer
							? "rightAnswers.500"
							: "transparent"
					}
					_hover={{
						background:
							answer === data.correct_answer && data.chosen_answer === answer
								? "rightAnswers.500"
								: answer === data.chosen_answer
								? "wrongAnswers.500"
								: data.correct_answer === answer
								? "rightAnswers.500"
								: "answers.500",
					}}
					textAlign="center"
					alignContent={"center"}
					borderWidth="1px"
					borderColor={
						answer === data.correct_answer && data.chosen_answer === answer
							? "rightAnswers.500"
							: answer === data.chosen_answer
							? "wrongAnswers.500"
							: data.correct_answer === answer
							? "rightAnswers.500"
							: "answers.500"
					}
					borderStyle="solid"
					borderRadius="1rem"
					opacity={
						answer === data.correct_answer && data.chosen_answer === answer
							? "1"
							: answer === data.chosen_answer
							? "0.5"
							: data.correct_answer === answer
							? "1"
							: "0.5"
					}
					color={color}
					fontWeight={"medium"}
					minH="2.5rem"
					minW="7.5rem"
					fontSize="1.25rem"
					px="2.5rem"
					py="0.9rem"
					key={idx}
				>
					{answer}
				</Box>
			) : (
				<Box
					as="button"
					bg={data.chosen_answer === answer ? "answers.500" : "transparent"}
					_hover={{ background: "answers.500" }}
					borderRadius="1rem"
					fontWeight={"medium"}
					key={idx}
					borderWidth="1px"
					borderColor="answers.500"
					borderStyle="solid"
					minH="2.5rem"
					minW="7.5rem"
					fontSize="1.25rem"
					px="2.5rem"
					py="0.9rem"
					color={color}
					onClick={(event: any) => {
						clicked(event, id, answer);
					}}
				>
					{he.decode(answer)}
				</Box>
			);
		});
	} else {
		answerElements = [<Box key={500}>No Data yet</Box>];
	}

	return (
		<VStack>
			<Heading fontSize="3xl" color={headingColor}>
				{he.decode(data.question)}
			</Heading>
			<Flex direction={{ base: "column", md: "row" }} maxW="100vw">
				{answerElements}
			</Flex>
		</VStack>
	);
};

export default Questions;
