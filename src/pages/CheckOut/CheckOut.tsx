import { Link } from 'react-router-dom'
import BenefitsBar from '../../components/BenefitsBar'
import TextInput from '../../components/TextInput'

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import User from "../../types/UserType"
import { nameRegex } from '../../types/Regex'
import { useEffect, useState } from 'react'

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
        .min(2, "Province invalid")
        .trim(),
    addOnAddress: z.string().trim(),
    addInfo: z.string().trim(),
    email: z.string()
        .email("Email invalid")
        .trim(),
})

type FormData = z.infer<typeof schema>

interface CheckOutProps {
    user: User | null | undefined
}

const CheckOut: React.FC<CheckOutProps> = ({ user }) => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {

        let isMounted = true

        if (user && user != undefined) {
            if (isMounted) { setLoading(false) }
        } else if (!user) {
            if (isMounted) { setLoading(false) }
        }
        return () => {isMounted = false}

    }, [])

    const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
    })

    const fetchAddress = async (cep: string) => {
        try {

            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            const data = await response.json()

            if (!data.erro) {
                setValue('streetAddress', data.logradouro)
                setValue('city', data.localidade)
                setValue('province', data.uf)
            }

        } catch (error) {
            setValue('streetAddress', '')
            setValue('city', '')
            setValue('province', '')
        }
    }

    const onSubmit = async (data: FormData) => {
        try {
            toast.success('Form submitted', {
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
        catch (error) {
            toast.error('Invalid data', {
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

    if (loading) {
        return (
            <div className="flex justify-center mx-auto py-10">
                <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
            </div>
        )
    }

    return (
        <>
            {user
                ?
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

                    <section className="flex flex-col md:flex-row justify-center gap-10 xl:gap-32 items-center mx-4 py-20">

                        <form>
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
                                <TextInput
                                    type="text"
                                    id="display-zipCode"
                                    maskType='cep'
                                    className="mt-1 block w-full px-3 py-4 border border-carouselIndexGray rounded-lg shadow-sm focus:outline-none focus:ring-buttonDarkBrown focus:border-buttonDarkBrown sm:text-sm"
                                    {...register('zipCode')}
                                    onBlur={(e) => fetchAddress(e.target.value)}
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

                        <div className="flex flex-col gap-8 self-center md:self-start">

                            <div className="flex flex-row justify-between gap-20 items-center">
                                <p className='text-2xl font-semibold'>Product</p>
                                <p className='text-2xl font-semibold'>Subtotal</p>
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <p className='text-sm font-semibold text-caption'>Product Name <span className="text-black">X 1</span> </p>
                                <p className='text-sm font-semibold'>$250000</p>
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <p className='text-sm font-semibold'>Subtotal</p>
                                <p className='text-sm font-semibold'>$250000</p>
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <p className='text-sm font-semibold'>Total</p>
                                <p className='text-2xl text-buttonBrown font-semibold'>$250000</p>
                            </div>

                            <div className="w-full h-px bg-carouselIndexGray"></div>

                            <div className="flex flex-col gap-4 self-center md:self-start">
                                <div className="flex flex-row gap-4">
                                    <input type="checkbox" id="directBankTransfer" defaultChecked />
                                    <label htmlFor="directBankTransfer" className='font-semibold text-black'>Direct Bank Transfer</label>
                                </div>

                                <p className='text-caption md:text-justify font-semibold'>
                                    Make your payment directly into our bank account. Please use
                                    <br /> your Order ID as the payment reference. Your order will not be
                                    <br /> shipped until the funds have cleared in our account.
                                </p>

                                <div className="flex flex-row gap-4 mt-4">
                                    <input type="checkbox" id="directBankTransfer" disabled />
                                    <label htmlFor="directBankTransfer" className='font-semibold text-caption'>Direct Bank Transfer</label>
                                </div>
                                <div className="flex flex-row gap-4">
                                    <input type="checkbox" id="cashOnransfer" disabled />
                                    <label htmlFor="cashOnransfer" className='font-semibold text-caption'>Cash On Delivery</label>
                                </div>

                                <p className='text-black md:text-justify font-semibold'>
                                    Your personal data will be used to support your experience
                                    <br /> throughout this website, to manage access to your account, and
                                    <br /> for other purposes described in our <span className="font-semibold">privacy policy.</span>
                                </p>

                                <button onClick={handleSubmit(onSubmit)} className='mt-4 px-20 py-3 self-center rounded-xl hover:bg-buttonBrown hover:border-buttonDarkBrown hover:text-white border border-titleGray'>Place order</button>
                            </div>

                        </div>

                    </section>

                    <BenefitsBar />
                </>
                :
                <div>Você não pode acessar essa página sem estar logado!</div>
            }
        </>
    )
}

export default CheckOut