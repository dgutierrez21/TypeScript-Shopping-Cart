import { Container } from "react-bootstrap";
import { NavBar } from "./components/NavBar";

import { Outlet } from "react-router-dom";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

export const ShoppingCartApp = () => {
  return (
    <ShoppingCartProvider>
      <NavBar />
      <Container className="mb-4">
        <Outlet />
      </Container>
    </ShoppingCartProvider>
  );
};
