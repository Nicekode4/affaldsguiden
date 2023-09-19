import React, { useEffect, useState } from 'react'
import { LoginStyle } from './Login.style'
import supabase from '../../supabase.js'
import { useForm } from "react-hook-form"
import logo from '../../Images/Layout/logo.svg'

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
  if (sessionStorage.getItem('user')) {
    setLoggedIn(true)
  }
  }, [])
  


  async function signOut() {
    const { error } = await supabase.auth.signOut()
    sessionStorage.removeItem('user')
    setLoggedIn(false)

    if (error) {
      console.log(error);
      
    }
  }

  async function signInWithEmail(email,pass) {
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: pass,
    })

    if (error) {
      console.log('Error while logging in: ',error);
      document.getElementById('loginError').style.display = 'block'
    }else{
      
let { data: user, error } = await supabase
  .from('user')
  .select('*')
  .eq('email', email)

  if (error) {
    console.log(error);
  }
console.log(user);
  if (user[0].is_active === 1) {
    sessionStorage.setItem('user', JSON.stringify(user))
    setLoggedIn(true)
  }else{
    document.getElementById('banned').style.display = 'block'
    signOut()
  }
    }
  }
  const submitForm = (data) => {
    console.log('Brugernavn: ', data.username);
    console.log('Password: ', data.password);
    signInWithEmail(data.username, data.password)
  }
console.log(JSON.parse(sessionStorage.getItem('user')) || 'No user in sessionstorage')
  return (
    <LoginStyle>
            {!loggedIn ? <>
            
              <div>
           <img src={logo} alt="Logo" />  
           <p>Affaldsguiden</p> 
      </div>
      <p>Log ind på Affaldsguiden
for at anmelde stationer</p>
            
            <form onSubmit={handleSubmit(submitForm)}>
              <h1>Log ind</h1>
              <label  htmlFor="username">Brugernavn</label>
              <input type="text" name="username" id='username' placeholder='Email' {...register('username', {required: true})}/>
              <label htmlFor="password">Kodeord</label>
              <input type="password" id='password' name="password" placeholder='Password' {...register('password', {required: true})} />
              {errors.username && <span>Brugernavn skal udfyldes!</span>}
              {errors.password && <span>Kodeord skal udfyldes!</span>}
              {<span style={{display: 'none'}} id='loginError'>Kodeord og Brugernavn findes ikke eller er forkert</span>}
              {<span style={{display: 'none'}} id='banned'>Din konto er bandlyst!</span>}
              <button type='submit'>Login</button>
            </form> 
            </>
            : 
            <><p>Du er logged ind som {JSON.parse(sessionStorage.getItem('user'))[0].firstname || 'ukendt'}</p> <button style={{marginLeft: '-1%'}} onClick={() => signOut()}>Log ud</button></>}
    </LoginStyle>
  )
}

export default Login