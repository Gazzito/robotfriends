import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox.js";
import Scroll from "../components/Scroll.js";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() { 
    const { robots, searchfield } = this.state
    const filteredRobots = robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(searchfield.toLocaleLowerCase());
    });
    if (robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc scroll">
          <h1 className="shadow-5 mb4 pa3">
            <span className="f1 white i">RobotFriends</span>
          </h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll className="scroll">
            <CardList robots={filteredRobots} />
          </Scroll>
          <footer className="mt2 white">Made by Telmo Gonçalves</footer>
        </div>
      );
    }
  }
}

export default App;
