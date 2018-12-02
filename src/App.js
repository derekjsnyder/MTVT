import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import Welcome from "./Welcome";
import Layout from "./Layout";
import Daily from "./Components/Daily";

class App extends React.Component {
 
  render() {
    return (
      <div>
        <Router>
          <Welcome exact path="/" />
          <Layout path="/home">
            <Daily path="/"/>
          </Layout>
        </Router>
      </div> 
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
