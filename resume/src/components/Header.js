import styled from "styled-components";
import profilePic from "../images/JamesProfilePicture.jpeg";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Header = () => {
  return (
    <div>
      <div>
        <img src={profilePic}></img>
      </div>
      <div>
        <List>
          <li>
            <FiGithub />
          </li>
          <li>
            <FiLinkedin />
          </li>
          <li>
            <FiMail />
          </li>
        </List>
      </div>
    </div>
  );
};

const List = styled.ul`
  list-style-type: style none;
`;
export default Header;
