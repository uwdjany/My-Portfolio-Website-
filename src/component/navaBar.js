import React, { Component } from "react";
import "./css/index.css";

class Navigation extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <nav>
          <a  className="logo" href="#">
            <span>Uw</span>Djanati
          </a>

          <div>
            <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
              <li>
                <a className="active" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a href="#abouting">About Me</a>
              </li>
              <li>
                <a href="#">Work</a>
              </li>
              <li>
                <a href="#">Testemonial</a>
              </li>
              <li>
                <a href="#">Contact Me</a>
              </li>
            </ul>
          </div>
          <div id="mobile" onClick={this.handleClick}>
          
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}

export default Navigation;
