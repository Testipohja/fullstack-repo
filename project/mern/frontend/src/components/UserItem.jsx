import {Link} from "react-router-dom"

function UserItem({user}) {

  return (
    <div className='goal'>
      <h1>{user.name && (<Link to={`/user/${encodeURIComponent(user.name)}`}>{user.name}</Link>)}</h1>
    </div>
  )
}

export default UserItem