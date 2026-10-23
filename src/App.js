export default function App() {
  return (
    <>
      <Logo />
      {/* {Form component: holds the State: array of hashes for travel list, each item a hash} */}
      <Form />
      {/* Container to display items (items passed as params?) */}
      <PackingList />
      {/* // Item component (state passed in as params? Will need packed/delete functions passed in)
      <Item /> */}
      {/* // Sort button: doesn't need to change array, just sort (make it dynamic?) */}
      {/* // Clear button (delete function passed as param) */}
      {/* // Footer (needs items state passed in as params) */}
      <Stats />
    </>
  );
}

function Logo() {
  return <div>Hello World!</div>;
}
function Form() {}
function PackingList() {}
function Stats() {}
