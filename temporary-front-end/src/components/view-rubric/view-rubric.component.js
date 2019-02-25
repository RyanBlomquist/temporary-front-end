import React, {Component} from 'react';

//dummy data
var criteriaOne = {
    description: "Subject Knowledge",
    scores: [
        "student does not have grasp of info; cannot answer questions.",
            "uncomfortable with info; able to answer very few questions.",
            "comfortable with info; can answer simple questions.",
            "shows full knowledge; answers questions easily but does not elaborate",
            "knowledge is more than required; answers questions with details and elaboration"
    ]
}

var criteriaTwo = {
    description: "Organization",
    scores: [
        "audience cannot understand  presentation; no logical sequence of information",
        "audience has difficulty following; info jumps around",
        "logical sequence with a few minor jumps",
        "logical sequence",
        "logical sequence;  ideas clearly linked"
    ]
}

var criteriaThree = {
    description: "Use of Communication Aids",
    scores: [
        "numerous spelling and/or  grammar errors; no  communication  aids or detracting aids",
        "several spelling and/or grammar errors; aids highlight unimportant info",
        "few spelling or grammar errors; aids lack originality or adequate development",
        "two or fewer spelling or grammar errors; aids support and relate to text and presentation",
        "no spelling or grammatical errors; aids explain and enhance text and presentation"
    ]
}

var Rubric = {
    title: "Oral Presentation",
    scale: ["1 Limited", "2 Developing", "3 Capable", "4 Strong", "5 Excellent"],
    criteria: [criteriaOne, criteriaTwo, criteriaThree]
}

function generateGradeScale()
{
    return (
        Rubric.scale.map(function(currentScore, i)
        {
            return <option key={i} value={currentScore}>{currentScore}</option>
        })
    );
}

const gradeScale = generateGradeScale();

function CriteriaGradeInput(props)
{
    return (
        <select className="form-control" id={props.currentCriteria.description}>
            <option disabled selected value> -- select an option -- </option>
            {gradeScale}
        </select>
    )
}

function CriteriaDescription(props)
{
    return props.criteria.scores.map(function(currentScore, i)
    {
        return <td key={i}>{currentScore}</td>
    });
}

function TopRowGradeScale(props)
{
    return Rubric.scale.map(function(currentScore, i)
        {
            return <th scope="col" key={i}>{currentScore}</th>
        });
}

function CriteriaRow(props)
{
    return Rubric.criteria.map(function(currentCriteria, i)
        {
            return (
                <tr>
                    <th scope="row" key={i}>{currentCriteria.description}</th>
                    <CriteriaDescription criteria={currentCriteria} />
                    {props.gradeMode?  <CriteriaGradeInput currentCriteria={currentCriteria} /> : ""}
                </tr>
            );
        });
}

export default class ViewRubric extends Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            //gradeMode: this.props.gradeMode
            gradeMode: true
        }
    }

    handleSaveGradeClick()
    {
        Rubric.criteria.map(function(currentCriteria)
        {
            console.log(document.getElementById(currentCriteria.description).value);
            return document.getElementById(currentCriteria.description).value;
        })
    }

    render()
    {
        let saveGradeButton;
        if (this.state.gradeMode)
        {
            saveGradeButton = <button type="button" className="btn btn-primary" onClick={this.handleSaveGradeClick}>Save Grade</button>
        }

        return (
            <div>
                <h1>Rubric</h1>
                <h2>{Rubric.title}</h2>

                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col" className="outcome-width">Criteria</th>
                            <TopRowGradeScale />
                            {this.state.gradeMode ? <th scope="col">Score</th> : ''}
                        </tr>
                    </thead>
                    <tbody>
                        <CriteriaRow gradeMode={this.state.gradeMode} />
                    </tbody>
                </table>
                {saveGradeButton}
            </div>
        );
    }
}