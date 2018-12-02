import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import Welcome from "./Components/Welcome";
import Daily from "./Components/Daily";

class App extends React.Component {
 
  render() {
    return (
      <div>
        <Router>
          <Welcome exact path="/" />
          <Daily path="/daily" />
        </Router>
      </div> 
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
