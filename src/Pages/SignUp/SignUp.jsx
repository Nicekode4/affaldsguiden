import React, { useEffect, useState } from 'react'
import { SignUpStyle } from './SignUp.style'
import supabase from '../../supabase.js'
import { useForm } from "react-hook-form"
import logo from '../../Images/Layout/logo.svg'
import eye from '../../Images/Layout/check-circle.svg'
import { useNavigate } from 'react-router-dom'

function SignUp() {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [showPass, setShowPass] = useState(false)

  async function signInWithEmail(email,pass) {
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: pass,
    })

    if (error) {
      console.log('Error while logging in: ',error);
    }else{
      
let { data: user, error } = await supabase
  .from('user')
  .select('*')
  .eq('email', email)

  if (error) {
    console.log(error);
  }else{
    sessionStorage.setItem('user', JSON.stringify(user))
    navigate('/login')
  }
    }
  }

  async function signup(formData) {
    
const { data, error } = await supabase
.from('user')
.insert([
  { 
    email: formData.email, 
    firstname: formData.firstname,
    lastname: formData.lastname ,
    is_active: 1
  },
])
.select()

if (error) {
  if (error.code == 23505) {
    alert('Den bruger findes allerede!')
  }
  console.log('error creating user: ',error);
}else{
  
const { data, error } = await supabase.auth.signUp({
  email: formData.email,
  password: formData.password,
})
  setTimeout(() => {
      signInWithEmail(formData.email,formData.password)
  }, 200);

}
  }

  const submitForm = (data) => {
    if (data.password === data.passwordConfirm) {
          console.log(data);
          signup(data)
    }else{
      alert('de 2 kodeord passer ikke sammen')
    }

  }
  return (
    <SignUpStyle>
      <>
            <div>

            
              <div className='logoDiv'>
           <img src={logo} alt="Logo" />  
           <p style={{fontWeight: '600', marginBottom: '1vh'}}>Affaldsguiden</p> 
      </div>
      <p>Opret dig for at kunne logge ind</p>
      </div>      
            <form onSubmit={handleSubmit(submitForm)}>
              <h1>Opret dig</h1>
              <label  htmlFor="email">Brugernavn</label>
              <input type="email" name="email" id='email' placeholder='Skriv din email' {...register('email', {required: true})}/>

              <label  htmlFor="firstname">Fornavn</label>
              <input type="text" name="firstname" id='firstname' placeholder='Skriv dit fornavn' {...register('firstname')}/>

              <label  htmlFor="lastname">Fornavn</label>
              <input type="text" name="lastname" id='lastname' placeholder='Skriv dit efternavn' {...register('lastname')}/>

              <label htmlFor="password">Kodeord</label>
              <div className='passwordDiv'>
              <input type={showPass ? 'text' : 'password'} id='password' name="password" placeholder='Skriv dit kodeord' {...register('password', {required: true})} />
              <img onClick={() => {showPass ? setShowPass(false) : setShowPass(true)}} src={eye} alt="" />
              </div>
              <div className='passwordDiv'>
              <input type={showPass ? 'text' : 'password'} id='passwordConfirm' name="passwordConfirm" placeholder='Gentag kodeord' {...register('passwordConfirm', {required: true})} />
              <img onClick={() => {showPass ? setShowPass(false) : setShowPass(true)}} src={eye} alt="" />
              </div>
              {errors.username && <span>Brugernavn skal udfyldes!</span>}
              {errors.password && <span>Kodeord skal udfyldes!</span>}
              {<span style={{display: 'none'}} id='SignUpError'>Kodeord og Brugernavn findes ikke eller er forkert</span>}
              <div className='btnDiv'>
                              <button type='submit'>SignUp</button>
                              
              </div>

            </form> 
            </>
    </SignUpStyle>
  )
}

export default SignUp