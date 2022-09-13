import {
	Button,
	Flex,
	Heading,
	VStack,
	Text,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import QuestionMenu from "./QuestionMenu";
import { useAppDispatch, useAppSelector } from "../../Redux/app/hooks";

/* :TODO
 	-	Put Menu's into seperate components
	-	Setup Redux to dispatch question data and other state that needs to dispatch.
	-	Change up the QuizPage, add state to QuizPage and function so the QuizPage works
	-	Add Breaking points
	-	Change question buttons to <box as="button" /> so the size increases and decreases with the text.
	-	Add Dark Mode
*/

interface Data {
	response_code: number;
	results: QandA[];
}

interface QandA {
	category: string;
	correct_answer: string;
	difficulty: string;
	incorrect_answers: string[];
	question: string;
	type: string;
	clicked: boolean;
	id: number;
}

export interface NewQandA {
	category: string;
	correct_answer: string;
	difficulty: string;
	incorrect_answers: string[];
	question: string;
	type: string;
	clicked: boolean;
	id: number;
	answers: string[];
	chosen_answer?: string;
}

let empty: NewQandA;
let number: number;

const HomePage = () => {
	const dispatch = useAppDispatch();
	const { amount, difficulty, type_question, category } = useAppSelector(
		(state) => state.apiOptions.apiOptions as any
	);
	const [data, setData] = useState([empty]);
	const [responseCode, setResponseCode] = useState(number);
	const [randomIndex, setRandomIndex] = useState(0);

	const getData = async () => {
		const response = await fetch(
			`https://opentdb.com/api.php?${amount}${category}${difficulty}${type_question}`
		);
		const _data: Data = await response.json();
		const fixedData = _data.results.map((obj) => {
			return {
				...obj,
				answers: obj.incorrect_answers
					.concat(obj.correct_answer)
					.sort(() => Math.random() - 0.5)
					.map((value) => value),
				chosen_answer: undefined,
			};
		});
		dispatch(fixedData as any);

		setResponseCode(_data.response_code);
		return _data;
	};

	return (
		<Flex>
			<VStack spacing="10">
				<Heading fontSize="7xl">Quizzical</Heading>
				<Text>Are you ready for a quiz? Click start quiz</Text>
				<QuestionMenu />

				{/* Make a menu where people can choose which questions they want to have difficulty etc.*/}
				<NextLink href="/quiz" passHref>
					<Button
						variant={"mainButtons"}
						size="start"
						as="a"
						onClick={() => {}}
					>
						start quiz
					</Button>
				</NextLink>
			</VStack>
		</Flex>
	);
};

export default HomePage;

// const selectCategory = async () => {
// 	const response = await fetch("https://opentdb.com/api_category.php");
// 	const _data: Categories = await response.json();
// 	const dataCategories: number[] = _data.trivia_categories.map(
// 		(dataPoint: Category) => {
// 			return dataPoint.id;
// 		}
// 	);
// 	const randomCategory: number =
// 		dataCategories[Math.floor(Math.random() * dataCategories.length)];

// 	setRandomIndex(randomCategory);
// };
