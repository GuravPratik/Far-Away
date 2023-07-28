/* eslint-disable react/prop-types */
import { useState } from "react";
import Item from "./Item";

function PackingList({ tripItems, handleCheck, handleDelete, onDeleteItem }) {
  const [filterOption, setFilterOption] = useState("Order By Description");

  function handleOnClick() {
    const result = confirm("Do you want to delete all items");
    if (result) {
      handleDelete();
    }
  }

  return (
    <>
      <div className="list">
        <ul>
          {tripItems.map((item) => {
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
          <select
            value={filterOption}
            onChange={(e) => setFilterOption(e.target.value)}
          >
            <option value={filterOption}>{filterOption}</option>
          </select>
          <button onClick={handleOnClick}>Clear List</button>
        </div>
      </div>
    </>
  );
}

export default PackingList;
