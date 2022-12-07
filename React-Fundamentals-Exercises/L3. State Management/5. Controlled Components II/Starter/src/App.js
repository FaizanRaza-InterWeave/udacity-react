import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);

  const deleteLastItem = (event) => {
    setItems(items.slice(0, -1));
  };

  const noItemsFound = () => items.length === 0;

  return (
    <div className="App">
      <Header />
      <Form
        deleteLastItem={deleteLastItem}
        noItemsFound={noItemsFound}
        setItems={setItems}
        items={items}
      />

      <ItemsList items={items} />
    </div>
  );
};

export default App;

const ItemsList = ({ items }) => {
  return (
    <>
      <p className="items">Items</p>
      <ol className="item-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </>
  );
};

const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">ReactND - Coding Practice</h1>
  </header>
);

const Form = ({ items, setItems, deleteLastItem, noItemsFound }) => {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const addItem = (event) => {
    event.preventDefault();
    setItems([...items, value]);
    setValue("");
  };

  const inputIsEmpty = () => value === "";

  return (
    <>
      <h2>Shopping List</h2>
      <form onSubmit={addItem}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={value}
          onChange={handleChange}
        />
        <button disabled={inputIsEmpty()}>Add</button>
      </form>
      <button onClick={deleteLastItem} disabled={noItemsFound()}>
        Delete Last Item
      </button>
    </>
  );
};
