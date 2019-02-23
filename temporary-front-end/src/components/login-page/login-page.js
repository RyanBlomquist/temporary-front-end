import React, { Component } from 'react';
import Axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "./login-page.css";
//import ProgramAdministratorApp from "../../ProgramAdministratorApp";

class LoginPage extends Component 
{
    constructor(props)
    {
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: "",
            password: ""
        }
    }

    onChangeEmail(e)
    {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e)
    {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e)
    {
        const authentication = {
            email: this.state.email,
            password: this.state.password
        };

        Axios.post('http://localhost:8000/controllers/authenticate-controller', authentication)
            .then(res => {
                console.log(res.data);
                if (res.data.isUser)
                {
                    console.log("inside if statement");
                }
                else
                {
                    console.log("inside else statement");
                }
            });
    }

    //old form action: action="http://localhost:8000/controllers/authenticate-controller" method="POST"
    render() 
    {
        return (
            <div className="container small-container">
            <h1>Department Evaluation Login</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="from-group">
                        <label>Email:</label>
                        <input className="form-control" 
                                type="text" 
                                name="email" 
                                value={this.state.email}
                                onChange={this.onChangeEmail} 
                                required />
                    </div>

                    <div className="form-group">
                        <label>Password:</label>
                        <input className="form-control" 
                                type="password" 
                                name="password"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                                required />
                    </div>

                    <div className="form-group">
                        <input className="btn btn-primary margin-right" type="submit" value="Login" />  
                        <input className="btn btn-primary" id = "register" type="submit" value="Register" /> 
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginPage;