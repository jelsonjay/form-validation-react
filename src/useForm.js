import {useState, useEffect} from 'react'

const useForm = (callback, Validate) => {
const [values, setValues] = useState({
  username: '',
  email: '',
  password: '',
  password2: ''
})

const [errors, setErrors] = useState({})
const [isSubmitting, setIsSubmitting] = useState(false)

const handleChange = event =>{
const {name, value} = event.target
  setValues({
    ...values,
    [name]: value
  })
}

const handleSubmit = event =>{
  event.preventDefault();
  setErrors(Validate(values))
  setIsSubmitting(true)
}

useEffect(() => {
 if(Object.keys(errors).length === 0 && isSubmitting){
   callback()
 }
},[errors]);

return {handleChange, values, handleSubmit, errors}

}

export default useForm;