import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ButtonAppBar from "./MyNav";
const Layout = ({ children }) => {
  return (
    <Container maxWidth="xl">
      <ButtonAppBar />
      {children}
    </Container>
  );
};

export default Layout;
