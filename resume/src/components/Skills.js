import { styled } from "styled-components";

const Skills = () => {
  return (
    <Wrapper>
      <h2>Skills</h2>
      <BoxContainer>
        <Box>
          <h3>Front End</h3>
          <StyledParagraph>
            React, Styled-Components, JavaScript, HTML5, CSS, ES6
          </StyledParagraph>
        </Box>

        <Box>
          <h3>Back End</h3>
          <StyledParagraph>Node.js, Express.js</StyledParagraph>
        </Box>
        <Box>
          <h3>Tools</h3>
          <StyledParagraph>Github, Jira, npm</StyledParagraph>
        </Box>
      </BoxContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 150px;
`;

const StyledParagraph = styled.p`
  width: 100%;
  word-wrap: break-word;
`;
export default Skills;
