import styled from "styled-components";

const Projects = () => {
  return (
    <Wrapper>
      <StyledTitle id="projects">Projects</StyledTitle>
      <p>Projects to come!</p>
    </Wrapper>
  );
};
const StyledTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 0px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 12px;
  margin-top: 16px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;
export default Projects;
