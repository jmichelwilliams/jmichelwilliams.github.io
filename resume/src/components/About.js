import { styled } from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <StyledTitle>About</StyledTitle>
      <StyledParagraph>
        Junior front-end developper looking for work! Recently discovered my
        passion for coding though a coding bootcamp at Concordia University. I
        have a strong drive to learn. Currently looking to start my carreer in
        web developpement.{" "}
      </StyledParagraph>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightgray;
  border-radius: 12px;
`;

const StyledTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 0px;
`;

const StyledParagraph = styled.p`
  font-size: 20px;
  line-height: 28px;
`;
export default About;
