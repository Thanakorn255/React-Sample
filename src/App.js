import logo from "./logo.svg";
import "./App.css";
import { Component } from "react/cjs/react.production.min";
import User from "./user/User";

class App extends Component {
  state = {
    name:'Ton'
  };

  onNameChange = name => {
    this.setState({ name: name });
  };
  
  render() {
    const { name } = this.state;

    return (
      <div>
        I AM {name}
        <User name = {name} onNameChange = {this.onNameChange}/>
      </div>
    );
  }
}

export default App;
