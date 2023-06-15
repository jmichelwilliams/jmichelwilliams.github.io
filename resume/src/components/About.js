import { styled } from "styled-components";
import Wrapper from "./Wrapper";

const About = () => {
  return (
    <Wrapper animationDelay={0.3}>
      <StyledTitle id="about">About</StyledTitle>
      <Intro>Hello! I'm James!</Intro>
      <StyledParagraph>
        With nearly 14 years of experience in the IT industry, I bring a strong
        foundation in troubleshooting, teamwork, and agile methodologies using
        tools like Jira to my transition into web development. Enrolling in the
        Concordia Coding Bootcamp in 2023 ignited my passion for this field,
        where I combine my troubleshooting skills with coding to ensure seamless
        functionality of web applications. Eager to embark on this new journey,
        I am driven by a thirst for knowledge and a commitment to learn and grow
        as a web developer.
      </StyledParagraph>
    </Wrapper>
  );
};

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
