import { Flex } from "@chakra-ui/react";
import QuizPage from "./QuizPage";

const HeroContainerQuizPage = () => {
	return (
		<Flex>
			<Flex
				justify="start"
				align="end"
				w="100vw"
				minH="100vh"
				backgroundImage="blob6.png"
				backgroundPosition="left bottom"
				backgroundRepeat="no-repeat"
			>
				<Flex
					minH="100vh"
					w="100vw"
					backgroundImage="blob5.png"
					backgroundPosition="right top"
					backgroundRepeat="no-repeat"
				>
					<Flex justify="center" align="center" minH="100vh" w="80vw" ml="10vw">
						<QuizPage />
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default HeroContainerQuizPage;
