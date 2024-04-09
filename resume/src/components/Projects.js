import styled from 'styled-components';
import Wrapper from './Wrapper';
import projectPic from '../images/Homepage.png';

const Projects = () => {
  return (
    <Wrapper animationDelay={1}>
      <StyledTitle id="projects">Projects</StyledTitle>
      <ProjectWrapper>
        <ProjectContainer>
          <StyledProjectTitle>GardenHero</StyledProjectTitle>
          <Link href="https://garden-hero.vercel.app/">
            <ProjectImage src={projectPic} alt="GardenHero" />
          </Link>
          <Link href="https://github.com/jmichelwilliams/FinalProject-GardenHero">
            Link to Repo
          </Link>
        </ProjectContainer>
      </ProjectWrapper>
    </Wrapper>
  );
};

const StyledTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 0px;
`;
const StyledProjectTitle = styled.h3`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 16px;
`;

const Link = styled.a`
  color: white;
  font-size: 18px;
  margin-top: 8px;
`;
const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;
const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8px;
`;
const ProjectImage = styled.img`
  height: 200px;
  width: 400px;
  border-radius: 16px;

  @media (max-width: 576px) {
    width: 300px;
  }
`;
export default Projects;
