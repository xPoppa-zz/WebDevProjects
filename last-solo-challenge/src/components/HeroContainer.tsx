import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import HomePage from "./HomePage";
import QuizPage from "./QuizPage";

// https://github.com/SXV357/Quizzical----Scrimba-Learn-React-Final_Project

/* 
	-	Add styling to other buttons Check
	-	Add styling to Headings, Text etc. Check
	-	Produce the website on GitHub :) TODO.
*/

interface Categories {
	trivia_categories: Category[];
}

interface Category {
	id: number;
	name: string;
}

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

const HeroContainer = () => {
	const [data, setData] = useState([empty]);
	const [responseCode, setResponseCode] = useState(number);
	const [newQuestions, setNewQuestions] = useState(false);
	const [clicked, setClicked] = useState(false);
	const [count, setCount] = useState(0);
	const [randomIndex, setRandomIndex] = useState(0);

	const handleNewQuestions = () => {
		setNewQuestions((prevState) => !prevState);
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const Categories: Categories = {
		trivia_categories: [
			{ id: 9, name: "General Knowledge" },
			{ id: 10, name: "Entertainment: Books" },
			{ id: 11, name: "Entertainment: Film" },
			{ id: 12, name: "Entertainment: Music" },
			{ id: 13, name: "Entertainment: Musicals & Theatres" },
			{ id: 14, name: "Entertainment: Television" },
			{ id: 15, name: "Entertainment: Video Games" },
			{ id: 16, name: "Entertainment: Board Games" },
			{ id: 17, name: "Science & Nature" },
			{ id: 18, name: "Science: Computers" },
			{ id: 19, name: "Science: Mathematics" },
			{ id: 20, name: "Mythology" },
			{ id: 21, name: "Sports" },
			{ id: 22, name: "Geography" },
			{ id: 23, name: "History" },
			{ id: 24, name: "Politics" },
			{ id: 25, name: "Art" },
			{ id: 26, name: "Celebrities" },
			{ id: 27, name: "Animals" },
			{ id: 28, name: "Vehicles" },
			{ id: 29, name: "Entertainment: Comics" },
			{ id: 30, name: "Science: Gadgets" },
			{ id: 31, name: "Entertainment: Japanese Anime & Manga" },
			{ id: 32, name: "Entertainment: Cartoon & Animations" },
		],
	};

	useEffect(() => {
		const selectCategory = async () => {
			const response = await fetch("https://opentdb.com/api_category.php");
			const _data: Categories = await response.json();
			const dataCategories: number[] = _data.trivia_categories.map(
				(dataPoint: Category) => {
					return dataPoint.id;
				}
			);
			const randomCategory: number =
				dataCategories[Math.floor(Math.random() * dataCategories.length)];

			setRandomIndex(randomCategory);
		};
		selectCategory();

		const getData = async () => {
			const response = await fetch(
				`https://opentdb.com/api.php?amount=5&category=${randomIndex}&type=multiple`
			);
			const _data: Data = await response.json();
			setData(
				_data.results.map((obj) => {
					return {
						...obj,
						answers: obj.incorrect_answers
							.concat(obj.correct_answer)
							.sort(() => Math.random() - 0.5)
							.map((value) => value),
						chosen_answer: undefined,
					};
				})
			);

			setResponseCode(_data.response_code);
			return _data;
		};
		getData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [newQuestions]);

	const handleClick = () => {
		setClicked((prevState) => !prevState);
	};

	const handleAnswer = (
		event: any,
		uniqueQuestionId: number,
		answer: string
	) => {
		setData((prevData) => {
			const newData = [...prevData];
			newData[uniqueQuestionId].chosen_answer = answer;
			return newData;
		});
	};

	const answerCounter = (event: any, data: NewQandA[]) => {
		data.forEach((element) => {
			if (element.chosen_answer === element.correct_answer) {
				setCount((prevCount) => prevCount + 1);
			}
		});
	};
	const resetCount = () => {
		setCount(0);
	};
	return (
		<Flex
			justify="start"
			align="end"
			w="100vw"
			h="100vh"
			backgroundImage="blob6.png"
			backgroundPosition="left bottom"
			backgroundRepeat="no-repeat"
		>
			<Flex
				h="100vh"
				w="100vw"
				backgroundImage="blob5.png"
				backgroundPosition="right top"
				backgroundRepeat="no-repeat"
			>
				<Flex justify="center" align="center" h="100vh" w="80vw" ml="10vw">
					{clicked ? (
						<QuizPage
							data={data}
							responseCode={responseCode}
							handleClick={handleNewQuestions}
							clicked={handleAnswer}
							counter={answerCounter}
							count={count}
							resetCount={resetCount}
						/>
					) : (
						<HomePage handleClick={handleClick} clicked={clicked} />
					)}
				</Flex>
			</Flex>
		</Flex>
	);
};

export default HeroContainer;
