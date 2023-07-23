import React from "react";
import logo from '../asset/logo/logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
export default class Sidebar extends React.Component{
    render(){
        return(
            <>
            <div className="bg-primary p-1">
                <NavLink className="nav-link text-white  " to="/dashboard"><img src={logo} style={{width:100,height:100}}/></NavLink>
                <NavLink className="nav-link text-white " to="/home">Home</NavLink>
            </div>
            </>
        );
    }
}