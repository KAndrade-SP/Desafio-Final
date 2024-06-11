import React from 'react'
import User from "../../types/UserType"

interface ProfileProps {
  user: User | null | undefined
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  return (
    <div>
        {user?.photoURL && <img src={user?.photoURL} alt="UserProfilePhoto" className="rounded-full w-7 cursor-pointer hover:opacity-70"></img> }
    </div>
  )
}

export default Profile