import { ChevronDownIcon } from "@chakra-ui/icons";
import {
	Button,
	Flex,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/app/hooks";
import {
	setAmount,
	setDifficulty,
	setTypeQuestion,
	setCategory,
	setCategoryNumber,
} from "../../Redux/features/apiOptions/apiOptionsSlice";

// Change useState Hooks to Redux Dispatch hooks. Where needed. Done

interface Categories {
	trivia_categories: Category[];
}

interface Category {
	id: number;
	name: string;
}

const QuestionMenu = () => {
	const [triviaCategories, setTriviaCategories] = useState([""]);
	const dispatch = useAppDispatch();

	const amount = useAppSelector((state) => state.apiOptions.apiOptions.amount);
	const difficulty = useAppSelector(
		(state) => state.apiOptions.apiOptions.difficulty
	);
	const type_question = useAppSelector(
		(state) => state.apiOptions.apiOptions.type_question
	);
	const category = useAppSelector(
		(state) => state.apiOptions.apiOptions.category
	);
	const category_number = useAppSelector(
		(state) => state.apiOptions.apiOptions.category_number
	);

	const color = useColorModeValue("gray.800", "white");

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
		dispatch(setCategoryNumber(`&category=${catNumb[0].id.toString()}`));
	};

	const categories = triviaCategories.map((category, idx) => {
		return (
			<MenuItem
				key={idx}
				onClick={() => {
					dispatch(setCategory(category)), categoryNumber(category);
				}}
			>
				{category}
			</MenuItem>
		);
	});

	const N = 5;
	const amountQuestions = Array.from({ length: N }, (_, index) => index + 1);

	const selectAmount = amountQuestions.map((nr, idx) => {
		return (
			<MenuItem
				key={idx}
				onClick={() => dispatch(setAmount(`?amount=${nr.toString()}`))}
			>
				{nr}
			</MenuItem>
		);
	});

	return (
		<Flex>
			<Menu matchWidth={true}>
				{({ isOpen }) => (
					<>
						<MenuButton
							isActive={isOpen}
							as={Button}
							rightIcon={<ChevronDownIcon />}
							color={color}
						>
							{isOpen ? "Close" : category ? category : "Choose Categories"}
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
							color={color}
						>
							{isOpen ? "Close" : difficulty ? difficulty : "Choose Difficulty"}
						</MenuButton>
						<MenuList>
							<MenuItem onClick={() => dispatch(setDifficulty(""))}>
								Any
							</MenuItem>
							<MenuItem
								onClick={() => dispatch(setDifficulty("&difficulty=easy"))}
							>
								Easy
							</MenuItem>
							<MenuItem
								onClick={() => dispatch(setDifficulty("&difficulty=medium"))}
							>
								Medium
							</MenuItem>
							<MenuItem
								onClick={() => dispatch(setDifficulty("&difficulty=hard"))}
							>
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
							color={color}
						>
							{isOpen
								? "Close"
								: type_question
								? type_question
								: "Choose Question Type"}
						</MenuButton>
						<MenuList>
							<MenuItem onClick={() => dispatch(setTypeQuestion(""))}>
								Any
							</MenuItem>
							<MenuItem
								onClick={() => dispatch(setTypeQuestion("&type=multiple"))}
							>
								Multiple Choice
							</MenuItem>
							<MenuItem
								onClick={() => dispatch(setTypeQuestion("&type=boolean"))}
							>
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
							color={color}
						>
							{isOpen ? "Close" : amount ? amount : "Choose nr of Questions"}
						</MenuButton>
						<MenuList h="20vh" overflow="scroll">
							{selectAmount}
						</MenuList>
					</>
				)}
			</Menu>
		</Flex>
	);
};

export default QuestionMenu;
