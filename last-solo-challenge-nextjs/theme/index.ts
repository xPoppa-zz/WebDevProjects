import { extendTheme } from "@chakra-ui/react";

// Component style overrides
import Button from "./components/Button";
import Box from "./components/Box";

const overrides = {
	colors: {
		answers: {
			"50": "#eaecf6",
			"100": "#cdd1ea",
			"200": "#b3b9e0",
			"300": "#909ad2",
			"400": "#7380c6",
			"500": "#707dc4",
			"600": "#4858b0",
			"700": "#4251a2",
			"800": "#3c4992",
			"900": "#293264",
		},
		rightAnswers: {
			"500": "#94D7A2",
			"600": "#94D7A2",
			"700": "#94D7A2",
		},
		wrongAnswers: {
			"500": "#F8BCBC",
			"600": "#F8BCBC",
			"700": "#F8BCBC",
		},
		heading: {
			"500": "#293264",
		},
	},
	fonts: {
		body: "Inter",
		heading: "Karla",
	},
	// Other foundational style overrides go here
	components: {
		Button: Button,
		Box: Box,
	},
	// Other components go here
};

export default extendTheme(overrides);
