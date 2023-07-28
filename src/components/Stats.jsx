/* eslint-disable react/prop-types */
function Stats({ items }) {
  const packedItems = items.filter((item) => item.packed);
  return (
    <>
      <em>
        {items.length > 0
          ? `💼 You have ${
              items.length
            } items on your list, and you already packed ${
              packedItems.length
            } (${(packedItems.length / items.length).toFixed(2) * 100}%)`
          : "Start adding some items to your packing list 🚀"}
      </em>
    </>
  );
}

export default Stats;
