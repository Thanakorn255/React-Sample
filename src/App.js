import logo from "./logo.svg";
import "./App.css";
import { Component } from "react/cjs/react.production.min";
import User from "./user/User";

class App extends Component {
  state = {
    name:'Ton'
  };

  render() {
    return (
      <div>
        I AM {this.state.name}
        <User />
      </div>
    );
  }
}

export default App;
