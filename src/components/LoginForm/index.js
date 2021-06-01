import React from 'react'
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';

function LoginForm(props) {

    return(
        <form onSubmit = {props.handleFormSubmit}> 
        <InputLabel htmlFor="component-outlined">Email</InputLabel>
       <OutlinedInput name="email" value = {props.formState.email} onChange={(e)=>props.setFormState({...props.formState,email:e.target.value})}/>
       <InputLabel htmlFor="component-outlined">Password</InputLabel>
       <OutlinedInput name="password"  type="password" value = {props.formState.password} onChange={(e)=>props.setFormState({...props.formState,password:e.target.value})}/>
       <OutlinedInput type="submit" value="login"/>
     </form>
    )
}

export default LoginForm