import React, { Component } from 'react'
import { connect } from "react-redux";
import {authAction} from '../action/authaction'

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }

    changeEmail = (e) =>{
        this.setState({
            email:e.target.value
        })
    }

    changePassword = (e) =>{
        this.setState({
            password:e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        const {email,password} = this.state;
        const sendData = {
            email,
            password
        };
        this.props.dispatch(authAction.login(sendData));
    }

    

    render() {
        return (
            <>

                <form onSubmit={this.handleSubmit}>
                    <h4>Login Page</h4>

                    <label>Email</label>
                    <input type="email"
                    value={this.state.email}
                    onChange={this.changeEmail}/>


                    <label>Password</label>
                    <input type="password"
                    value={this.state.password}
                    onChange={this.changePassword}/>

                    <button>Login</button>

              </form>
            </>
        )
    }
}




const mapStateToProps = (state) => {
    return {
      user: state.auth.user
    }
  }

export default connect(mapStateToProps)(Login);
  