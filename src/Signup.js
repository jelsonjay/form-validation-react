import React from 'react'
import useForm from './useForm'
import Validate from './ValidationDetail'
import './Form.css'

const Signup = ({submitForm}) => {
  const {handleChange, values, handleSubmit, errors} = useForm(submitForm ,Validate)
  return (
    <div className='form-content-right'>
    <form className='form' onSubmit={handleSubmit}>
    <h1>Signup, create your accoun!</h1>

    <div className='form-inputs'>
    <label className='form-label'>Username</label>
    <input 
    className='form-input' 
    type='text' 
    name='username' 
    placeholder='Type your username' 
    value={values.username}
    onChange={handleChange}
    />
    {errors.username && <p>{errors.username}</p>}
    </div>

    <div className='form-inputs'>
    <label className='form-label' htmlFor='email'>
   Email
    </label>
    <input id='email'type='text' name='email' className='form-input' 
    placeholder='Type your email'
    value={values.email}
    onChange={handleChange}
    />
    {errors.email &&  <p>{errors.email}</p>}
    </div>

    <div className='form-inputs'>
    <label className='form-label' htmlFor='password'>
    Password
    </label>
    <input id='password'type='password' name='password' className='form-input' 
    placeholder='Type your password' 
    value={values.password}
    onChange={handleChange}
    />
    {errors.password &&  <p>{errors.password}</p>}
    </div>

    <div className='form-inputs'>
    <label className='form-label' htmlFor='password2'>
     Comfirm Password
    </label>
    <input id='password2' type='password' name='password2' className='form-input' 
    placeholder='Comfirm Password' 
    value={values.password2}
    onChange={handleChange}
    />
    {errors.password2 &&  <p>{errors.password2}</p>}
    </div>

    <button className='form-input-btn' type='submit'>Signup</button>
    <span className='form-input-login'>I already have an account! Login<a href='#'> Here</a></span>
    </form>
    </div>
  )
}

export default Signup