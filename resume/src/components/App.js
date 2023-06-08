import Header from "./Header";
import { styled } from "styled-components";
import GlobalStyle from "../GlobalStyles";

const App = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
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
