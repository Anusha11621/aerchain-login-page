import { Box } from '@mui/system'
import React, { Component } from 'react'
import SignUp from './SignUp'
export default class Forms extends Component {
  render() {
    return (
      <Box flex={2} p={2}>
        <SignUp></SignUp>
      </Box>
    )
  }
}
