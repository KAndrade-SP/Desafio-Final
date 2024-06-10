import { signOut } from "firebase/auth"
import { auth } from '../../services/firebase'
import { useNavigate } from 'react-router-dom'
import User from "../../types/UserType"

interface HomeProps {
  user: User | null
}

const Home: React.FC<HomeProps> = ({ user }) => {

  const navigate = useNavigate()
 
  const handleLogout = () => {               
    signOut(auth).then(() => {
      navigate("/")
      console.log("Signed out successfully")
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <div>

      <p>{user?.displayName}</p>

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default Home