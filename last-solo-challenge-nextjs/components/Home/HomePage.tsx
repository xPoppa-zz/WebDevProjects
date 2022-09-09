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

const HomePage = () => {
	const [data, setData] = useState([empty]);
	const [responseCode, setResponseCode] = useState(number);
	const [randomIndex, setRandomIndex] = useState(0);
	const [triviaCategories, setTriviaCategories] = useState([""]);
	const [selectedCategory, setSelectedCategory] = useState("");
	const [selectedCategoryNumber, setSelectedCategoryNumber] = useState("");
	const [difficulty, setDifficulty] = useState("");
	const [typeQuestion, setTypeQuestion] = useState("");
	const [amount, setAmount] = useState("");

	useEffect(() => {
		const selectDifferentOptions = async () => {
			const response = await fetch("https://opentdb.com/api_category.php");
			const _categories: Categories = await response.json();
			const categories: string[] = _categories.trivia_categories.map(
				(dataPoint: Category) => dataPoint.name
			);
			setTriviaCategories(categories);
		};
		selectDifferentOptions();
	}, []);

	const categoryNumber = async (category: string) => {
		const response = await fetch("https://opentdb.com/api_category.php");
		const _categories: Categories = await response.json();
		const catNumb: Category[] = _categories.trivia_categories.filter(
			(cat, idx) => cat.name === category
		);
		setSelectedCategoryNumber(catNumb[0].id.toString());
	};

	const categories = triviaCategories.map((category, idx) => {
		return (
			<MenuItem
				key={idx}
				onClick={() => {
					setSelectedCategory(category), categoryNumber(category);
				}}
			>
				{category}
			</MenuItem>
		);
	});

	const N = 50;
	const amountQuestions = Array.from({ length: N }, (_, index) => index + 1);

	const selectAmount = amountQuestions.map((nr, idx) => {
		return (
			<MenuItem key={idx} onClick={() => setAmount(`amount=${nr.toString()}`)}>
				{nr}
			</MenuItem>
		);
	});

	return (
		<Flex>
			<VStack spacing="10">
				<Heading fontSize="7xl">Quizzical</Heading>
				<Text>Are you ready for a quiz? Click start quiz</Text>
				<Menu matchWidth={true}>
					{({ isOpen }) => (
						<>
							<MenuButton
								isActive={isOpen}
								as={Button}
								rightIcon={<ChevronDownIcon />}
							>
								{isOpen ? "Close" : "Choose Categories"}
							</MenuButton>
							<MenuList overflow={"scroll"} h="20vh">
								{categories}
							</MenuList>
						</>
					)}
				</Menu>
				<Menu>
					{({ isOpen }) => (
						<>
							<MenuButton
								isActive={isOpen}
								as={Button}
								rightIcon={<ChevronDownIcon />}
							>
								{isOpen ? "Close" : "Choose Difficulty"}
							</MenuButton>
							<MenuList>
								<MenuItem onClick={() => setDifficulty("")}>Any</MenuItem>
								<MenuItem onClick={() => setDifficulty("difficulty=easy")}>
									Easy
								</MenuItem>
								<MenuItem onClick={() => setDifficulty("difficulty=medium")}>
									Medium
								</MenuItem>
								<MenuItem onClick={() => setDifficulty("difficulty=hard")}>
									Hard
								</MenuItem>
							</MenuList>
						</>
					)}
				</Menu>
				<Menu>
					{({ isOpen }) => (
						<>
							<MenuButton
								isActive={isOpen}
								as={Button}
								rightIcon={<ChevronDownIcon />}
							>
								{isOpen ? "Close" : "Choose Question Type"}
							</MenuButton>
							<MenuList>
								<MenuItem onClick={() => setTypeQuestion("")}>Any</MenuItem>
								<MenuItem onClick={() => setTypeQuestion("&type=multiple")}>
									Multiple Choice
								</MenuItem>
								<MenuItem onClick={() => setTypeQuestion("&type=boolean")}>
									True/False
								</MenuItem>
							</MenuList>
						</>
					)}
				</Menu>
				<Menu>
					{({ isOpen }) => (
						<>
							<MenuButton
								isActive={isOpen}
								as={Button}
								rightIcon={<ChevronDownIcon />}
							>
								{isOpen ? "Close" : "Choose nr of Questions"}
							</MenuButton>
							<MenuList h="20vh" overflow="scroll">
								{selectAmount}
							</MenuList>
						</>
					)}
				</Menu>
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

// const getData = async () => {
// 	const response = await fetch(
// 		`https://opentdb.com/api.php?amount=5&category=${randomIndex}&type=multiple`
// 	);
// 	const _data: Data = await response.json();
// 	setData(
// 		_data.results.map((obj) => {
// 			return {
// 				...obj,
// 				answers: obj.incorrect_answers
// 					.concat(obj.correct_answer)
// 					.sort(() => Math.random() - 0.5)
// 					.map((value) => value),
// 				chosen_answer: undefined,
// 			};
// 		})
// 	);

// 	setResponseCode(_data.response_code);
// 	return _data;
// };
