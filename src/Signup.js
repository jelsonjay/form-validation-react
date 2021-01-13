import React from 'react'
import useForm from './useForm'

const FormSuccess = () => {
  const {hanleChange, values, handleSubmit} = useForm()
  return (
    <div className='form-contant-right'>
    <form className='form' onSubmit={handleSubmit}>
    <h1>Signup, create your accoun!</h1>

    <div className='form-inputs'>
    
    <label className='form-label' htmlFor='username'>
    Username
    </label>
  
    <input id='username' type='text' name='username' className='form-input' 
    placeholder='Type your username' />
    value={values.username}
    onChange={hanleChange}
    </div>

    <div className='form-inputs'>
    <label className='form-label' htmlFor='email'>
   Email
    </label>
    <input id='email'type='text' name='email' className='form-input' 
    placeholder='Type your email'/>
    value={values.email}
    onChange={hanleChange}
    </div>

    <div className='form-inputs'>
    <label className='form-label' htmlFor='password'>
    Password
    </label>
    <input id='password'type='password' name='password' className='form-input' 
    placeholder='Type your password' />
    value={values.password}
    onChange={hanleChange}
    </div>

    <div className='form-inputs'>
    <label className='form-label' htmlFor='password2'>
     Comfirm Password
    </label>
    <input id='password2'type='password' name='password2' className='form-input' 
    placeholder='Type your password2' />
    value={values.password2}
    onChange={hanleChange}
    </div>

    <button className='form-input-btb' type='submit'>Signup</button>
    <span>I already have an account! Login<a href='#'>Here</a></span>
    </form>
    </div>
  )
}

export default FormSuccess