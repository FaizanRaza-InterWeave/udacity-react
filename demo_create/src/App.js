import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <div>
        <h1> Todo List</h1>
        <input id="todo" type="text" placeholder="Add Todo" />
        <button id="todoBtn">Add Todo</button>
        <ul id="todos"></ul>
      </div>
      <div>
        <h1> Goals List</h1>
        <input id="goal" type="text" placeholder="Add Goal" />
        <button id="goalBtn">Add Goal</button>
        <ul id="goals"></ul>
      </div>
    </div>
  );
}

export default App;
