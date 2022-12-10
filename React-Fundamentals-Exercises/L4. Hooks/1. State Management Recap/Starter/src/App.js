import logo from "./logo.svg";
import "./App.css";
import { ChatWindow } from "./Components/ChatWindow";

const users = [{ username: "Amy" }, { username: "John" }];

const messages = [
  { username: "Amy", text: "Hi, Jon!" },
  { username: "Amy", text: "How are you?" },
  { username: "John", text: "Hi, Amy! Good, you?" },
];

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        <ChatWindow users={users} messages={messages} />
      </div>
    </div>
  );
};

export default App;
