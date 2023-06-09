import { styled } from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <StyledTitle>About</StyledTitle>
      <StyledParagraph>
        Being in the IT field for 14 years, In 2022, I decided to enroll myself
        into the Concordia Coding Bootcamp. I was looking for a new challenge
        and fell in love with web developpment.
      </StyledParagraph>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 0px;
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
