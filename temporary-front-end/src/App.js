import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/nav-bar/nav-bar.component";
import LoginPage from "./components/login-page/login-page";
import ViewSummary from "./components/view-summary/view-summary.component.js";
import RubricList from "./components/rubric-list/rubric-list.component.js";
import ViewRubric from "./components/view-rubric/view-rubric.component.js";


class App extends Component {

  constructor(props) 
  {
    super(props);
  
    this.state = {
      isAuthenticated: true
    };
  }

  /*
  decideWhatToShow()
  {
    if (!this.state.isAuthenticated)
    {
      const childProps = {
        isAuthenticated: this.state.isAuthenticated
      }
      return <LoginPage childProps={childProps} />
    }
    else if (this.state.isAuthenticated)
    {
      return <ViewSummary />
    }
  }
  {this.decideWhatToShow()}
  */

  render() {
    return (
      <Router>
        <div className="container">
          <NavBar />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/viewSummary" exact component={ViewSummary} />
          <Route path="/rubricList" exact component={RubricList} />
          <Route path="/viewRubric" exact component={ViewRubric} />
        </div>
      </Router>
    );
  }
}

export default App;
