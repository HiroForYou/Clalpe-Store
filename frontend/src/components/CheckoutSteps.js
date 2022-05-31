import React from "react";
import { Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className="justify-content-center mb-4">
      <NavItem>
        {step1 ? (
          <LinkContainer to="/login">
            <Nav.Link>Iniciar Sesión</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Iniciar Sesión</Nav.Link>
        )}
      </NavItem>

      <NavItem>
        {step2 ? (
          <LinkContainer to="/shipping">
            <Nav.Link>Envío</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Envío</Nav.Link>
        )}
      </NavItem>

      <NavItem>
        {step3 ? (
          <LinkContainer to="/payment">
            <Nav.Link>Pago</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Pago</Nav.Link>
        )}
      </NavItem>

      <NavItem>
        {step4 ? (
          <LinkContainer to="/placeorder">
            <Nav.Link>Realizar Pedido</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Realizar Pedido</Nav.Link>
        )}
      </NavItem>
    </Nav>
  );
};

export default CheckoutSteps;
