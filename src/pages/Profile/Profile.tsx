import { Link, useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentUser } from '../../redux/Auth/selectors'
import { logOut } from '../../redux/Auth/actions'

const Profile = () => {

  const dispatch = useDispatch<any>()
  const user = useSelector(selectCurrentUser)

  const navigate = useNavigate()

  const handleLogout = () => {

    dispatch(logOut())
    navigate("/")

    toast.success('Signed out succesfully!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    })
  }

  return (
    <>
      {user
        ?
        <section className="flex flex-col gap-10 items-center justify-center mx-auto py-20">
          {user?.photoURL && <img src={user?.photoURL} alt="UserProfilePhoto" className="rounded-full w-20 cursor-pointer hover:opacity-70"></img>}
          <p className='font-medium text-xl text-titleGray text-center'>Name: <span className='text-caption'>{user.displayName}</span></p>
          <p className='font-medium text-xl text-titleGray text-center'>E-mail: <span className='text-caption'>{user.email}</span></p>
          <div className="flex flex-col md:flex-row gap-8">
            <button onClick={handleLogout} className='px-20 py-3 self-center rounded-xl text-buttonBrown font-bold bg-white hover:bg-buttonDarkBrown border-2 border-buttonBrown hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-buttonDarkBrown'>LOG OUT</button>
            <Link to='/'>
              <button className='px-20 py-3 self-center rounded-xl text-buttonBrown font-bold bg-white hover:bg-buttonDarkBrown border-2 border-buttonBrown hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-buttonDarkBrown'>Go back</button>
            </Link>
          </div>
        </section>
        :
        <section className="flex flex-col gap-10 items-center justify-center mx-auto py-20">
          <h3 className="font-medium text-3xl text-titleGray text-center">You don't have a profile, please sign in to continue</h3>
          <Link to="/signIn">
            <button className='px-20 py-3 self-center rounded-xl text-buttonBrown font-bold bg-white hover:bg-buttonDarkBrown border-2 border-buttonBrown hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-buttonDarkBrown'>Sign in</button>
          </Link>
        </section>
      }
    </>
  )
}

export default Profile