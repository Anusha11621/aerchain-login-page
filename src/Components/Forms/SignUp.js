import { Box,Typography,Stack, TextField, Button } from '@mui/material'
import React, { Component } from 'react'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import '../Forms/forms.css'
export default class SignUp extends Component {
    constructor(props){
        super(props)
        this.state = {
          showPassword:false,
          showConfirmPassword:false,
          name : '',
          phoneNumber:'',
          email:'',
          currentPassword:'',
          confirmPassword:'',
            errorname : '',
            errorphoneNumber:'',
            erroremail:'',
            errorcurrentPassword:'',
            errorconfirmPassword:'',
          login:false,
          signup:true
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
      nameHandler = (event) =>{
        this.setState({
            name : event.target.value
        })
      }
      phonenumberHandel = (event) =>{
        this.setState({
            phoneNumber : event.target.value
        })
      }
      emailHandel = (event) =>{
        this.setState({
            email : event.target.value
        })
      }
      currentPasswordHandel = (event) =>{
        this.setState({
            currentPassword : event.target.value
        })
      }
      confirmPasswordHandel = (event) =>{
        this.setState({
            confirmPassword : event.target.value
        })
      }
    errorHandeler = () => {
        if(this.state.name === ""){
            this.setState({
                errorname:'Name should not be empty'
            })
        }
        else if(this.state.name.length > 25){
          this.setState({
            errorname:'Name should be lessthan 25 characters'
        })
        }
        else{
            this.setState({
                errorname:''
            })
        }


        if(this.state.phoneNumber === ''){
            this.setState({
                errorphoneNumber:'Invalid Phone number'
        })
        }else{
            this.setState({
                errorphoneNumber:''
            })
        }


        if(this.state.email === ''){
            this.setState({
                erroremail:'Email should not be empty'
            })
        }else if(!this.state.email.includes('@')||!this.state.email.includes('.')){
          this.setState({
            erroremail:' Invalid Email '
        })
        }
        else{
            this.setState({
                erroremail:''
            })
        }


        if(this.state.currentPassword === ""){
          this.setState({
            errorcurrentPassword:'Password should not be empty'
          })
        }
        else{
          this.setState({
            errorcurrentPassword:''
        })
        }
        
        if(this.state.currentPassword !== this.state.confirmPassword){
            this.setState({
                errorconfirmPassword : 'Incorrect Password'
            })
        }else if(this.state.confirmPassword === ""){
            this.setState({
              errorconfirmPassword:'Password should not be empty'
          })
        }
        else{
            this.setState({
                errorconfirmPassword : ''
            })
        }
    };
  render() {
    // console.log(this.state);
    return (
      <div className='boxcontainer' id='box'>
        <div style={{textAlign:'left'}}>
        <Typography className='supplier_signup' variant='h5'><b>Supplier Signup</b></Typography>
        <Typography variant='p' className='para' >Lorem ipsum dolor sit ame consectetur emet</Typography>
        </div>
        <Stack>
            <label className='label' style={{marginTop:'16px'}}>Name</label>
            <input 
                id ='name'
                className='input' 
                type='text'
                placeholder={`Please enter email address`}
                value = {this.state.name}
                onChange={this.nameHandler}
            ></input>
            {
                this.state.errorname?<p className='p'>{this.state.errorname}</p>:<p className='pr'>.</p>
            }
        </Stack>
        <Stack>
            <label className='label'>Phone  Number</label>
            <input 
                id='phoneNumber'
                className='phone_number_input' 
                type="tel"
                placeholder={`+91 | Please enter email address`}
                onChange = {this.phonenumberHandel}
            ></input>
            {
                this.state.errorphoneNumber?<p className='p'>{this.state.errorphoneNumber}</p>:<p className='pr'>.</p>
            }
        </Stack>
        <Stack>
            <label className='label'>E-mail</label>
                <input
                    id='email'
                    sx={{height:'40px'}}
                    className='input' 
                    type='text'
                    placeholder={`Please enter email address`}
                    onChange = {this.emailHandel}
                ></input> 
                {
                this.state.erroremail?<p className='p'>{this.state.erroremail}</p>:<p className='pr'>.</p>
                }   
        </Stack>
        <Stack>
            <label className='label'> Create Password</label>
            <OutlinedInput
            id = 'currentPassword'
            className='password_input'
            // sx={{height:'40.5px', width:'314px',marginTop:'6px'}}
            //   id="outlined-adornment-password"
                onChange = {this.currentPasswordHandel}
              placeholder='password'
              type={this.state.showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="start">
                  <IconButton

                    aria-label="toggle password visibility"
                    onClick={this.handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                    sx={{height:'1px', width:'1px',padding:'5px'}}
                  >
                    {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />  
            {
                this.state.errorcurrentPassword?<p className='p'>{this.state.errorcurrentPassword}</p>:<p className='pr'>.</p>
            }  
        </Stack>
        <Stack>
            <label className='label'> Confirm Password</label>
            <OutlinedInput
            className='MuiOutlinedInput-root'
            // sx={{height:'40.5px', width:'314px',marginTop:'6px'}}
            onChange = {this.confirmPasswordHandel}
              id="confirmPassword"
              placeholder='password'
              type={this.state.showConfirmPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="start">
                  <IconButton

                    aria-label="toggle password visibility"
                    onClick={this.handleClickshowConfirmPassword}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                    sx={{height:'1px', width:'1px',padding:'5px'}}
                  >
                    {this.state.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />  
            {
                this.state.errorconfirmPassword?<p className='p'>{this.state.errorconfirmPassword}</p>:<p className='pr'>.</p>
            }  
        </Stack>
        <Button direction={'column'} 
            variant="contained"
            onClick={this.errorHandeler}
            className = 'MuiButton-root'
            // sx={{marginTop:'10px',width: '314px',height: '36.66px',background: '#3388EB', textTransform : 'none'}}
            >
              Sign Up
        </Button>
        <div className='line' style={{border:'0.1px solid rgba(49, 49, 49, 0.5)',position:'relative', marginTop:'30px'}}>
          <p style={{background:'white',position:'absolute',top:'-30px',left:'42%',padding:'0px 20px'}}>or</p>
        </div>
 
        <div className='boxcontainer state-text' onClick={this.props.toggle}>
                <p style={{color:'gray',fontSize: '12px',margin:'0px'}} >Already have an account?  <span style={{color: '#3388EB',textDecoration:'underline'}}>Login Now</span></p>
        </div>
      </div>
    )
  }
}
