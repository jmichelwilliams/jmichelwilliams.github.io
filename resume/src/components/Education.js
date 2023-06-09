import styled from "styled-components";

const Education = () => {
  return (
    <Wrapper>
      <StyledTitle>Education</StyledTitle>
      <h3>Concordia University</h3>
      <StyledParagraph>
        Full Stack Web Development, Computer ProgrammingFull Stack Web
        Development, Computer Programming Jan 2023 - Aug 2023
      </StyledParagraph>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 0px;
`;

const StyledParagraph = styled.p`
  font-size: 20px;
  line-height: 28px;
`;

export default Education;
