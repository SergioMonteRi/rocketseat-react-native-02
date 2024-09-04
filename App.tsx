import { ThemeProvider } from "styled-components/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

import {Players} from "@screens/Players";
import { Groups } from "@screens/Groups";
import {NewGroup} from "@screens/NewGroup";

import Loading from "@components/Loading";

import theme from "./src/theme";

const Roboto_400Regular = require("./assets/fonts/Roboto-Regular.ttf");
const Roboto_700Bold = require("./assets/fonts/Roboto-Bold.ttf");

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      {fontsLoaded ? <Players /> : <Loading />}
    </ThemeProvider>
  );
}
