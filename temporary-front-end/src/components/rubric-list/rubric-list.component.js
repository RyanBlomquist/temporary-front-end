import React, {Component} from 'react';
import { Link } from 'react-router-dom';

//dummy data
var rubrics = ["Rubric 1", "Rubric 2", "Rubric 3"];


function listDisplay(rubrics)
{
    return rubrics.map(function(rubric, i){
        return <div><Link to="/viewRubric" key={i}>{rubric}</Link></div>;
    });
}

export default class RubricList extends Component 
{
    render()
    {
        return(
            <div className="container">
                <h1>Rubric List</h1>
                {listDisplay(rubrics)}
            </div>
        );
    }
}