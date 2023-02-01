import { Box } from '@mui/system'
import React, { Component } from 'react'
import SignUp from './SignUp'
import Login from './Login';
import '../Forms/forms.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default class Forms extends Component {
constructor(props){
  super(props)
  this.state = {
    login:true,
    // signup:false,
    
  }
}
loginHandler = ()=>{
  this.setState({
    login:false
  })
}
signupHandler = ()=>{
  this.setState({
    login:true
  })
}
  render() {
    return (
      <Box flex={2} p={2}>
        {
          this.state.login?
          <>
          <SignUp></SignUp>
          <div style={{width:'480px',textAlign:'center'}} onClick={this.loginHandler}>
                <p style={{color:'gray',fontSize: '12px'}} >Already have an account?  <span style={{color: '#3388EB',textDecoration:'underline'}}>Login Now</span></p>
          </div>
          </>
          :
          <>
            <Login></Login>
            <div style={{width:'480px',textAlign:'center'}} onClick={this.signupHandler}>
              <p style={{color:'gray',fontSize: '12px'}} >Already have an account?  <span style={{color: '#3388EB',textDecoration:'underline'}}>Login Now</span></p>
            </div>
          </>
        }
      </Box>
    )
  }
}
