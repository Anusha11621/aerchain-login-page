import { Box } from '@mui/system'
import React, { Component } from 'react'
import SignUp from './SignUp'
import Login from './Login';
import '../Forms/forms.css'

export default class Forms extends Component {
constructor(props){
  super(props)
  this.state = {
    login:true
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
          <div style={{width:'480px',textAlign:'center',cursor:'pointer'}} onClick={this.loginHandler}>
                <p style={{color:'gray',fontSize: '12px',margin:'0px'}} >Already have an account?  <span style={{color: '#3388EB',textDecoration:'underline'}}>Login Now</span></p>
          </div>
          </>
          :
          <>
            <Login></Login>
            <div style={{width:'480px',textAlign:'center',cursor:'pointer'}} onClick={this.signupHandler}>
              <p style={{color:'gray',fontSize: '12px',margin:'0px'}} >You do not have an account?    <span style={{color: '#3388EB',textDecoration:'underline'}}>Join Now</span></p>
            </div>
          </>
        }
      </Box>
    )
  }
}
