import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import HeroContainer from "./components/HeroContainer";
import extendTheme from "./theme/index";

const theme = extendTheme;

export const App = () => (
	<ChakraProvider theme={theme}>
		<HeroContainer />
	</ChakraProvider>
);

//
