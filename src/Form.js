import React, {useState} from 'react'
import FormSuccess from './FormSuccess'
import Signup from './Signup'
import  './Form.css'

const Form = () => {

  const [isSubimitted, setIsSubmitted] = useState(false)
  function submitForm() {
    setIsSubmitted(true);
  }
  return (
   <>
    <div className='form-container'>
    <span className='close-btn'>x</span>
    <div className='form-content-left'>
      <img className='form-img' src='./images/photo-4.jpeg' alt='photo'/>
    </div>
    {!isSubimitted ? <Signup submitForm={submitForm}/> : <FormSuccess />}

    </div>

   </>
  )
}

export default Form