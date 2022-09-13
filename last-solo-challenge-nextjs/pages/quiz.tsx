import { Flex, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import HeroContainerQuizPage from "../components/QuizPage/HeroContainerQuizPage";

const Quiz: NextPage = () => {
	return (
		<Flex>
			<HeroContainerQuizPage />
		</Flex>
	);
};

export default Quiz;
