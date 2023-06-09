import styled from "styled-components";

const Projects = () => {
  return (
    <Wrapper>
      <StyledTitle>Projects</StyledTitle>
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
`;
export default Projects;
