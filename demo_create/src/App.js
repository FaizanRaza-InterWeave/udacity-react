import logo from "./logo.svg";
import { Todos } from "./Components/Todos";
import { Goals } from "./Components/Goals";
function App() {
  return (
    <div className="App">
      <Todos />
      <Goals />
    </div>
  );
}

export default App;
