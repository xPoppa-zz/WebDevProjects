const Heading = {
	// style object for base or default style
	baseStyle: {
		fontWeight: "bold",
		fontSize: "2rem",
	},
	// styles for different sizes ("sm", "md", "lg")
	sizes: {
		bigHeading: {
			fontSize: "4rem",
			fontWeight: "bold",
		},

		question: {
			fontSize: "2rem",
			fontWeight: "bold",
		},
	},
	// styles for different visual variants ("outline", "solid")
	variants: {},
	// default values for 'size', 'variant' and 'colorScheme'
	defaultProps: {
		size: "question",
		variant: "",
		colorScheme: "",
	},
};

export default Heading;
