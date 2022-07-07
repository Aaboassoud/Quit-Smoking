import React from "react";
import { Nav } from "react-bootstrap";

export default function nav() {
  return (
    <Nav className="fs-5" fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link className="text-danger" href="/">
          الرئيسية
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-danger" href="/about">
          من نحن
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-danger" href="/awareness">
          التوعية
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
