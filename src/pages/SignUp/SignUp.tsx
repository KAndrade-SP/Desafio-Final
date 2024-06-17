import { NavLink, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../../services/firebase'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { nameRegex, passwordRegex } from '../../types/Regex'

const schema = z.object({
  name: z.string()
    .min(3, "Name invalid")
    .regex(nameRegex, "The name cannot contain special characters or numbers")
    .trim(),
  email: z.string().email("Email invalid").trim(),
  password: z.string()
    .min(6, "Password must be at least 6 characters long")
    .regex(passwordRegex, "The password must contain at least one uppercase character")
    .trim(),
  confirmPassword: z.string().min(6, "Password must be at least 6 characters long").trim(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
})

type FormData = z.infer<typeof schema>

const Signup = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const navigate = useNavigate()

  const onSubmit = async (data: FormData) => {
    try {

      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password)
      const user = userCredential.user

      await updateProfile(user, { displayName: data.name })

      toast.success('Account created! Please sign in!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
      navigate('/signIn')

    } catch (error) {
      toast.error('Error message: ' + error, {
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
  }

  return (
    <>
      <section className="flex items-center justify-center min-h-screen bg-white">
        <div className="w-full max-w-md p-6 bg-boxLightBrown rounded-lg shadow-md">

          <h1 className="text-2xl font-bold text-center text-titleGray mb-6">Furniro</h1>

          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="mb-4">
              <label htmlFor="display-name" className="block text-sm font-medium text-subtitleGray">Name</label>
              <input
                type="text"
                id="display-name"
                className="mt-1 block w-full px-3 py-2 border border-cardWhite rounded-md shadow-sm focus:outline-none focus:ring-buttonDarkBrown focus:border-buttonDarkBrown sm:text-sm"
                {...register('name')}
                placeholder="Name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="email-address" className="block text-sm font-medium text-subtitleGray">
                Email address
              </label>
              <input
                type="email"
                id="email-address"
                className="mt-1 block w-full px-3 py-2 border border-cardWhite rounded-md shadow-sm focus:outline-none focus:ring-buttonDarkBrown focus:border-buttonDarkBrown sm:text-sm"
                {...register('email')}
                placeholder="Email address"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-subtitleGray">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-3 py-2 border border-cardWhite rounded-md shadow-sm focus:outline-none focus:ring-buttonDarkBrown focus:border-buttonDarkBrown sm:text-sm"
                {...register('password')}
                placeholder="Password"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-subtitleGray">
                Confirm password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="mt-1 block w-full px-3 py-2 border border-cardWhite rounded-md shadow-sm focus:outline-none focus:ring-buttonDarkBrown focus:border-buttonDarkBrown sm:text-sm"
                {...register('confirmPassword')}
                placeholder="Confirm password"
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 bg-buttonBrown text-white rounded-md hover:bg-buttonDarkBrown focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-buttonDarkBrown"
            >
              Sign up
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account? {' '}
            <NavLink to="/signIn" className="text-buttonBrown hover:text-buttonDarkBrown">
              Sign in
            </NavLink>
          </p>
        </div>
      </section>
    </>
  )
}

export default Signup