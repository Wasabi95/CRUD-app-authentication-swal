import React from "react";
import { ListGroup, Button } from "react-bootstrap";

const Read = ({ items, onDelete, onUpdate }) => {
  return (
    <ListGroup>
      {items.map((item) => (
        <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center mb-2">
          <span>{item.text}</span>
          <div>
            <Button variant="danger" onClick={() => onDelete(item.id)}>
              Delete
            </Button>
            <Button
              variant="primary"
              onClick={() => onUpdate(item)}
              className="ml-2"
            >
              Update
            </Button>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Read;
