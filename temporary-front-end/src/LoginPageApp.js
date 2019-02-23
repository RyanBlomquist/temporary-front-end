import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class LoginPage extends Component 
{
    render() 
    {
        return (
            <div className="container">
                <form action="/controllers/authenticate-controller" method="POST">
                    <div className="from-group">
                        <label>Email:</label>
                        <input className="form-control" type="text" name="email" required />
                    </div>

                    <div className="form-group">
                        <label>Password:</label>
                        <input className="form-control" type="password" name="password" required />
                    </div>

                    <div className="form-group">
                        <input className="btn btn-primary" type="submit" value="Submit" />  
                        <input className="btn btn-primary" id = "register" type="submit" value="Register" /> 
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginPage;