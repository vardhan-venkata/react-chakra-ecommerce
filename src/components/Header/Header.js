import React from "react";
import { Link } from "react-router-dom";
import { Box, Heading, Text } from "@chakra-ui/react";
import "./Header.css";

function Header() {
  return (
    <Box
      height={"60px"}
      backgroundColor={"blueviolet"}
      color={"white"}
      padding={2}
      display={"flex"}
      flexDirection={"row"}
      position={"fixed"}
      top={0}
      width={"100%"}
      justifyContent={"space-between"}
    >
      <Box display={"flex"}>
        <Heading>FH</Heading>
      </Box>
      <Box className="nav_list">
        <Link to={"/"}>
          <Text className="nav_item">Home</Text>
        </Link>
        <Link to="/list-products">
          <Text className="nav_item">Products</Text>
        </Link>
        <Link to="/about">
          <Text className="nav_item">About</Text>
        </Link>
      </Box>
      <Box className="nav_list">
        <Link to="/login">
          <Text className="nav_item">Login</Text>
        </Link>
        <Link to="/signup">
          <Text className="nav_item">Signup</Text>
        </Link>
        <Link to="/cart">
          <Text className="nav_item">Cart</Text>
        </Link>
      </Box>
    </Box>
  );
}

export default Header;
