import styled from "styled-components";
import Wrapper from "./Wrapper";

const Education = () => {
  return (
    <Wrapper animationDelay={1.2}>
      <StyledTitle id="education">Education</StyledTitle>
      <StyledSchool>Concordia University</StyledSchool>
      <StyledParagraph>
        Full Stack Web Development Bootcamp - Computer Programming Jan 2023 -
        Aug 2023
      </StyledParagraph>
    </Wrapper>
  );
};

const StyledTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 0px;
`;

const StyledSchool = styled.h3`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 0px;
`;
const StyledParagraph = styled.p`
  font-size: 16px;
  line-height: 28px;
  color: rgb(151, 255, 255);
`;

export default Education;
