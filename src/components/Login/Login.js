import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="loginContainer">
            <form className=" loginForm">
                <h4>Login</h4>
                <br />
                <div className="form-group">
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Username or Email" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-label" htmlFor="exampleCheck1">Remember me</label>
                    <a className="help" href="#">Forgot Password</a>
                </div>
                <div className="lgnBtnContainer">
                    <button className="btn btn-primary">Submit</button>
                    <p className="alert"><small>Don't have any account? <span><a href="#">Create an account</a></span> </small></p>
                </div>
            </form>
            <hr/>
            <div className="socialBtnContainer">
                <button type="button" className="btn btn-light socialBtn fbBtn">Continue with Facebook</button>
                <button type="button" className="btn btn-light socialBtn gBtn"> Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;