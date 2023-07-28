/* eslint-disable react/prop-types */
function Item({ item, handleCheck, handleOnDeleteItem }) {
  return (
    <>
      <li>
        <input
          type="checkbox"
          value={item.packed}
          onClick={() => handleCheck(item.id)}
        />
        <span className={`${item.packed && "check"}`}>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => handleOnDeleteItem(item.id)}>❌</button>
      </li>
    </>
  );
}

export default Item;
