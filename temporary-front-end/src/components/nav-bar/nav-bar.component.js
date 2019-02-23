import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component 
{
    render()
    {
        return (
            
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link to="/viewSummary" className="navbar-brand">Department Evaluation</Link>
                <div className="collpase nav-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/viewSummary" className="nav-link">View Summary</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/viewSummary" className="nav-link">Evaluations</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/rubricList" className="nav-link">Rubrics</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/viewSummary" className="nav-link">Report</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/viewSummary" className="nav-link">Past Assessments</Link>
                    </li>
                </ul>
                    </div>
                 </nav>
            
        );
    }
}

export default NavBar;