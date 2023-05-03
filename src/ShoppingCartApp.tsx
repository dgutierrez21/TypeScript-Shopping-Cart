import { Container } from "react-bootstrap";
import { NavBar } from "./components/NavBar";

import { Outlet } from "react-router-dom";

export const ShoppingCartApp = () => {
  return (
    <>
      <NavBar />
      <Container className="mb-4">
        <Outlet />
      </Container>
    </>
  );
};
