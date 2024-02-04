import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Status from "./components/Status";

export default function App() {
  const [data, setData] = useState([]);
  function handleSubmit(newItem) {
    setData((data) => [...data, newItem]);
  }

  function handleDeleteItem(id) {
    setData((data) => data.filter((data) => data.id !== id));
  }
  function hadleCheckbox(id) {
    setData((data) =>
      data.map((data) =>
        data.id === id ? { ...data, packed: !data.packed } : data
      )
    );
  }
  function clearlist() {
    const confirm = window.confirm("Are You Sure, you want to clear List ?");
    if (confirm) setData([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onSubmit={handleSubmit} />
      <PackingList
        data={data}
        onDelete={handleDeleteItem}
        onToggle={hadleCheckbox}
        onClearList={clearlist}
      />
      <Status data={data} />
    </div>
  );
}
