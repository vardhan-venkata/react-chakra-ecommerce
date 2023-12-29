import React from "react";
import { Box, Heading } from "@chakra-ui/react";

function Footer() {
  return (
    <Box backgroundColor={"blueviolet"} minHeight={"80px"} color={"white"}>
      {" "}
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
        <Box>Social Media Icons</Box>
        <Box>
          <Heading>FH</Heading>
        </Box>
      </Box>
      Copyright reserved 2023
    </Box>
  );
}

export default Footer;
