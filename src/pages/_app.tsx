import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { Provider as ReduxProvider, useDispatch } from "react-redux";
import { store } from "@/redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <MantineProvider>
        <Component {...pageProps} />
      </MantineProvider>
    </ReduxProvider>
  );
}
