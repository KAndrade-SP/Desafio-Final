import { useDispatch } from 'react-redux'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { FormContactData, contactSchema } from '../../types/ContactValidations'
import BenefitsBar from '../../components/BenefitsBar'
import { submitContactForm } from '../../redux/FormContact/actions'

const Contact = () => {

  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm<FormContactData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = (formContactData: FormContactData) => {
    submitContactForm(formContactData, dispatch)
  }

  return (
    <>
      <section className='relative h-[315px] flex justify-center items-center'>
        <div className='absolute inset-0 w-full h-full'>
          <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/staticImages/ShopBanner.png" alt="Shop Banner" className='w-full h-full object-cover z-30' />
        </div>

        <div className="flex flex-col gap-4 justify-center items-center z-40">
          <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/logos/Meubel-House_Logos-05.svg" alt="Furniro Compact Logo" className='w-[7.8rem]' />
          <h2 className='font-semibold text-5xl text-black text-center'>Contact</h2>
          <div className='flex flex-row justify-center gap-3'>
            <Link to="/">
              <p className='font-semibold hover:text-subtitleGray'>Home</p>
            </Link>
            <img src='https://final-challenge-compass.s3.us-east-2.amazonaws.com/icons/arrow.svg'></img>
            <p>Contact</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-10 py-20 mx-4 justify-center items-center">
        <h2 className='font-semibold text-3xl'>Get In Touch With Us</h2>
        <p className='text-caption text-center md:w-1/2'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>

        <div className="flex flex-col md:flex-row gap-10 md:gap-20">

          <div className="flex flex-col gap-10">

            <div className="flex flex-row gap-8">
              <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/icons/local.svg" alt="Local Icon" />
              <div className="flex flex-col gap-2">
                <p className='font-semibold text-lg'>Address</p>
                <p>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>

            <div className="flex flex-row gap-8">
              <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/icons/phone.svg" alt="Phone Icon" />
              <div className="flex flex-col gap-2">
                <p className='font-semibold text-lg'>Phone</p>
                <p>Mobile: +(84) 546-6789</p>
                <p>Hotline: +(84) 456-6789</p>
              </div>
            </div>

            <div className="flex flex-row gap-8">
              <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/icons/clock.svg" alt="Clock Icon" />
              <div className="flex flex-col gap-2">
                <p className='font-semibold text-lg'>Working Time</p>
                <p>Monday-Friday: 9:00 - 22:00</p>
                <p>Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>

          </div>

          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="mb-4">
              <label htmlFor="display-name" className="block text-sm font-medium text-black mb-4">Your name</label>
              <input
                type="text"
                id="display-name"
                className="mt-1 block w-[300px] px-3 py-4 border border-carouselIndexGray rounded-lg shadow-sm focus:outline-none focus:ring-buttonDarkBrown focus:border-buttonDarkBrown sm:text-sm"
                {...register('name')}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div className="mb-8">
              <label htmlFor="email-address" className="block text-sm font-medium text-black mb-4">
                Email address
              </label>
              <input
                type="email"
                id="email-address"
                className="mt-1 block w-[300px] px-3 py-4 border border-carouselIndexGray rounded-lg shadow-sm focus:outline-none focus:ring-buttonDarkBrown focus:border-buttonDarkBrown sm:text-sm"
                {...register('email')}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="display-subject" className="block text-sm font-medium text-black mb-4">Subject</label>
              <input
                type="text"
                id="display-subject"
                className="mt-1 block w-[300px] px-3 py-4 border border-carouselIndexGray rounded-lg shadow-sm focus:outline-none focus:ring-buttonDarkBrown focus:border-buttonDarkBrown sm:text-sm"
                {...register('subject')}
              />
              {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
            </div>


            <div className="mb-4">
              <label htmlFor="display-message" className="block text-sm font-medium text-black mb-4">Message</label>
              <textarea
                id="display-message"
                className="mt-1 block w-[300px] px-3 py-4 border border-carouselIndexGray rounded-lg shadow-sm focus:outline-none focus:ring-buttonDarkBrown focus:border-buttonDarkBrown sm:text-sm"
                {...register('message')}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>

            <button type='submit' className='mt-4 px-20 py-3 self-center rounded-md bg-buttonBrown text-white hover:bg-buttonDarkBrown focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-buttonDarkBrown'>Submit</button>
          </form>

        </div>

      </section>

      <BenefitsBar />
    </>
  )
}

export default Contact