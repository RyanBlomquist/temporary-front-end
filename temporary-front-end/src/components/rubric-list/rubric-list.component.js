import React, {Component} from 'react';

//dummy data
var rubrics = ["Rubric 1", "Rubric 2", "Rubric 3"];


function listDisplay(rubrics)
{
    return rubrics.map(function(rubric, i){
        return <p key={i}>{rubric}</p>;
    });
}

export default class RubricList extends Component 
{
    render()
    {
        return(
            <div>
                <h1>Rubric List</h1>
                {listDisplay(rubrics)}
            </div>
        );
    }
}