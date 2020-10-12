import React , {Component } from "react";
import fire from "./fire";
import './login.css';

class Login extends Component {
    constructor(props)
    {
        super(props);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state={
            email: "",
            password:""
        }
    }
    login(e)
    {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>
        {
        console.log(u)
        }).catch((err)=>
        {
               alert(err.message);
        })
    }

    handleChange(e)
    {
        this.setState({
            [e.target.name]: e.target.value

        })
    }

    signup(e)
    {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>
        {
        console.log(u)
        }).catch((err)=>
        {
                
                alert(err.message);
        })
    }
render()
{
    return(
        <div className="app">
            
            <form className="form">

                <br/><br/><br/><br/><br/>
                <h1 className="h1"> Hi, welcome to the TODO APP 😀 </h1>
                <label className='emailcolor'>Email</label> 
                <label className='required'>* </label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input className="field"
                type="email"
                name = "email"
                id="email"
                placeholder="Enter E-mail Address"
                onChange={this.handleChange}
                value={this.state.email}
                /><br/>
                <label  className='emailcolor'>Password</label> 
                <label className='required'>* </label>
                
                  <input className="field"
                type="password"
                id="password"
                name = "password"
                placeholder="Enter Password"
                onChange={this.handleChange}
                value={this.state.password}
                /><br/><br/>
                 &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                <button onClick={this.login} className="button">
                    LogIN </button>&nbsp;&nbsp;&nbsp;
                    <label className="label">OR</label>&nbsp;&nbsp;
                    <button onClick={this.signup} className="button">
                    Signup </button>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </form>

        </div>
    )
}
}
export default Login;