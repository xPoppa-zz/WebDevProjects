import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import extendTheme from "../theme";
import { Provider } from "react-redux";
import store from "../Redux/app/store";

const theme = extendTheme;

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<ChakraProvider theme={theme}>
				<ColorModeScript initialColorMode={theme.config.initialColorMode} />
				<Component {...pageProps} />
			</ChakraProvider>
		</Provider>
	);
}

export default MyApp;
