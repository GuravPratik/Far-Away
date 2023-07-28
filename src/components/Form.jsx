import { useState } from "react";

/* eslint-disable react/prop-types */
function Form({ addItem }) {
  const [itemDescription, setItemDescription] = useState("");
  const [itemQuantity, setItemQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!itemDescription) {
      alert("Please Enter product description");
      return;
    }
    const newItem = {
      description: itemDescription,
      quantity: itemQuantity,
      packed: false,
    };
    addItem(newItem);
    setItemDescription("");
    setItemQuantity(1);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="add-form">
        <h3>What do you need for your 😍 trip?</h3>
        <select
          value={itemQuantity}
          onChange={(e) => {
            setItemQuantity(e.target.value);
          }}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          value={itemDescription}
          onChange={(e) => setItemDescription(e.target.value)}
        />
        <button>Add</button>
      </form>
    </>
  );
}

export default Form;
