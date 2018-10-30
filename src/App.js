import React from "react";
import ReactDOM from "react-dom";
//import CollapsingTitle from "./CollapsingTitle";
// import Overlay from './Overlay';

class App extends React.Component {
  state = {
    openMenu: false
  };

  openNav = () => {
    this.setState({
      openMenu: true
    });
  };

  toggleNav = () => {
    this.setState({
      openMenu: !this.state.openMenu
    });
  };

  render() {
    return (
      <div>
        <div className={this.state.openMenu ? "overlay" : "overlay-open"}>
          <button className="close-button" onClick={this.toggleNav}>
            ||
          </button>
          <div className="welcome-title">Hi, my name is Derek Snyder.</div>
        </div>
        <div className="base">
          <button onClick={this.toggleNav} hidden={!this.state.openMenu}>
            Menu
          </button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
