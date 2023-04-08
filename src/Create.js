import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Create = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("You need to type something");
      return;
    }
    onAdd(text);
    setText("");
    setIsTyping(false);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Add item</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter item"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Form.Group>
      <Button type="submit" variant="primary">
        Add
      </Button>
    </Form>
  );
};

export default Create;
