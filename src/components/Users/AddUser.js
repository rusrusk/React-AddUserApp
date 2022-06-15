import React, {useState, useRef} from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'


const AddUser = (props) => {

  const nameInputRef = useRef()
  const ageInputRef = useRef()

  
  const [isError, setError] = useState()

const addUserHandler = e => {
  e.preventDefault(e)
  const enteredRefName = nameInputRef.current.value
  const enteredRefAge = ageInputRef.current.value
  if(enteredRefName.trim().length === 0 || enteredRefAge.trim().length === 0) {
    setError({
      title: 'Invalid input ',
      message: 'Please enter a valid username and age'
    })
    return
  }
  if(+enteredRefAge < 1) {
    setError({
      title: 'Invalid age',
      message: 'Please enter a valid age > 0'
    })
    return
  }
  props.onAddUser(enteredRefName, enteredRefAge)
  nameInputRef.current.value = ''
  ageInputRef.current.value = ''
  
}



const errorHandler = () => {
  setError(null)
}

  return (
   <div>
     {isError && <ErrorModal 
     title={isError.title}
     message={isError.message}
     onConfirm={errorHandler}
     />}
     <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input 
        id='username' 
        type="text" 
        ref={nameInputRef}
        />
        <label htmlFor="age">Age</label>
        <input  
        id='age' 
        type="number" 
        ref={ageInputRef}
        />
        <Button type='submit'>Add User</Button>
        
      </form>
    </Card>
   </div>
   
  )
}


export default AddUser