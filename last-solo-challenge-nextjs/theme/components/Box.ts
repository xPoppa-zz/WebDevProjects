const Box = {
	// 1. We can update the base styles
	baseStyle: {
		fontWeight: "semibold", // Normally, it is "semibold"
		fontSize: "16px",
		color: "#293264",
	},
	// 2. We can add a new button size or extend existing
	sizes: {
		answers: {
			h: "2.5rem",
			minW: "7.5rem",
			fontSize: "1.25rem",
			px: "2.5rem",
			py: "0.9rem",
		},
		start: {
			h: "5rem",
			w: "20rem",
			fontSize: "1.6rem",
		},

		mainQuiz: {
			h: "4rem",
			w: "12rem",
			fontSize: "1.2rem",
		},
	},
	// 3. We can add a new visual variant
	variants: {
		"with-shadow": {
			bg: "red.400",
			boxShadow: "0 0 2px 2px #efdfde",
		},

		mainButtons: {
			bg: "#4D5B9E",
			borderRadius: "1rem",
			color: "white",
		},

		answersGeneral: {
			border: "1px solid",
			bg: "transparent",
			borderColor: "#4D5B9E",
		},

		answersClicked: {
			bg: "#D6DBF5",
		},

		answersRight: {
			bg: "#94D7A2",
		},

		answersWrong: {
			bg: "#F8BCBC",
		},
	},
};

export default Box;
