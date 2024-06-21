import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

import BenefitsBar from '../../components/BenefitsBar'

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import InputMask from 'react-input-mask'

import { checkOutSchema, FormData } from '../../types/CheckOutValidations'
import { submitForm } from '../../redux/FormCheckout/actions'

const CheckOut = () => {

    const dispatch = useDispatch()
    const { register, handleSubmit, setValue, clearErrors, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(checkOutSchema),
    })

    const onSubmit = (formData: FormData) => {
        submitForm(formData, dispatch)
    }

    const cartItems = useSelector((state: RootState) => state.cart.items)
    const subTotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0).toFixed(2)
    const total = cartItems.reduce((acc, item) => acc + item.product.priceWithDiscount * item.quantity, 0).toFixed(2)
   
    const fetchAddress = async (cep: string) => {
        try {

            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            const data = await response.json()

            if (!data.erro) {
                setValue('streetAddress', data.logradouro)
                setValue('city', data.localidade)
                setValue('province', data.uf)

                clearErrors(['streetAddress', 'city', 'province'])
            }

        } catch (error) {
            setValue('streetAddress', '')
            setValue('city', '')
            setValue('province', '')
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
                        <InputMask
                            type="text"
                            id="display-zipCode"
                            className="mt-1 block w-full px-3 py-4 border border-carouselIndexGray rounded-lg shadow-sm focus:outline-none focus:ring-buttonDarkBrown focus:border-buttonDarkBrown sm:text-sm"
                            mask="99999-999"
                            maskChar=""
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

                    {cartItems.length === 0 ? (
                        <div className='flex flex-col justify-center items-center gap-6'>
                            <h3 className="font-medium text-3xl text-titleGray text-center">The cart was empty!</h3>
                            <Link to="/shop">
                                <button className='px-20 py-3 self-center rounded-xl text-buttonBrown font-bold bg-white hover:bg-buttonDarkBrown border-2 border-buttonBrown hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-buttonDarkBrown'>Go to shop</button>
                            </Link>
                        </div>

                    ) :
                        <>
                            <div className="flex flex-row justify-between gap-20 items-center">
                                <p className='text-2xl font-semibold'>Product</p>
                                <p className='text-2xl font-semibold'>Subtotal</p>
                            </div>
                            {cartItems.map((item) => (
                                <div key={item.product.SKU} className='flex flex-col gap-4'>

                                    <div className="flex flex-row justify-between items-center">
                                        <p className='text-md font-medium text-caption'>{item.product.productName} <span className="text-black">X {item.quantity}</span> </p>
                                        <p className='text-md'>$ {(item.product.priceWithDiscount * item.quantity).toFixed(2)}</p>
                                    </div>
                                    <div className="flex flex-row justify-between items-center">
                                        <p className='text-md font-medium'>Subtotal</p>
                                        <p className='text-md'>$ {subTotal}</p>
                                    </div>

                                </div>
                            ))}
                            <div className="flex flex-row justify-between items-center">
                                <p className='text-md font-medium'>Total</p>
                                <p className='text-2xl text-buttonBrown font-semibold'>$ {total}</p>
                            </div>
                        </>
                    }

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
    )
}

export default CheckOut