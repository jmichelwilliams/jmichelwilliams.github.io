import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import ButtonGroup from "@mui/material/ButtonGroup";
import { styled } from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors";
const Navbar = () => {
  return (
    <CustomizedBox>
      {/* <ButtonGroup
        variant="contained"
        aria-label="text button group"
        sx={{
          color: deepPurple,
          margin: "8px 0px",
          "& > *": { mx: 2 },
          boxShadow: "none",
        }}
      > */}
      <CustomizedButton>About</CustomizedButton>
      <CustomizedButton>Skills</CustomizedButton>
      <CustomizedButton>Projects</CustomizedButton>
      <CustomizedButton>Education</CustomizedButton>
      {/* </ButtonGroup> */}
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
