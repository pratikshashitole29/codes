import {useState} from 'react'

const Profile = () => {

    const [loggedIn,setLogin]=useState(true)
  return (
    <div>
     {loggedIn?<h1>Hello</h1>:<h1>welcome</h1>}
    </div>
  )
}

export default Profile
