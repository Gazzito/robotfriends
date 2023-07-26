import React, { Component} from "react";
import CardList from "./CardList";
import { robots } from "./Robots";
import SearchBox from "./SearchBox.js";



class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
        })

        return (
            <div className="tc"> 
              <h1 className="shadow-5 mb4 pa3"><span className="f1 white i">RobotFriends</span></h1>
              <SearchBox searchChange ={this.onSearchChange}/>
              <CardList robots={filteredRobots} />
            </div>
          );
    }
  
};

export default App;
