import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
	Flex,
	IconButton,
	useColorMode,
	useColorModeValue,
} from "@chakra-ui/react";
import QuizPage from "./QuizPage";

const HeroContainerQuizPage = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const color = useColorModeValue("#293264", "white");
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
					<IconButton
						aria-label="darkMode-toggler"
						onClick={toggleColorMode}
						position="absolute"
						top="0"
						right={{ base: "25vw", md: "20vw" }}
						icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
						color={color}
						variant="ghost"
					/>
					<Flex
						justify="center"
						align="center"
						minH="100vh"
						w="80vw"
						ml="10vw"
						mt={{ base: "2rem", md: "0rem" }}
					>
						<QuizPage />
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default HeroContainerQuizPage;
