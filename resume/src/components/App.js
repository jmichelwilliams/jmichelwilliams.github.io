import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import { styled } from "styled-components";
import GlobalStyle from "../GlobalStyles";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import { useTheme, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "rgb(115, 87, 185)",
    },
    secondary: {
      main: "#ffea00",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Navbar />
        <About />
        <Skills />
        <Projects />
        <Education />
      </Wrapper>
    </ThemeProvider>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
`;

export default App;
