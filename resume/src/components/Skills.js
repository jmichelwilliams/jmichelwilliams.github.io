import { styled } from "styled-components";

const Skills = () => {
  return (
    <Wrapper>
      <StyledTitle>Skills</StyledTitle>
      <BoxContainer>
        <Box>
          <SubTitle>Front End</SubTitle>
          <StyledParagraph>
            React, Styled-Components, JavaScript, HTML5, CSS, ES6
          </StyledParagraph>
        </Box>

        <Box>
          <SubTitle>Back End</SubTitle>
          <StyledParagraph>Node.js, Express.js</StyledParagraph>
        </Box>
        <Box>
          <SubTitle>Tools</SubTitle>
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
  margin-top: 16px;
`;

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 200px;
  border: 4px solid black;
  border-radius: 16px;
`;

const StyledParagraph = styled.p`
  width: 100%;
  word-wrap: break-word;
  font-size: 18px;
  text-align: center;
`;

const StyledTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 4px;
`;

const SubTitle = styled.h3`
  font-size: 30px;
  margin: 8px;
`;

export default Skills;
