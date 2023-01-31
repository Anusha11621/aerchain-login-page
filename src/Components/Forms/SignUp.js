import { Box,Typography,Stack, TextField } from '@mui/material'
import React, { Component } from 'react'
// import icon from '../../../public/Icon.svg'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import '../Forms/forms.css'
export default class SignUp extends Component {
  render() {
    return (
      <Box sx={{padding:'40px', paddingLeft:'80px'}}>
        <Typography className='supplier_signup' variant='h5'><b>Supplier Signup</b></Typography>
        <Typography variant='p' className='para'>Lorem ipsum dolor sit ame consectetur emet</Typography>
        <Stack>
            <label className='label'>Name</label>
            <input 
                className='input' 
                type='text'
                placeholder={`Please enter email address`}
            ></input>
        </Stack>
        <Stack>
            <label className='label'>Phone  Number</label>
            <input 
                className='input' 
                type='text'
                placeholder={`Please enter email address`}
            ></input>
        </Stack>
        <Stack>
            <label className='label'>E-mail</label>
            <div >
                <AccessTimeIcon></AccessTimeIcon>
                <TextField 
                    sx={{height:'40px'}}
                    className='input' 
                    type='text'
                    // placeholder={`Please enter email address`}
                ></TextField>    
            </div>
            
        </Stack>
      </Box>
    )
  }
}
