import React, {Component} from 'react';
//import axios from 'axios';

//Dummy data
var outcome1 = {
    description: "Outcome 1",
    measures: ["1.1 Measure 1", "1.2 Measure 2"]
};

var outcome2 = {
    description: "Outcome 2",
    measures: ["Measure 1", "Measure 2", "Measure 3", "Measure 4"]
};

var outcome3 = {
    description: "Outcome 3",
    measures: ["3.1 Measure 1", "3.2 Measure 2", "3.3 Measure 3"]
};

var programSummary = { 
    title: "Assessment 2019",
    outcomes: [outcome1, outcome2, outcome3]
};


function measureDisplay(outcome)
{
    return outcome.measures.map(function(currentMeasure){
        return <p>{currentMeasure}</p>
    });
}

const Outcome = props => (
    <tr>
        <td>{props.outcome.description}</td>
        <td>{measureDisplay(props.outcome)}</td>
    </tr>
)

export default class ViewSummary extends Component 
{

    programSummaryDisplay()
    {
        return programSummary.outcomes.map(function(currentOutcome){
            return <Outcome outcome={currentOutcome} />;
        });

    }

    render()
    {
        return (
            <div>
                <h1>{programSummary.title}</h1>
            
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Learning Outcomes</th>
                            <th scope="col">Measures of Performace</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.programSummaryDisplay()}
                    </tbody>
                </table>
            </div>
        );
    }
}