import { useEffect } from "react"
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch,  useSelector } from "react-redux"
import PublicGoalItem from "../components/PublicGoalItem"
import { getPublicGoals } from "../features/goals/goalSlice"

function UserProfile() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {goals, isError, message} = useSelector((state)=>state.goals)
  const {name} = useParams()

  useEffect(()=>{
    if(isError){
      console.log(message)
      if(message === "Name not found"){
        navigate("/userlist")
      }
    }
    dispatch(getPublicGoals(name))
/*     return()=>{
      dispatch(reset())
    } */
  },[goals, isError, message, dispatch])


  return (
    <>
    <section className="heading">
      <h1>Welcome to {name}'s posts</h1>
    </section>
    <section className="content">
      {goals.length > 0 ? (<div className="posts">
        {goals.toReversed().map((goal)=>(
          <PublicGoalItem key={goal._id} goal={goal}/>
        ))}
      </div>) : (<h3>No posts </h3>)}
    </section>
    </>
  )
}

export default UserProfile