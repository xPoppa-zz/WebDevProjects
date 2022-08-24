import {
	Button,
	Flex,
	Heading,
	VStack,
	Text,
	Menu,
	MenuButton,
} from "@chakra-ui/react";

interface Props {
	clicked: boolean;
	handleClick: () => void;
}

const HomePage = (props: Props) => {
	return (
		<Flex>
			<VStack spacing="10">
				<Heading fontSize="7xl" color="heading.500">
					Quizzical
				</Heading>
				<Text>Are you ready for a quiz? Click start quiz</Text>
				<Menu>
					<MenuButton></MenuButton>
				</Menu>
				<Button
					variant={"mainButtons"}
					size="start"
					onClick={props.handleClick}
				>
					start quiz
				</Button>
			</VStack>
		</Flex>
	);
};

export default HomePage;
