import Header from "./Header";
import Navbar from "./Navbar";
import { styled } from "styled-components";
import GlobalStyle from "../GlobalStyles";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";

const App = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Education />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default App;
