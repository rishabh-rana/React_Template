import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Feed from "./components/feed/feed";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route path="/" component={Feed} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
