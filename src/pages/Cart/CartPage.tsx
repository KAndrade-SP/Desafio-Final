import React from 'react'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { removeFromCart } from '../../redux/Cart/actions'

import BenefitsBar from '../../components/BenefitsBar'

const Cart: React.FC = () => {

    const dispatch = useDispatch()
    const cartItems = useSelector((state: RootState) => state.cart.items)

    const total = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0).toFixed(2)

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
                        <button className='px-20 py-3 self-center rounded-xl hover:bg-buttonBrown hover:border-buttonDarkBrown hover:text-white border border-titleGray'>Go back</button>
                    </Link>
                </section>
            ) : (
                <section className='flex flex-row gap-10 justify-center items-center py-20'>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.product.SKU} className="flex justify-between items-center p-2 border-b">
                                <img src={item.product.photoUrl} alt={item.product.productName} className="w-16 h-16 object-cover mr-4" />
                                <span className="flex-1">{item.product.productName}</span>
                                <span className="w-24 text-right">$ {item.product.price.toFixed(2)}</span>
                                <span className="w-24 text-right">x {item.quantity}</span>
                                <span className="w-24 text-right">$ {(item.product.price * item.quantity).toFixed(2)}</span>
                                <button
                                    className="m-0 p-0"
                                    onClick={() => dispatch(removeFromCart(item.product.SKU))}
                                >
                                    <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/icons/ant-design_delete-filled.svg" alt="Ant Icon to remove cart item" />
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="text-right mt-4">
                        <span className="text-xl font-semibold">Total: $ {total}</span>
                    </div>
                </section>
            )}

            <BenefitsBar />
        </>

    )
}

export default Cart