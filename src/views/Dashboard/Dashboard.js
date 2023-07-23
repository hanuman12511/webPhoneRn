import React from "react";
import { Button, FormControl,Form } from "react-bootstrap";
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import  {BrowserRouter as Router,Route,RouterProps,Routes} from 'react-router-dom';

import Dashboard from '../Dashboard';
import HomeScreen from '../Home';
import LoginScreen from '../Login';
import RegisterScreen from '../Register';
export default class DashBoard extends React.Component{
    constructor(){
        super()
        this.handleLogout=this.handleLogout.bind(this);
        this. fileupload=this. fileupload.bind(this);
        this.state={
            auth:localStorage.getItem('auth'),
            imgurl:null
        }
    }
    handleLogout(){
localStorage.clear();
window.location = '/';
    }
    handleLogin(){
        window.location = '/';

    }
    fileupload(e){
let img =e.target.files[0]
let path= URL.createObjectURL(img)
this.setState({ imgurl: URL.createObjectURL(e.target.files[0])})
    }
    render(){
        return(
            <>
            {this.state.auth? 
            <div className="d-flex">
          
               <div >
                    <Sidebar />
               </div>
               <div className="w-100">
                <div className="w-100">
                    <Navbar status="logout" onClick={this.handleLogout}/>
                </div>
              
               {/*   <Button onClick={this.handleLogout}>Logout</Button> */}
                 <Form.Control type="file" onChange={this.fileupload} />
                <img src={this.state.imgurl} style={{width:100,height:100}}/>
                
       
    
   
               </div>
             
                </div>:
             <>{this.handleLogin()}</> }
            </>
        )
    }
}