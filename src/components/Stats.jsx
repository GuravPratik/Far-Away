/* eslint-disable react/prop-types */
function Stats({ items }) {
  if (items.length === 0) {
    return <em>Start adding some items to your packing list 🚀</em>;
  }
  const packedItems = items.filter((item) => item.packed);

  const percentage = Math.round((packedItems.length / items.length) * 100);

  return (
    <em>
      {percentage !== 100
        ? `💼 You have ${items.length} items on your list, and you already packed ${packedItems.length} (${percentage}%) `
        : "You got everything! Ready to go ✈️ "}
    </em>
  );
}

export default Stats;
