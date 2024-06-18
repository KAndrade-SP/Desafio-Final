import React from 'react'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { removeFromCart } from '../redux/Cart/actions'

const CartOverlay: React.FC = () => {

    const dispatch = useDispatch()
    const cartItems = useSelector((state: RootState) => state.cart.items)

    const handleRemoveFromCart = (productSKU: string) => {
        dispatch(removeFromCart(productSKU))
    }

    const total = cartItems.reduce((acc, item) => acc + item.product.priceWithDiscount * item.quantity, 0).toFixed(2)

    return (
        <>
            <div className='flex flex-col gap-4 fixed inset-y-0 top-0 right-0 z-40 w-1/2 xl:w-1/3 2xl:w-1/4 h-[75%] px-10 items justify-between bg-white shadow-lg overflow-y-auto'>

                <div>
                    <div className="flex items-center justify-between border-b py-6">
                        <h3 className="hidden sm:flex font-semibold text-xl">Shopping Cart</h3>
                        <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/icons/cart-close.svg" alt="Close cart icon to close cart overlay" className='transition ease-in-out hover:scale-105 cursor-pointer'/>
                    </div>

                    <div className="flex flex-col gap-4">
                        {cartItems.length === 0 ? (
                            <div className='flex flex-col justify-center items-center gap-4 py-4'>
                                <h2 className="font-medium text-md text-titleGray text-center">The cart was empty!</h2>
                                <Link to="/shop">
                                    <button className='px-10 py-3 rounded-xl text-buttonBrown font-bold bg-white hover:bg-buttonDarkBrown border-2 border-buttonBrown hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-buttonDarkBrown'>Go to shop</button>
                                </Link>
                            </div>
                        ) : (
                            <>
                                {cartItems.map((item) => (
                                    <div key={item.product.SKU} className="flex items-center justify-between py-4 px-0">

                                        <div className="flex flex-row gap-4 items-center px-2 py-2 rounded-lg">
                                            <img
                                                src={item.product.photoUrl}
                                                alt={item.product.productName}
                                                className="w-16 h-16 object-cover rounded-lg"
                                            />
                                            <div className='flex flex-col gap-2'>
                                                <div className="font-semibold">{item.product.productName}</div>
                                                <div className="text-sm font-semibold">{item.quantity} X <span className='text-buttonBrown'>$ {item.product.priceWithDiscount.toFixed(2)}</span></div>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => handleRemoveFromCart(item.product.SKU)}
                                            className="p-0 m-0 flex items-center justify-end"
                                        >
                                            <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/icons/cart-item-remove.svg" alt="Close icon to remove cart item" className='transition ease-in-out hover:scale-105'/>
                                        </button>

                                    </div>
                                ))}
                            </>
                        )
                        }
                    </div>
                </div>

                <div className=''>
                    <div className="flex justify-between">
                        <p className='font-semibold'>Subtotal</p>
                        <p className='font-semibold text-buttonBrown'>${total}</p>
                    </div>

                    <div className="flex flex-row text-sm gap-2 border-t py-6 justify-between">
                        <Link to={'/cart'}>
                            <div className="py-1 px-4 flex items-center justify-center rounded-xl text-titleGray font-medium bg-white hover:bg-buttonDarkBrown border-2 border-titleGray hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-buttonDarkBrown cursor-pointer">
                                <p>Cart</p>
                            </div>
                        </Link>

                        <Link to={'/checkout'}>
                            <div className="py-1 px-4 flex items-center justify-center rounded-xl text-titleGray font-medium bg-white hover:bg-buttonDarkBrown border-2 border-titleGray hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-buttonDarkBrown cursor-pointer">
                                <p>Checkout</p>
                            </div>
                        </Link>
                        <Link to={'/'}>
                            <div className="py-1 px-4 flex items-center justify-center rounded-xl text-titleGray font-medium bg-white hover:bg-buttonDarkBrown border-2 border-titleGray hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-buttonDarkBrown cursor-pointer">
                                <p>Comparision</p>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CartOverlay