import React from "react";
import { Button } from "react-bootstrap";

export default class Navbar extends React.Component{
    constructor(props){
        super(props)
        console.log('====================================');
        console.log(props);
        console.log('====================================');
    }
    render(){
        return(
            <>
            <div className="d-flex bg-dark w-100">
                <h1 className="text-white">DashBoard</h1>
                <div className="d-flex w-100 justify-content-end">
                <Button className="text-end" onClick={this.props.onClick}>{this.props.status}</Button>
                </div>
                </div>
            </>
        );
    }
}