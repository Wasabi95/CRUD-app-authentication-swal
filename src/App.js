// npm install bootstrap
// npm install react-bootstrap


import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Create from "./Create";
import Read from "./Read";
import Update from "./Update";
import Delete from "./Delete";

const App = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 3, text: "Item 3" },
  ]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleAddItem = (text) => {
    setItems([...items, { id: Date.now(), text }]);
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
    setSelectedItem(null);
  };

  const handleUpdateItem = (id, text) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, text } : item))
    );
    setSelectedItem(null);
  };

  return (
    <Container fluid="sm" style={{ textAlign: "center", marginTop: "90px" }}>
      <Create onAdd={handleAddItem} />
      <Read
        items={items}
        onDelete={(id) => setSelectedItem({ id, type: "DELETE" })}
        onUpdate={(item) => setSelectedItem({ item, type: "UPDATE" })}
      />
      {selectedItem?.type === "UPDATE" && (
        <Update
          item={selectedItem.item}
          onUpdate={(id, text) => handleUpdateItem(id, text)}
        />
      )}
      {selectedItem?.type === "DELETE" && (
        <Delete
          item={items.find((item) => item.id === selectedItem.id)}
          onDelete={(id) => handleDeleteItem(id)}
        />
      )}
    </Container>
  );
};

export default App;
