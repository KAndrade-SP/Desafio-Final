import { Link } from 'react-router-dom'
import BenefitsBar from '../../components/BenefitsBar'

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { nameRegex } from '../../types/Regex'

const schema = z.object({
    firstName: z.string()
        .min(3, "First name invalid")
        .regex(nameRegex, "The name cannot contain special characters or numbers")
        .trim(),
    lastName: z.string()
        .min(3, "Last name invalid")
        .regex(nameRegex, "The name cannot contain special characters or numbers")
        .trim(),
    companyName: z.string()
        .min(3, "Company invalid")
        .trim(),
    zipCode: z.string()
        .min(8, "ZIP code invalid")
        .max(8, "ZIP code invalid")
        .trim(),
    countryRegion: z.string()
        .min(2, "Country or region invalid")
        .trim(),
    streetAddress: z.string()
        .min(3, "Street address invalid")
        .trim(),
    city: z.string()
        .min(3, "City invalid")
        .trim(),
    province: z.string()
        .min(3, "Province invalid")
        .trim(),
    addOnAddress: z.string()
        .trim(),
    addInfo: z.string()
        .trim(),
    email: z.string().email("Email invalid").trim(),
})

type FormData = z.infer<typeof schema>

const CheckOut = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
    })

    const onSignIn = async (data: FormData) => {

        try {
            toast.success(' Form submitted', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }
        catch (error) {
            toast.error('Invalid data', {
                position: "top-center",
                autoClose: 5000,
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
            <section className='relative h-[315px] flex justify-center items-center'>
                <div className='absolute inset-0 w-full h-full'>
                    <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/staticImages/ShopBanner.png" alt="Shop Banner" className='w-full h-full object-cover z-30' />
                </div>

                <div className="flex flex-col gap-4 justify-center items-center z-40">
                    <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/logos/Meubel-House_Logos-05.svg" alt="Furniro Compact Logo" className='w-[7.8rem]' />
                    <h2 className='font-semibold text-5xl text-black text-center'>Checkout</h2>
                    <div className='flex flex-row justify-center gap-3'>
                        <Link to="/">
                            <p className='font-semibold hover:text-subtitleGray'>Home</p>
                        </Link>
                        <img src='https://final-challenge-compass.s3.us-east-2.amazonaws.com/icons/arrow.svg'></img>
                        <p>Checkout</p>
                    </div>
                </div>
            </section>

            <section className="flex flex-col md:flex-row justify-center items-center py-20">

                
                <form onSubmit={handleSubmit(onSignIn)} className='mx-4'>
                    <h2 className='font-semibold text-3xl text-black text-start mb-12'>Billing details</h2>
                    <div className="flex flex-col sm:flex-row gap-8">
                        <div className="mb-4">
                            <label htmlFor="display-firstName" className="block text-sm font-medium text-black mb-4">First Name</label>
                            <input
                                type="text"
                                id="display-firstName"
                                className="mt-1 block w-full px-3 py-4 border border-carouselIndexGray rounded-lg shadow-sm focus:outline-none focus:ring-buttonDarkBrown focus:border-buttonDarkBrown sm:text-sm"
                                {...register('firstName')}
                            />
                            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="display-lastName" className="block text-sm font-medium text-black mb-4">Last Name</label>
                            <input
                                type="text"
                                id="display-lastName"
                                className="mt-1 block w-full px-3 py-4 border border-carouselIndexGray rounded-lg shadow-sm focus:outline-none focus:ring-buttonDarkBrown focus:border-buttonDarkBrown sm:text-sm"
                                {...register('lastName')}
                            />
                            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="display-companyName" className="block text-sm font-medium text-black mb-4">Company Name (Optional)</label>
                        <input
                            type="text"
                            id="display-companyName"
                            className="mt-1 block w-full px-3 py-4 border border-carouselIndexGray rounded-lg shadow-sm focus:outline-none focus:ring-buttonDarkBrown focus:border-buttonDarkBrown sm:text-sm"
                            {...register('companyName')}
                        />
                        {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="display-zipCode" className="block text-sm font-medium text-black mb-4">ZIP Code</label>
                        <input
                            type="text"
                            id="display-zipCode"
                            className="mt-1 block w-full px-3 py-4 border border-carouselIndexGray rounded-lg shadow-sm focus:outline-none focus:ring-buttonDarkBrown focus:border-buttonDarkBrown sm:text-sm"
                            {...register('zipCode')}
                        />
                        {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="display-countryRegion" className="block text-sm font-medium text-black mb-4">Country / Region</label>
                        <input
                            type="text"
                            id="display-countryRegion"
                            className="mt-1 block w-full px-3 py-4 border border-carouselIndexGray rounded-lg shadow-sm focus:outline-none focus:ring-buttonDarkBrown focus:border-buttonDarkBrown sm:text-sm"
                            {...register('countryRegion')}
                        />
                        {errors.countryRegion && <p className="text-red-500 text-sm mt-1">{errors.countryRegion.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="display-streetAddress" className="block text-sm font-medium text-black mb-4">Street address</label>
                        <input
                            type="text"
                            id="display-streetAddress"
                            className="mt-1 block w-full px-3 py-4 border border-carouselIndexGray rounded-lg shadow-sm focus:outline-none focus:ring-buttonDarkBrown focus:border-buttonDarkBrown sm:text-sm"
                            {...register('streetAddress')}
                        />
                        {errors.streetAddress && <p className="text-red-500 text-sm mt-1">{errors.streetAddress.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="display-city" className="block text-sm font-medium text-black mb-4">Town / City</label>
                        <input
                            type="text"
                            id="display-city"
                            className="mt-1 block w-full px-3 py-4 border border-carouselIndexGray rounded-lg shadow-sm focus:outline-none focus:ring-buttonDarkBrown focus:border-buttonDarkBrown sm:text-sm"
                            {...register('city')}
                        />
                        {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="display-province" className="block text-sm font-medium text-black mb-4">Province</label>
                        <input
                            type="text"
                            id="display-province"
                            className="mt-1 block w-full px-3 py-4 border border-carouselIndexGray rounded-lg shadow-sm focus:outline-none focus:ring-buttonDarkBrown focus:border-buttonDarkBrown sm:text-sm"
                            {...register('province')}
                        />
                        {errors.province && <p className="text-red-500 text-sm mt-1">{errors.province.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="display-addOnAddress" className="block text-sm font-medium text-black mb-4">Add-on address</label>
                        <input
                            type="text"
                            id="display-addOnAddress"
                            className="mt-1 block w-full px-3 py-4 border border-carouselIndexGray rounded-lg shadow-sm focus:outline-none focus:ring-buttonDarkBrown focus:border-buttonDarkBrown sm:text-sm"
                            {...register('addOnAddress')}
                        />
                        {errors.addOnAddress && <p className="text-red-500 text-sm mt-1">{errors.addOnAddress.message}</p>}
                    </div>

                    <div className="mb-8">
                        <label htmlFor="email-address" className="block text-sm font-medium text-black mb-4">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email-address"
                            className="mt-1 block w-full px-3 py-4 border border-carouselIndexGray rounded-lg shadow-sm focus:outline-none focus:ring-buttonDarkBrown focus:border-buttonDarkBrown sm:text-sm"
                            {...register('email')}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    <div className="mb-4">
                        <input
                            type="text"
                            id="display-addInfo"
                            className="mt-1 block w-full px-3 py-4 border border-carouselIndexGray rounded-lg shadow-sm focus:outline-none focus:ring-buttonDarkBrown focus:border-buttonDarkBrown sm:text-sm"
                            {...register('addInfo')}
                            placeholder="Additional information"
                        />
                        {errors.addInfo && <p className="text-red-500 text-sm mt-1">{errors.addInfo.message}</p>}
                    </div>
                </form>

            </section>

            <BenefitsBar />
        </>
    )
}

export default CheckOut