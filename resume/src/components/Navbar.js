import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors";
import { HashLink } from "react-router-hash-link";
import Wrapper from "./Wrapper";

const Navbar = () => {
  return (
    <Wrapper>
      <CustomizedBox>
        <CustomHashLink to="#about">
          <CustomizedButton>About</CustomizedButton>
        </CustomHashLink>
        <CustomHashLink to="#skills">
          <CustomizedButton>Skills</CustomizedButton>
        </CustomHashLink>
        <CustomHashLink to="#projects">
          <CustomizedButton>Projects</CustomizedButton>
        </CustomHashLink>
        <CustomHashLink to="#education">
          <CustomizedButton>Education</CustomizedButton>
        </CustomHashLink>
      </CustomizedBox>
    </Wrapper>
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
`;

const CustomizedBox = styled(Box)`
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CustomHashLink = styled(HashLink)`
  text-decoration: none;
`;
export default Navbar;
