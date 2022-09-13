import { Button, Divider, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import Questions from "./Questions";
import { NewQandA } from "../Home/HeroContainerHome";
import { useAppDispatch, useAppSelector } from "../../Redux/app/hooks";
import {
	updateChosenAnswer,
	setQuestions,
} from "../../Redux/features/Questions/questionsSlice";
import { Data } from "../Home/HomePage";
import { setResponseCode } from "../../Redux/features/responseCode/responseCodeSlice";

const QuizPage = () => {
	const [newGame, setNewGame] = useState(false);
	const [count, setCount] = useState(0);
	const [clicked, setClicked] = useState(false);

	const dispatch = useAppDispatch();
	const data: NewQandA[] = useAppSelector((state) => state.questions.questions);
	const { amount, difficulty, type_question, category, category_number } =
		useAppSelector((state) => state.apiOptions.apiOptions);

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

	const resetCount = () => {
		setCount(0);
	};

	const handleClick = () => {
		setClicked((prevState) => !prevState);
	};

	const answerCounter = (event: any, data: NewQandA[]) => {
		data.forEach((element) => {
			if (element.chosen_answer === element.correct_answer) {
				setCount((prevCount) => prevCount + 1);
			}
		});
	};

	const handleAnswer = (
		event: any,
		uniqueQuestionId: number,
		answer: string
	) => {
		dispatch(
			updateChosenAnswer({
				id: uniqueQuestionId,
				answer: answer,
			})
		);
	};

	const qAndA = data.map((obj, idx) => {
		return (
			<VStack spacing="3" key={idx}>
				<Questions
					key={idx}
					data={obj}
					id={idx}
					clicked={handleAnswer}
					checkAnswers={newGame}
				></Questions>
				<Divider />
			</VStack>
		);
	});

	const AllAnswersChecked = data.every((dataPoint) => {
		return dataPoint.chosen_answer !== undefined;
	});

	return (
		<Flex>
			<VStack>
				{qAndA}
				{!newGame ? (
					AllAnswersChecked ? (
						<Button
							onClick={(event: any) => {
								answerCounter(event, data);
								setNewGame((prevState) => !prevState);
							}}
							variant="mainButtons"
							size="mainQuiz"
						>
							Check answers
						</Button>
					) : (
						<HStack>
							<Button isDisabled variant="mainButtons" size="mainQuiz">
								Check Answers
							</Button>
						</HStack>
					)
				) : (
					<HStack>
						<Text>{`You had ${count}/${data.length} correct answers. Go another round?`}</Text>
						<Button
							onClick={(event: any) => {
								handleClick();
								setNewGame((prevState) => !prevState);
								resetCount();
								getData();
							}}
							variant="mainButtons"
							size="mainQuiz"
						>
							New Round
						</Button>
					</HStack>
				)}
			</VStack>
		</Flex>
	);
};

export default QuizPage;

// const handleNewQuestions = () => {
// 	setNewQuestions((prevState) => !prevState);
// };

// useEffect(() => {
// 	const selectCategory = async () => {
// 		const response = await fetch("https://opentdb.com/api_category.php");
// 		const _data: Categories = await response.json();
// 		const dataCategories: number[] = _data.trivia_categories.map(
// 			(dataPoint: Category) => {
// 				return dataPoint.id;
// 			}
// 		);
// 		const randomCategory: number =
// 			dataCategories[Math.floor(Math.random() * dataCategories.length)];

// 		setRandomIndex(randomCategory);
// 	};
// 	selectCategory();

// 	const getData = async () => {
// 		const response = await fetch(
// 			`https://opentdb.com/api.php?amount=5&category=${randomIndex}&type=multiple`
// 		);
// 		const _data: Data = await response.json();
// 		setData(
// 			_data.results.map((obj) => {
// 				return {
// 					...obj,
// 					answers: obj.incorrect_answers
// 						.concat(obj.correct_answer)
// 						.sort(() => Math.random() - 0.5)
// 						.map((value) => value),
// 					chosen_answer: undefined,
// 				};
// 			})
// 		);

// 		setResponseCode(_data.response_code);
// 		return _data;
// 	};
// 	getData();
// 	// eslint-disable-next-line react-hooks/exhaustive-deps
// }, [newQuestions]);

// const answerCounter = (event: any, data: NewQandA[]) => {
// 	data.forEach((element) => {
// 		if (element.chosen_answer === element.correct_answer) {
// 			setCount((prevCount) => prevCount + 1);
// 		}
// 	});
// };
// const resetCount = () => {
// 	setCount(0);
// }
