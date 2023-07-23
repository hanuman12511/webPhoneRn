import React from "react";
import { Button,Form,Container,Row,Col } from 'react-bootstrap';
import Navigate from '../../components/Navigate';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class LoginScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            ename:"",
            ecolor:'',
            auth:false,
        }
    this.handleLogin=this.handleLogin.bind(this);
    }
    componentDidMount(){
        let au = localStorage.getItem('auth');
        console.log('====================================');
        console.log("au=",au);
        console.log('====================================');
        this.setState({auth:au})
    }
    handleLogin(){
       const {username} = this.state;
       if(username ==="hanuman"){
        localStorage.setItem('auth', true);
        window.location = '/dashboard';
       }
       else{
this.setState({ename:'Enter Right Username',ecolor:'red',username:''})
       }
      
    }
    handleAuth(){
       
        window.location = '/dashboard';
       
    }
    render(){
        console.log('====================================');
        console.log(this.state.auth);
        console.log('====================================');
        return(
            <Container>
                <Row>
                    <Col>
                    <div className=" w-100  d-block ">
                    <div className="align-items-center d-block" style={{width:300}}>
            <h1>LoginScreen</h1>
           {!this.state.auth ?(  <div className="d-flex-block">
            <Form.Group className="m-2">
            <Form.Control  type="text" placeholder ="Enter Username" value={this.state.username} onChange={(e)=>this.setState({username:e.target.value})} />
            <Form.Text style={{color:this.state.ecolor}}>{this.state.ename}</Form.Text>
            </Form.Group>
            <Button onClick={this.handleLogin}>Login</Button>
            </div>) :(
          <>
            {this.handleAuth()}
          </>
        )
            }
            </div>
            </div>
            </Col>
            </Row>
            </Container>
        )
    }
}