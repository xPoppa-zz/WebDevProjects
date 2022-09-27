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
	useColorMode,
} from "@chakra-ui/react";
import NextLink from "next/link";
import QuestionMenu from "./QuestionMenu";
import { useAppDispatch, useAppSelector } from "../../Redux/app/hooks";
import { setQuestions } from "../../Redux/features/Questions/questionsSlice";
import { setResponseCode } from "../../Redux/features/responseCode/responseCodeSlice";

/* :TODO
 	-	Put Menu's into seperate components Done
	-	Setup Redux to dispatch question data and other state that needs to dispatch. Done
	-	Change up the QuizPage, add state to QuizPage and function so the QuizPage works Done
	-	Add Breaking points Done
	-	Change question buttons to <box as="button" /> so the size increases and decreases with the text. Done
	-	Add Dark Mode Done
*/

export interface Data {
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
	const { amount, difficulty, type_question, category, category_number } =
		useAppSelector((state) => state.apiOptions.apiOptions);

	const questions = useAppSelector((state) => state.questions.questions);
	const { colorMode, toggleColorMode } = useColorMode();

	const getData = async () => {
		const url = `https://opentdb.com/api.php?${amount}${category_number}${difficulty}${type_question}`;

		const response = await fetch(
			`https://opentdb.com/api.php?${amount}${category_number}${difficulty}${type_question}`
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

		dispatch(setQuestions(fixedData));
		dispatch(setResponseCode(_data.response_code));
	};

	return (
		<Flex align={"start"} justify="end">
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
							onClick={() => {
								getData();
								console.log(`dispatched questions object: ${questions}`);
							}}
						>
							start quiz
						</Button>
					</NextLink>
				</VStack>
			</Flex>
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
