import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Delete = ({ item, onDelete }) => {
  return (
    <Container className="text-center my-3">
      <Row>
        <Col>
          <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded">
            <h6 className="m-0">{item.text}</h6>
            <Button variant="danger" onClick={() => onDelete(item.id)}>
              Confirm
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Delete;

