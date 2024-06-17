import React from 'react'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { removeFromCart } from '../../redux/Cart/actions'

import BenefitsBar from '../../components/BenefitsBar'

const Cart: React.FC = () => {

    const dispatch = useDispatch()
    const cartItems = useSelector((state: RootState) => state.cart.items)

    const handleRemoveFromCart = (productSKU: string) => {
        dispatch(removeFromCart(productSKU))
    }

    const subTotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0).toFixed(2)
    const total = cartItems.reduce((acc, item) => acc + item.product.priceWithDiscount * item.quantity, 0).toFixed(2)

    return (
        <>
            <section className='relative h-[315px] flex justify-center items-center'>
                <div className='absolute inset-0 w-full h-full'>
                    <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/staticImages/ShopBanner.png" alt="Shop Banner" className='w-full h-full object-cover z-30' />
                </div>

                <div className="flex flex-col gap-4 justify-center items-center z-40">
                    <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/logos/Meubel-House_Logos-05.svg" alt="Furniro Compact Logo" className='w-[7.8rem]' />
                    <h2 className='font-semibold text-5xl text-black text-center'>Cart</h2>
                    <div className='flex flex-row justify-center gap-3'>
                        <Link to="/">
                            <p className='font-semibold hover:text-subtitleGray'>Home</p>
                        </Link>
                        <img src='https://final-challenge-compass.s3.us-east-2.amazonaws.com/icons/arrow.svg'></img>
                        <p>Cart</p>
                    </div>
                </div>
            </section>

            {cartItems.length === 0 ? (
                <section className="flex flex-col gap-10 items-center justify-center mx-auto py-20">
                    <h3 className="font-medium text-3xl text-titleGray text-center">The cart was empty!</h3>
                    <Link to="/shop">
                        <button className='px-20 py-3 self-center rounded-xl text-buttonBrown font-bold bg-white hover:bg-buttonDarkBrown border-2 border-buttonBrown hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-buttonDarkBrown'>Go back</button>
                    </Link>
                </section>
            ) : (
                <section className="flex flex-col xl:flex-row gap-24 justify-center items-center py-20 mx-4">
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white hidden lg:table">
                            <thead className="bg-divisorLightBeige">
                                <tr>
                                    <th className="px-14 py-2 font-semibold">Product</th>
                                    <th className="px-14 py-2 font-semibold">Price</th>
                                    <th className="px-14 py-2 font-semibold">Quantity</th>
                                    <th className="px-14 py-2 font-semibold">Subtotal</th>
                                    <th className="px-14 py-2"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item.product.SKU} className="border-t">
                                        <td className="px-4 py-10 flex gap-4 items-center">
                                            <img
                                                src={item.product.photoUrl}
                                                alt={item.product.productName}
                                                className="w-16 h-16 object-cover rounded-lg"
                                            />
                                            <span className='text-caption font-semibold'>{item.product.productName}</span>
                                        </td>
                                        <td className="px-4 py-10 text-center text-caption font-semibold">$ {item.product.priceWithDiscount.toFixed(2)}</td>
                                        <td className="px-4 py-10 text-center">{item.quantity}</td>
                                        <td className="px-4 py-10 text-center">$ {(item.product.priceWithDiscount * item.quantity).toFixed(2)}</td>
                                        <td className="px-4 py-10 text-center">
                                            <button
                                                onClick={() => handleRemoveFromCart(item.product.SKU)}
                                                className="p-0 m-0 transition ease-in-out hover:scale-105"
                                            >
                                                <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/icons/ant-design_delete-filled.svg" alt="Ant Icon to remove cart item" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="lg:hidden">
                            {cartItems.map((item) => (
                                <div key={item.product.SKU} className="flex flex-col gap-8 items-center mxd:flex-row mxd:justify-between py-4 px-0 border-t">

                                    <div className="flex flex-row gap-4 items-center px-4 py-4 rounded-lg bg-divisorLightBeige">
                                        <img
                                            src={item.product.photoUrl}
                                            alt={item.product.productName}
                                            className="w-16 h-16 object-cover rounded-lg"
                                        />
                                        <div>
                                            <div className="text-caption font-semibold">{item.product.productName}</div>
                                            <div className="text-caption font-semibold">$ {item.product.priceWithDiscount.toFixed(2)}</div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-4 justify-center">
                                        <div className="flex gap-10 justify-between">
                                            <span className="text-black font-semibold">Quantity:</span>
                                            <span>{item.quantity}</span>
                                        </div>

                                        <div className="flex gap-10 justify-between">
                                            <span className="text-black font-semibold">Subtotal:</span>
                                            <span>$ {(item.product.priceWithDiscount * item.quantity).toFixed(2)}</span>
                                        </div>


                                    </div>

                                    <button
                                        onClick={() => handleRemoveFromCart(item.product.SKU)}
                                        className="p-0 m-0 flex items-center justify-end transition ease-in-out hover:scale-105"
                                    >
                                        <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/icons/ant-design_delete-filled.svg" alt="Ant Icon to remove cart item" />
                                    </button>

                                </div>
                            ))}
                        </div>

                    </div>

                    <div className="flex flex-col gap-8 text-center xl:self-start py-10 px-10 bg-divisorLightBeige">
                        <h2 className='font-bold text-2xl'>Cart Totals</h2>

                        <div className="flex flex-col gap-4">
                            <div className='flex justify-between'>
                                <p className='font-semibold text-md'>Subtotal</p>
                                <p className='text-caption font-semibold'>$ {subTotal}</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='font-semibold text-md'>Total</p>
                                <p className='text-buttonBrown font-semibold'>$ {total}</p>
                            </div>
                        </div>

                        <button className='px-20 py-3 self-center rounded-xl hover:bg-buttonBrown hover:border-buttonDarkBrown hover:text-white border border-titleGray'>Check Out</button>
                    </div>

                </section>
            )}

            <BenefitsBar />
        </>

    )
}

export default Cart