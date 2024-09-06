import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import { Routes } from "@routes/index";

import { Loading } from "@components/Loading";

import theme from "./src/theme";

const Roboto_400Regular = require("./assets/fonts/Roboto-Regular.ttf");
const Roboto_700Bold = require("./assets/fonts/Roboto-Bold.ttf");

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
