import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import HeroContainerHome from "../components/Home/HeroContainerHome";

const Home: NextPage = () => {
	return (
		<Flex>
			<HeroContainerHome />
		</Flex>
	);
};

export default Home;
