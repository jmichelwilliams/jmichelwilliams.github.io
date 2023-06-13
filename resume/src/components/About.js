import { styled } from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <StyledTitle id="about">About</StyledTitle>
      <Intro>Hello! I'm James!</Intro>
      <StyledParagraph>
        I started my journey in the Tech industry nearly 14 years ago as an IT
        Technician and over time became a MDM specialist. In 2022, I was looking
        for a new challenge and I decided to enroll myself into the Concordia
        Coding Bootcamp.{" "}
        <StyledSpan>I fell in love with web developpment.</StyledSpan> It's all
        I think about now 😄 I can apply certain skills such as{" "}
        <StyledSpan>Troubleshooting</StyledSpan> when I code. I'm eager to
        embark on this new journey and learn as much as I can.
      </StyledParagraph>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 0px;
  border-radius: 12px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const StyledTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 0px;
`;

const StyledParagraph = styled.p`
  font-size: 20px;
  line-height: 28px;
`;

const Intro = styled.h3`
  font-size: 26px;
  color: rgb(151, 255, 255);
`;

const StyledSpan = styled.span`
  color: rgb(151, 255, 255);
  font-weight: bold;
`;
export default About;
