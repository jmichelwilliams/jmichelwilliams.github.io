import Header from "./Header";
import Navbar from "./Navbar";
import { styled } from "styled-components";
import GlobalStyle from "../GlobalStyles";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

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
