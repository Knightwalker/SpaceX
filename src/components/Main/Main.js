// modules
import React, { Component, useState } from "react";

// components
import Launch from "../Launch/Launch.js";
import './Main.css';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
      name: "test name",
      launches: []
    }
  }

  switchNameHandler = () => {
    const counter = this.state.counter;
    
    this.setState({
      counter: counter + 1
    });
  }

  changeName = (event) => {
    console.log(event.target.value)
    this.setState({
      name: event.target.value
    })
  }

  componentDidMount = async () => {

    try {
      const response = await fetch("https://api.spacexdata.com/v4/launches/query", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "query": {},
          "options": {
              "limit": 12,
              "page": 1
          }
        }),
      });
      const data = await response.json();
      const launches = data.docs;
      this.setState({launches: launches});
    } catch (err) {
      console.log(err);
    }

  }
  
  render() {
    return (
        <main className="Main">
          <aside>aside1</aside>

          <div className="Main_launches-wrapper">
            <h1>All Rocket Launches</h1>
            <div className="launches">
              {this.state.launches.map((launch) => (
                <Launch 
                  key={launch.id} 
                  name={launch.name}
                  img={launch.links.patch.small}
                  details={launch.details}
                  success={launch.success}
                  date_utc={launch.date_utc}     
                  flight_number={launch.flight_number.toString()}     
                ></Launch>
              ))}

            </div>
            <button onClick={this.switchNameHandler}>Pagination</button>
          </div>

          <aside>aside2</aside>

        </main>
    );
  }
}

export default Main;
