import styled from "styled-components";
import Wrapper from "./Wrapper";

const Projects = () => {
  return (
    <Wrapper animationDelay={1}>
      <StyledTitle id="projects">Projects</StyledTitle>
      <p>Projects to come!</p>
    </Wrapper>
  );
};
const StyledTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 0px;
`;

export default Projects;
