import "./app.css";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Logo from "./components/Logo";
import Stats from "./components/Stats";
import { useState } from "react";

const initialItems = [];
let id = initialItems.length + 1;
function App() {
  const [tripItems, setTripItems] = useState(initialItems);
  function addItem(newItem) {
    setTripItems([...tripItems, { ...newItem, id: id++ }]);
  }
  function handleCheck(id) {
    const newItemList = tripItems.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });
    setTripItems(newItemList);
  }

  function deleteSelectedItem(id) {
    setTripItems(tripItems.filter((item) => item.id !== id));
  }

  function deleteAllItems() {
    setTripItems(initialItems);
  }
  return (
    <>
      <div className="app">
        <Logo heading="🏝️ Far Away 🧳" />
        <Form addItem={addItem} />
        <PackingList
          tripItems={tripItems}
          handleCheck={handleCheck}
          onDeleteItem={deleteSelectedItem}
          handleDelete={deleteAllItems}
        />
        <footer className="stats">
          <Stats items={tripItems} />
        </footer>
      </div>
    </>
  );
}

export default App;
