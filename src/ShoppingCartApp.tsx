import { Container } from "react-bootstrap";
import { NavBar } from "./components/NavBar";

import { Outlet } from "react-router-dom";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { ShoppingCart } from "./components/ShoppingCart";

export const ShoppingCartApp = () => {
  return (
    <ShoppingCartProvider>
      <ShoppingCart />
      <NavBar />

      <Container className="mb-4 mx-auto">
        <Outlet />
      </Container>
    </ShoppingCartProvider>
  );
};
