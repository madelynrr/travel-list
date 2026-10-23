export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
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
    <div className="add-form">
      <h3>What do you need for your trip? 😍</h3>
    </div>
  );
}

// PackingList container to display items (items passed as params?)
// Item component (state passed in as params? Will need packed/delete functions passed in): <Item />
// Sort button: doesn't need to change array, just sort (make it dynamic?)
// Clear button (delete function passed as param)
function PackingList() {
  return <div className="list">List</div>;
}

// Footer (needs items state passed in as params)
function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}
