import Header from './Header';
import Navbar from './Navbar';
import { styled } from 'styled-components';
import GlobalStyle from '../GlobalStyles';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Wrapper>
        <GlobalStyle />
        <Header />
        <Navbar />
        <About />
        <Skills />
        <Projects />
        <Education />
      </Wrapper>
    </Router>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 85%;
  }
`;

export default App;
