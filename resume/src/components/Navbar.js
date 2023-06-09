import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import ButtonGroup from "@mui/material/ButtonGroup";
import { styled } from "@mui/material/styles";

const Navbar = () => {
  return (
    <Box>
      <ButtonGroup
        variant="text"
        aria-label="text button group"
        color="secondary"
      >
        <CustomizedButton>About</CustomizedButton>
        <CustomizedButton>Skills</CustomizedButton>
        <CustomizedButton>Projects</CustomizedButton>
        <CustomizedButton>Education</CustomizedButton>
      </ButtonGroup>
    </Box>
  );
};

const CustomizedButton = styled(Button)`
  width: 150px;
  color: black;
  font-size: 20px;
`;

export default Navbar;
