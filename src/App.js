import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import ListProducts from "./components/Products/ListProducts";
import DetailedProduct from "./components/Products/DetailedProduct";
import About from "./components/About/About";

import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Box minHeight={"100vh"} marginTop={"60px"} paddingX={"20px"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list-products" element={<ListProducts />} />
            <Route path="/product" element={<DetailedProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Box>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
