import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Navbar = () => {
  return (
    <Stack direction="row" spacing={10}>
      <Button>About</Button>
      <Button>Skills</Button>
      <Button>Projects</Button>
      <Button>Education</Button>
    </Stack>
  );
};

export default Navbar;
