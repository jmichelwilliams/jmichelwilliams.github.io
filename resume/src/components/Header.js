import styled from "styled-components";
import profilePic from "../images/JamesProfilePicture.jpeg";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Header = () => {
  return (
    <Wrapper>
      <ProfilePictureContainer>
        <ProfilePicture src={profilePic}></ProfilePicture>

        <List>
          <li>
            <Link href="https://github.com/jmichelwilliams?tab=repositories">
              <FiGithub
                style={{
                  height: "3em",
                  width: "3em",
                }}
              />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/james-michel-williams-9b11382b/">
              <FiLinkedin
                style={{
                  height: "3em",
                  width: "3em",
                  color: "rgb(45, 100, 188)",
                }}
              />
            </Link>
          </li>
          <li>
            <Link href="mailto:jmichelwilliams@gmail.com">
              <FiMail
                style={{
                  height: "3em",
                  width: "3em",
                  color: "white",
                }}
              />
            </Link>
          </li>
        </List>
      </ProfilePictureContainer>

      <div>
        <Name>James Michel-Williams</Name>
      </div>
    </Wrapper>
  );
};

const List = styled.ul`
  list-style: none;
  padding: 4px 8px;
`;

const ProfilePictureContainer = styled.div`
  display: flex;
  width: 150px;
  height: 150px;
`;
const ProfilePicture = styled.img`
  border-radius: 30px;
  width: 150px;
  margin-top: 4px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
`;

const Name = styled.h1`
  font-size: 30px;
  @media (max-width: 768px) {
    font-size: 28px;
    align-items: center;
  }
`;
export default Header;
