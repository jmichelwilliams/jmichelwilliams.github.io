import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  return (
    <CustomizedBox>
      <Link to="#about">
        <CustomizedButton>About</CustomizedButton>
      </Link>
      <Link to="#skills">
        <CustomizedButton>Skills</CustomizedButton>
      </Link>
      <Link to="#projects">
        <CustomizedButton>Projects</CustomizedButton>
      </Link>
      <Link to="#education">
        <CustomizedButton>Education</CustomizedButton>
      </Link>
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

  &:hover {
    background-color: ${deepPurple[500]};
  }
`;

const CustomizedBox = styled(Box)`
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default Navbar;
