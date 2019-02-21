import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import ViewSummary from "./components/view-summary/view-summary.component.js";
import EditSummary from "./components/edit-summary/edit-summary.component.js";

class App extends Component {

  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link to="/" className="navbar-brand">Department Evaluation</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">View Summary</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Evaluations</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Rubrics</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Report</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Past Assessments</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/" exact component={ViewSummary} />
          <Route path="/editSummary" exact component={EditSummary} />
        </div>
      </Router>
    );
  }
}

export default App;
