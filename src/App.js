const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

export default function App() {
  function handleStatus({ id }) {}

  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList items={initialItems} handleStatus={handleStatus} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
}

// Form component: holds the State: array of hashes for travel list, each item a hash
function Form() {
  return (
    <form className="add-form">
      <h3>What do you need for your trip? 😍</h3>
      <select></select>
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
        // checked={item.packed}
        onChange={() => handleStatus(item.id)}
      ></input>
      {/* <span style={{ textDecoration: `${item.packed && "line-through"}` }}> */}
      <span>
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
