import React from "react";

export default class HomeScreen extends React.Component{
    constructor(){
        super();
        this.state={
            auth:localStorage.getItem('auth'),
        }
    }
    handleLogin(){
        window.location = '/';

    }
    render(){
        return(
            <>
           {this.state.auth?  <h1>Home</h1>:<>{this.handleLogin()}</>}
            </>
        )
    }
}