import {useState, useEffect} from 'react'

const useForm = () => {
const [values, setValues] = useState({
  username: '',
  email: '',
  password: '',
  password2: ''
})

const [errors, setErrors] = useState({})

const handleChanges = event =>{
const {name, value} = event.target
  setValues({
    ...values,
    [name]: value
  })
}

const handleSubmit = event =>{
  event.preventDefault();
  
}

return {handleChanges, values, handleSubmit}

}

export default useForm;