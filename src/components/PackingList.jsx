/* eslint-disable react/prop-types */
import { useState } from "react";
import Item from "./Item";

function PackingList({ tripItems, handleCheck, handleDelete, onDeleteItem }) {
  const [sortBy, setSortBy] = useState("input");
  function handleOnClick() {
    const result = confirm("Do you want to delete all items");
    if (result) {
      handleDelete();
    }
  }
  let sortedItem;
  if (sortBy === "input") {
    sortedItem = tripItems;
  }

  if (sortBy === "description") {
    sortedItem = tripItems
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    sortedItem = tripItems
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <>
      <div className="list">
        <ul>
          {sortedItem.map((item) => {
            return (
              <Item
                key={item.id}
                item={item}
                handleCheck={handleCheck}
                handleOnDeleteItem={onDeleteItem}
              />
            );
          })}
        </ul>

        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by Alpabhetically</option>
            <option value="packed">Sort by packed status</option>
          </select>
          <button onClick={handleOnClick}>Clear List</button>
        </div>
      </div>
    </>
  );
}

export default PackingList;
