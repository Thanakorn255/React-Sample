import logo from "./logo.svg";
import "./App.css";
import { Component } from "react/cjs/react.production.min";
import User from "./user/User";

class App extends Component {
  render() {
    const name = "Hello Ton";
    return (
      <div>
        {name}
        <User />
      </div>
    );
  }
}

export default App;
