import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  function handleStatus(id) {
    const updatedItems = items.map((item) => {
      if (id === item.id) {
        item.packed = !item.packed;
      }
      return item;
    });
    setItems([...updatedItems]);
  }
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList items={items} handleStatus={handleStatus} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
}

// Form component: holds the State: array of hashes for travel list, each item a hash
function Form() {
  const nums = Array.from({ length: 20 }, (_, index) => index + 1);

  return (
    <form className="add-form">
      <h3>What do you need for your trip? 😍</h3>
      <select>
        {nums.map((num) => {
          return <option value={num}>{num}</option>;
        })}
      </select>
      <input type="text" placeholder="Item..." />
      <button>Add</button>
    </form>
  );
}

// PackingList container to display items (items passed as params?)
// Item component (state passed in as params? Will need packed/delete functions passed in): <Item />
// Sort button: doesn't need to change array, just sort (make it dynamic?)
// Clear button (delete function passed as param)
function PackingList({ items, handleStatus }) {
  return (
    <div className="list">
      List
      <ul>
        {items.map((item) => (
          <Item item={item} handleStatus={handleStatus} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, handleStatus }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => handleStatus(item.id)}
      ></input>
      <span
      // style={{ textDecoration: `${item.packed} ?"line-through" : "none"` }}
      >
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

// Footer (needs items state passed in as params)
function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}
