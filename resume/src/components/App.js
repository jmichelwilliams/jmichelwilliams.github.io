import Header from "./Header";
import Navbar from "./Navbar";
import { styled } from "styled-components";
import GlobalStyle from "../GlobalStyles";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";

const App = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <Navbar />
      <About />
      <Skills />
      <Projects />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  margin: 0 auto;
`;

export default App;
