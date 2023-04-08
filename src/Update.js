import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Update = ({ item, onUpdate }) => {
  const [text, setText] = useState(item.text);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    onUpdate(item.id, text);
  };

  return (
    <Form onSubmit={onSubmit} className="d-flex align-items-center mb-2">
      <Form.Control
        type="text"
        placeholder="Edit item"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="mr-2"
        style={{ marginTop: "10px" }}
      />
      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  );
};

export default Update;
