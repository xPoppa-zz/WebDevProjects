import { Button, Divider, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import Questions from "./Questions";
import { NewQandA } from "../Home/HeroContainerHome";

interface Props {
	data: NewQandA[];
	responseCode: number;
	handleClick: () => void;
	clicked: (event: any, uniqueQuestionId: number, answer: string) => void;
	counter: (event: any, data: NewQandA[]) => void;
	count: number;
	resetCount: () => void;
}

const QuizPage = ({
	data,
	responseCode,
	handleClick,
	clicked,
	counter,
	count,
	resetCount,
}: Props) => {
	const [newGame, setNewGame] = useState(false);

	const qAndA = data.map((obj, idx) => {
		return (
			<VStack spacing="3" key={idx}>
				<Questions
					key={idx}
					data={obj}
					id={idx}
					clicked={clicked}
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
								counter(event, data);
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
