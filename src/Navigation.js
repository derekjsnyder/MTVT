import React from "react";

class Navigation extends React.Component {
  state = {
    openNav: false
  };

  toggleNav = () => {
    this.setState({
      openNav: !this.state.openNav
    });
  };

  render() {
    return (
      <div
        className={this.state.openNav ? "navigation-open" : "navigation-closed"}
      >
        <button className="menu-button" onClick={this.toggleNav}>
          <img src={require("/img/menu.png")} alt="logo" />
        </button>
      </div>
    );
  }
}

export default Navigation;
