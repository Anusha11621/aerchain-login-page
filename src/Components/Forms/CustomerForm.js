import { Box } from '@mui/system'
import React, { Component } from 'react'
import '../Forms/forms.css'
import Customerlogin from'./Customerlogin'
import Customersignup from './Customersignup'
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
          <Customersignup toggle={this.loginHandler}/>
          </>
          :
          <>
            <Customerlogin toggle={this.signupHandler}/>
            
          </>
        }
      </Box>
    )
  }
}
