import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

export default function about() {
  return (
    <div className="container m-5 text-center">
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://icon-library.com/images/user-icon-image/user-icon-image-13.jpg"
            />
            <Card.Body>
              <Card.Title>احمد الحربي</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://icon-library.com/images/user-icon-image/user-icon-image-13.jpg"
            />
            <Card.Body>
              <Card.Title>عدنان ابو السعود</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://icon-library.com/images/user-icon-image/user-icon-image-13.jpg"
            />
            <Card.Body>
              <Card.Title>عبدالله عقيل</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
