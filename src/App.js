import React, { Component } from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Grid } from "react-bootstrap";

import Welcome from "./components/views/Welcome/Welcome";
import QuickStart from "./components/views/QuickStart/QuickStart";
import About from "./components/views/About/About";
import Navigation from "./components/views/Navigation/Navigation";
import User from "./components/views/User/User";
import logo from "./logo.svg";

class App extends Component {
    render() {
        return (
      <HashRouter>
        <MuiThemeProvider>
          <div className="App">
            <Grid>
            <Navigation />              
              <Route path="/" exact component={Welcome} />
              <Route path="/quickstart" exact component={QuickStart} />
              <Route path="/about" exact component={About} />
              <Route path="/user" exact component={User} />
            </Grid>
          </div>
        </MuiThemeProvider>
      </HashRouter>
        );
    }
}

export default App;
