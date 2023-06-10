import { styled } from "styled-components";

const Skills = () => {
  return (
    <Wrapper>
      <StyledTitle>Skills</StyledTitle>
      <BoxContainer>
        <Box>
          <TitleContainer>
            <SubTitle>Front End</SubTitle>
            <WindowButtons>
              <CloseButton />
              <MinimizeButton />
              <MaximizeButton />
            </WindowButtons>
          </TitleContainer>
          <StyledParagraph>
            React, Styled-Components, JavaScript, HTML5, CSS, ES6, Debugging
          </StyledParagraph>
        </Box>
        <Box>
          <TitleContainer>
            <SubTitle>Back End</SubTitle>
            <WindowButtons>
              <CloseButton />
              <MinimizeButton />
              <MaximizeButton />
            </WindowButtons>
          </TitleContainer>
          <StyledParagraph>Node.js, Express</StyledParagraph>
        </Box>
        <Box>
          <TitleContainer>
            <SubTitle>Tools</SubTitle>
            <WindowButtons>
              <CloseButton />
              <MinimizeButton />
              <MaximizeButton />
            </WindowButtons>
          </TitleContainer>
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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 4px solid rgb(151, 255, 255);
  width: 100%;
  position: relative;
`;

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 200px;
  border: 4px solid rgb(151, 255, 255);
  border-radius: 16px;
  position: relative;
  margin-bottom: 16px;
`;

const StyledParagraph = styled.p`
  width: 100%;
  word-wrap: break-word;
  font-size: 18px;
  text-align: center;
  line-height: 28px;
  padding: 8px;
  margin: 0;
  height: 100%;
`;

const StyledTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 4px;
`;

const SubTitle = styled.h3`
  font-size: 30px;
  margin-top: 28px;
  margin-bottom: 8px;
`;

const WindowButtons = styled.div`
  position: absolute;
  top: 8px;
  right: 135px;
  display: flex;
`;

const WindowButton = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 6px;
`;

const CloseButton = styled(WindowButton)`
  background-color: #ff5f57;
`;

const MinimizeButton = styled(WindowButton)`
  background-color: #ffbd2e;
`;

const MaximizeButton = styled(WindowButton)`
  background-color: #28c940;
`;

export default Skills;
