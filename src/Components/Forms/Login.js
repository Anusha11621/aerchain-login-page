import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Button, IconButton, InputAdornment, OutlinedInput, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { Component } from 'react'
import '../Forms/forms.css'
import styled from '@emotion/styled'
import mobile from '../../mobile.png'
import microsoft from '../../microsoft.png'
import google from '../../google.png'
import { Link } from 'react-router-dom'
// import logo198 from '../../../'
const StyledButton = styled.button`
    margin-top:27px;
    height: 36.66px;
    color:black;
    border:0.6px solid gray;
    border-radius:6px;
    background:white;
    cursor:pointer;
`
export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
          showPassword:false,
          showConfirmPassword:false,
          email:'',
          password:'',
          erroremail:'',
          errorPassword:'',
        }
      }
      handleClickShowPassword = ()=>{
        this.setState({
          showPassword : !this.state.showPassword
        })
      }
      handleClickshowConfirmPassword = ()=>{
        this.setState({
            showConfirmPassword : !this.state.showConfirmPassword
        })
      }
      emailhandler = (event)=>{
        this.setState({
          email:event.target.value
        })
      }
      passwordHandeler = (event)=>{
        this.setState({
          password:event.target.value
        })
      }
      errorHandler = ()=>{
        let flag = true
        if(this.state.email === ""){
          this.setState({
            erroremail: 'Email should not be empty'
          })
          flag = false
        }else{
          this.setState({
            erroremail: ''
          })
        }
        if(this.state.password === ""){
          this.setState({
            errorPassword: 'Password should not be empty'
          })
          flag = false
        }
        else{
          this.setState({
            errorPassword: ''
          })
        }
        return flag
      }
  render() {
    return (
        <div className='boxcontainer' id='box'>
          <div style={{textAlign:'left'}}>
            <Typography className='supplier_signup' variant='h5'><b>Supplier Login</b></Typography>
            <Typography variant='p' className='para'>Lorem ipsum dolor sit ame consectetur emet</Typography>
          </div>
            <Stack>
                <label className='label' style={{marginTop:'16px'}}>E-Mail</label>
                <input 
                    id ='name'
                    className='input' 
                    type='text'
                    placeholder={` Enter email address`}
                    value = {this.state.email}
                    onChange={this.emailhandler}
                ></input>
                {
                    this.state.erroremail?<p className='p'>{this.state.erroremail}</p>:<p className='pr'>.</p>
                }
             </Stack>
             <Stack>
                    <label className='label'> Confirm Password</label>
                    <OutlinedInput
                    className='MuiOutlinedInput-root'
                    // sx={{height:'40.5px', width:'314px',marginTop:'6px'}}
                    onChange = {this.passwordHandeler}
                    id="confirmPassword"
                    placeholder='password'
                    type={this.state.showConfirmPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="start">
                        <IconButton

                            aria-label="toggle password visibility"
                            onClick={this.handleClickshowConfirmPassword}
                            
                            edge="end"
                            sx={{height:'1px', width:'1px',padding:'5px'}}
                        >
                            {this.state.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                        </InputAdornment>
                    }
                    />  
                    {
                        this.state.errorPassword?<p className='p'>{this.state.errorPassword}</p>:<p className='pr'>.</p>
                    }  
             </Stack>
             <Button direction={'column'} 
                variant="contained"
                onClick={this.errorHandler}
                 className = 'MuiButton-root'
                // sx={{marginTop:'10px',width: '314px',height: '36.66px',background: '#3388EB', textTransform : 'none'}}
                >
                  Log In
            </Button>
            <Stack>
              <Stack display={'flex'} flexDirection={'row'} justifyContent="space-between" alignItems={'center'} className='labels'>
                <div>
                  <input type={'checkbox'} style={{marginTop:'-10px'}}></input>
                  <label className='checkbox_label' >Remember Me</label>
                </div>
                <div>
                  <p className='checkbox_label'>Forgot Password?</p>
                </div>
              </Stack>
            </Stack>
            <div className='line' style={{border:'0.1px solid rgba(49, 49, 49, 0.5)',position:'relative', marginTop:'30px'}}>
              <p style={{background:'white',position:'absolute',top:'-30px',left:'42%',padding:'0px 20px'}}>or</p>
            </div>
            <Stack display={'flex'}>
            <StyledButton direction={'column'} 
                variant="outlined"
                className='css-1nbawsp-MuiStack-root'
                // sx={{marginTop:'10px',width: '314px',height: '36.66px',color:'black',border:'0.6px solid gray',
                //     textTransform : 'none'}}
                >
                <Stack display={'flex'} flexDirection={'row'} justifyContent="center" alignItems={'center'} gap={1} marginTop={-0.5}>
                  <img src={mobile}></img>
                  <p >Continue using OTP</p>
                </Stack>
            </StyledButton>
            <StyledButton direction={'column'} 
                variant="outlined"
                className='css-1nbawsp-MuiStack-root'
                // sx={{marginTop:'10px',width: '314px',height: '36.66px',color:'black',border:'0.6px solid gray',
                //     textTransform : 'none'}}
                >
                <Stack display={'flex'} flexDirection={'row'} justifyContent="center" alignItems={'center'} gap={1} marginTop={-0.5}>
                  <img src={google}></img>
                  <p >Continue with Google</p>
                </Stack>
                
            </StyledButton>

            <StyledButton direction={'column'} 
                variant="outlined"
                className='css-1nbawsp-MuiStack-root'
                // sx={{marginTop:'10px',width: '314px',height: '36.66px',color:'black',border:'0.6px solid gray',
                //     textTransform : 'none'}}
                >
                <Stack display={'flex'} flexDirection={'row'} justifyContent="center" alignItems={'center'} gap={1} marginTop={-0.5}>
                  <img src={microsoft}></img>
                  <p >Continue with SSO</p>
                </Stack>
            </StyledButton>
            </Stack>
            <div className='boxcontainer state-text'  onClick={this.props.toggle}>
              <p style={{color:'gray',fontSize: '12px',margin:'0px'}} >You do not have an account?    <span style={{color: '#3388EB',textDecoration:'underline'}}>Join Now</span></p>
            </div>
        </div>
    )
  }
}