import { useState } from "react";
export default function PackingList({ data, onDelete, onToggle, onClearList }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = data;

  if (sortBy === "desc")
    sortedItems = data.slice().sort((a, b) => a.desc.localeCompare(b.desc));

  if (sortBy === "packed")
    sortedItems = data
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((Samaan) => (
          <li key={Samaan.id}>
            <input type="checkbox" onChange={() => onToggle(Samaan.id)} />
            <span
              style={Samaan.packed ? { textDecoration: "line-through" } : {}}
            >
              {Samaan.quant} {Samaan.desc}
            </span>
            <button
              onClick={() => onDelete(Samaan.id)}
              style={{ fontSize: "2rem", backgroundColor: "ButtonFace" }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="desc">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list 🗑️</button>
      </div>
    </div>
  );
}

// function Item({ data }) {
//   return (
//     <li>
//       <span style={data.packed ? { textDecoration: "line-through" } : {}}>
//         {data.quant} {data.desc}
//       </span>
//       <button>❌</button>
//     </li>
//   );
// }
