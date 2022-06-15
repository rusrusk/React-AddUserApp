import React, {useState} from "react";
import "./style.css";
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'

export default function App() {

  const [usersList, setUsersList] = useState([])

  const addUserHandler = (uName, uAge) => {
     setUsersList(prevUsers => {
       return [...prevUsers, {name: uName, age: uAge, id: Math.random().toString()}]
     })
   }

  return (
    <div>
     <AddUser onAddUser={addUserHandler}/>
     <UsersList 
     users={usersList}/>
    </div>
  );
}
