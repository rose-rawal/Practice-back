import React, { useEffect, useState } from 'react'
import TextField from '../components/forms/inputs/textfield'
import Button from '../components/button'
import { useUserContext } from '../contexts/usercontext'
import Info from '../components/info'

const Login = () => {
    const {registerUser, loginUser} = useUserContext()
    const [isSignup, setIsSignup] = useState(false)
    const [error, setError] = useState({
      errorText: "",
      field: ""
    })
    const [signupData, setSignupData] = useState({
        name: "",
        email: "",
        address: "",
        password: ""
    })
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })
    const updateLoginData = (value, key="name") =>{
        setLoginData(prev=>({
          ...prev,
          [key]: value
        }))
        console.log(loginData)
    }

    const updateSignupData = (value, key="name") =>{
        setSignupData(prev=>({
            ...prev,
            [key]:value
        }))
        console.log(signupData, 'signupdata')
        // setSignupData()
    }

  const onSignup = (e)=> {
    e.preventDefault()
    const respopse = registerUser(signupData);
    console.log("Signup response", respopse)
    if(respopse.error){
      setError({
        errorText: respopse.error,
        field: respopse.field || ""
      })
    }

    if(respopse.succes){
      setIsSignup(false)
      //reset error object
      setError({
        errorText: "",
        field: ""
      })
    }

  }
  return (
    <div className='bg-purple-200 px-8 py-7 flex flex-col items-center gap-3 rounded'>
      <div className='font-semibold'>{!isSignup ? "Login": "Signup"}</div>
      {!isSignup &&<form onSubmit={(e)=>{
        e.preventDefault()
      }}>

        <TextField type='email' label='Email'  name="Email" value={loginData.email} onChange={e=>updateLoginData(e.target.value, "email")}/>
        <TextField type="password" label='Password' name="Password"  value={loginData.password} onChange={e=>updateLoginData(e.target.value, "password")}/>
        <Button text="Submit" type="submit"/>
        <div className='text-sm text-gray-500'>
        Haven't register yet ? 
      <span  className='text-purple-600 cursor-pointer' onClick={()=>setIsSignup(true)}>&nbsp;Signup</span>
      </div>
      </form>}

      {isSignup && <form onSubmit={onSignup}>

        
        <TextField 
            type='text' 
            label='Name'  
            name="Name"
            error={error.field === "name" && error.errorText}
            value={signupData.name}
            onChange={(e)=>updateSignupData(e.target.value)}
        /> 
        <TextField 
            type='text' 
            value={signupData.email} 
            onChange={(e)=>updateSignupData(e.target.value, "email")} 
            label='Email'  
            name="Email"
            error={error.field === "email" && error.errorText}
        /> 
        <TextField 
            type='text' 
            label='Address'  
            name="Address"
            error={error.field === "address" && error.errorText}
            value={signupData.address}
            onChange={(e)=>updateSignupData(e.target.value, "address")}
        /> 
        <TextField 
            type="password" 
            label='Password' 
            error={error.field === "password" && error.errorText}

            name="Password" 
            value={signupData.password}
            onChange={(e)=>updateSignupData(e.target.value, "password")}
        />
        {error.errorText != "" && !error.field && <Info type='error'>
          {error.errorText}
        </Info>}

                <Button text="Submit" type="submit"/>

      <div className='text-sm text-gray-500'>
        Already registered ? 
      <span  className='text-purple-600 cursor-pointer' onClick={()=>setIsSignup(false)}>&nbsp;Login</span>
      </div>

      </form>}


    </div>
  )
}

export default Login
