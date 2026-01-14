import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  // CREATE
  const addItem = () => {
    if (!text.trim()) return;

    setItems([...items, { id: Date.now(), name: text }]);
    setText("");
  };

  // DELETE
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Frontend UAS</h1>
      <p>Contoh CRUD sederhana (tanpa router)</p>

      <input
        type="text"
        placeholder="Tambah data..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addItem} style={{ marginLeft: "5px" }}>
        Tambah
      </button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button
              onClick={() => deleteItem(item.id)}
              style={{ marginLeft: "10px" }}
            >
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
