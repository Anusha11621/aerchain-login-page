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
          <SignUp toggle={this.loginHandler}/>
          </>
          :
          <>
            <Login toggle={this.signupHandler}></Login>
            
          </>
        }
      </Box>
    )
  }
}
