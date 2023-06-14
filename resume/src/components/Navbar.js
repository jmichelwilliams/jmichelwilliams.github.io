import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <CustomizedBox>
      <HashLink to="#about">
        <CustomizedButton>About</CustomizedButton>
      </HashLink>
      <HashLink to="#skills">
        <CustomizedButton>Skills</CustomizedButton>
      </HashLink>
      <HashLink to="#projects">
        <CustomizedButton>Projects</CustomizedButton>
      </HashLink>
      <HashLink to="#education">
        <CustomizedButton>Education</CustomizedButton>
      </HashLink>
    </CustomizedBox>
  );
};

const CustomizedButton = styled(Button)`
  width: 150px;
  color: rgb(248, 201, 46);
  background-color: #221266;
  font-size: 20px;
  border-radius: 28px;
  margin-right: 8px;
  margin-bottom: 16px;
  text-decoration: none;
  &:hover {
    background-color: ${deepPurple[500]};
  }
  @media (max-width: 768px) {
    text-decoration: none;
  }
`;

const CustomizedBox = styled(Box)`
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default Navbar;
