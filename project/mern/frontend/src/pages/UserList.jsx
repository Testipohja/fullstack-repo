import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import {getAll} from "../features/auth/authSlice"
import {Link} from "react-router-dom"
import UserItem from "../components/UserItem"


function UserList() {
  const dispatch = useDispatch()
  const {isError, message, users} = useSelector((state)=>state.auth)
  
  useEffect(()=>{
    if(isError){
      console.log(message)
    }
    dispatch(getAll())
  },[isError, message, dispatch])

  return (
    <>
      <h1>User list</h1>
      <section className="content">
        {users.length > 0 ?(<div className="goals">
          {users.map((user)=>(
            <UserItem key={user._id} user={user}/>
          ))}

        </div>) : (<h3>No users in the database</h3>)}
      </section>
    </>
  )
}

export default UserList