import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import Welcome from "./Welcome";
import Daily from "./Daily";

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
