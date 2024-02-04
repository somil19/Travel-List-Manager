import { useState } from "react";
export default function Form({ onSubmit }) {
  const [desc, setDesc] = useState("");
  const [quant, setQuant] = useState(5);

  function handleAdd(event) {
    // this function is for  ,when we dont want to reload our site while adding new description
    event.preventDefault();
    if (!desc) return;
    const newItems = { desc, quant, packed: false, id: Date.now() };
    onSubmit(newItems);
    console.log(newItems);
    setDesc("");
    setQuant(1);
  }

  return (
    <form className="add-form" onSubmit={handleAdd}>
      <h3> Add your list Here!😍📋</h3>

      <span>Quantity</span>
      <select
        value={quant}
        onChange={(event) => setQuant(Number(event.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num, index) => (
          <option value={num} key={index}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Add Your Item..."
        value={desc}
        onChange={(event) => setDesc(event.target.value)}
      />
      <button>Add +</button>
    </form>
  );
}
