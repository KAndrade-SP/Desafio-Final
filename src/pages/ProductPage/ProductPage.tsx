import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import Counter from '../../components/Counter'
import { useState } from 'react'
import { addToCart } from '../../redux/Cart/actions'

const ProductPage = () => {

    const { sku } = useParams<{ sku: string }>()
    const product = useSelector((state: RootState) =>
        state.products.products.find((p) => p.SKU === sku)
    )

    const [isSelectedSize, setIsSelectedSize] = useState<number>(1)
    const handleClickSize = (sizeValue: number) => { setIsSelectedSize(sizeValue) }

    const [quantity, setQuantity] = useState(0)
    const dispatch = useDispatch()

    if (!product) {
        return (
            <section className="flex flex-col gap-10 items-center justify-center mx-auto py-20">
                <h3 className="font-medium text-3xl text-titleGray text-center">The product was not found</h3>
                <Link to="/shop">
                    <button className='px-20 py-3 self-center rounded-xl hover:bg-buttonBrown hover:border-buttonDarkBrown hover:text-white border border-titleGray'>Go back</button>
                </Link>
            </section>
        )
    }

    const handleAddToCart = () => {
        if (quantity > 0) {
            dispatch(addToCart(product, quantity))
        }
    }

    const handleCounterChange = (count: number) => {
        setQuantity(count)
    }


    const renderStars = () => {

        if (product?.rating != undefined) {

            const fullStars = Math.floor(product?.rating)
            const halfStar = product?.rating % 1 >= 0.5
            const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)

            return (
                <>
                    <div className="flex flex-row">
                        {[...Array(fullStars)].map((_, index) => (
                            <svg key={`full-${index}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-starYellow">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.217 3.743a1 1 0 00.95.69h3.945c.969 0 1.371 1.24.588 1.81l-3.194 2.32a1 1 0 00-.364 1.118l1.218 3.743c.3.921-.755 1.688-1.54 1.118l-3.194-2.32a1 1 0 00-1.176 0l-3.194 2.32c-.785.57-1.84-.197-1.54-1.118l1.218-3.743a1 1 0 00-.364-1.118L2.146 9.17c-.783-.57-.38-1.81.588-1.81h3.945a1 1 0 00.95-.69l1.217-3.743z" />
                            </svg>
                        ))}
                        {halfStar && (
                            <svg key="half" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-starYellow">
                                <defs>
                                    <linearGradient id="half-gradient">
                                        <stop offset="50%" stopColor="currentColor" />
                                        <stop offset="50%" stopColor="transparent" />
                                    </linearGradient>
                                </defs>
                                <path fill="url(#half-gradient)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.217 3.743a1 1 0 00.95.69h3.945c.969 0 1.371 1.24.588 1.81l-3.194 2.32a1 1 0 00-.364 1.118l1.218 3.743c.3.921-.755 1.688-1.54 1.118l-3.194-2.32a1 1 0 00-1.176 0l-3.194 2.32c-.785.57-1.84-.197-1.54-1.118l1.218-3.743a1 1 0 00-.364-1.118L2.146 9.17c-.783-.57-.38-1.81.588-1.81h3.945a1 1 0 00.95-.69l1.217-3.743z" />
                            </svg>
                        )}
                        {[...Array(emptyStars)].map((_, index) => (
                            <svg key={`empty-${index}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-gray-300">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.217 3.743a1 1 0 00.95.69h3.945c.969 0 1.371 1.24.588 1.81l-3.194 2.32a1 1 0 00-.364 1.118l1.218 3.743c.3.921-.755 1.688-1.54 1.118l-3.194-2.32a1 1 0 00-1.176 0l-3.194 2.32c-.785.57-1.84-.197-1.54-1.118l1.218-3.743a1 1 0 00-.364-1.118L2.146 9.17c-.783-.57-.38-1.81.588-1.81h3.945a1 1 0 00.95-.69l1.217-3.743z" />
                            </svg>
                        ))}
                    </div>
                </>
            )
        }
    }

    return (
        <>
            <section className="bg-divisorLightBeige h-auto">
                <div className="flex flex-row gap-8 max-w-[1440px] justify-start mx-10 3xl:mx-64 py-7">

                    <div className="flex flex-row gap-8 items-center">
                        <Link to={'/'}>
                            <p className='text-caption hover:text-subtitleGray'>Home</p>
                        </Link>
                        <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/icons/arrow.svg" alt="Arrow Icon" />

                        <Link to={'/shop'}>
                            <p className='text-caption hover:text-subtitleGray'>Shop</p>
                        </Link>
                        <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/icons/arrow.svg" alt="Arrow Icon" />
                    </div>

                    <div className="hidden md:flex w-px h-8 bg-subtitleGray mx-2"></div>

                    <div className="flex items-center">
                        <p className='font-medium'>{product?.productName}</p>
                    </div>

                </div>
            </section>

            <section className="flex flex-col md:flex-row gap-20 3xl:gap-52 justify-center items-center md:items-start mt-10 border-b-2 pb-20">

                <div className="flex flex-row flex-wrap justify-center items-center gap-8">
                    <div className="flex flex-row mini:flex-col flex-wrap gap-8">
                        <img src={product?.photoUrl} alt="Additional photo of product" className='w-10 md:w-16 rounded-lg transition ease-in-out hover:scale-105 cursor-pointer' />
                        <img src={product?.photoUrl} alt="Additional photo of product" className='w-10 md:w-16 rounded-lg transition ease-in-out hover:scale-105 cursor-pointer' />
                        <img src={product?.photoUrl} alt="Additional photo of product" className='w-10 md:w-16 rounded-lg transition ease-in-out hover:scale-105 cursor-pointer' />
                        <img src={product?.photoUrl} alt="Additional photo of product" className='w-10 md:w-16 rounded-lg transition ease-in-out hover:scale-105 cursor-pointer' />
                    </div>
                    <img src={product?.photoUrl} alt="Photo of product" className='rounded-lg mini:self-start transition ease-in-out hover:scale-105 cursor-pointer' />
                </div>

                <div className="flex flex-col gap-8 ">

                    <div className="flex flex-col gap-4">
                        <h2 className='font-medium text-titleGray text-4xl'>{product?.productName}</h2>
                        <h3 className='text-caption font-medium text-2xl'>${product?.priceWithDiscount}</h3>
                    </div>

                    <div className='flex flex-row gap 6'>
                        <p>{renderStars()}</p>
                        <div className="hidden md:flex w-px h-6 bg-caption mx-2"></div>
                        <p className='text-caption font-medium'>5 customers reviews</p>
                    </div>

                    <p>{product?.description}</p>

                    <div className="flex flex-col gap-2">
                        <p>Size</p>
                        <div className="flex flex-row gap-6">
                            {product?.sizes.map((size, index) => (
                                <div
                                    onClick={() => handleClickSize(index)}
                                    key={index}
                                    className={isSelectedSize === index ? 'bg-buttonBrown flex justify-center items-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-buttonDarkBrown rounded-md w-[40px] h-[40px] text-white hover:bg-buttonDarkBrown' : 'bg-divisorLightBeige flex justify-center items-center cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-buttonDarkBrown rounded-md w-[40px] h-[40px] hover:bg-buttonBrown hover:text-white'}
                                >
                                    {size}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p>Color</p>
                        <div className="flex flex-row gap-6">
                            {product?.colors.map((color, index) => (
                                <div
                                    key={index}
                                    className={color === "White" ? 'cursor-pointer transition ease-in-out hover:scale-105 rounded-full w-10 h-10 border border-subtitleGray shadow-xl' : 'cursor-pointer transition ease-in-out hover:scale-105 rounded-full w-10 h-10 shadow-xl'}
                                    style={{ backgroundColor: color }}
                                ></div>
                            ))}
                        </div>
                    </div>


                    <div className="flex flex-row gap-4">
                        <Counter onChange={handleCounterChange} />
                        <button onClick={handleAddToCart} className='px-8 py-3 rounded-xl hover:bg-buttonBrown hover:border-buttonDarkBrown hover:text-white border border-titleGray'>Add to Cart</button>
                    </div>

                    <div className="w-full h-px bg-carouselIndexGray"></div>

                    <div className="flex flex-col items-start gap-4 text-caption">
                        <div className="flex justify-between w-full">
                            <p className="w-32">SKU</p>
                            <span className="w-8">:</span>
                            <p className="flex-grow tabular-nums">{product?.SKU}</p>
                        </div>

                        <div className="flex justify-between w-full">
                            <p className="w-32">Category</p>
                            <span className="w-8">:</span>
                            <p className="flex-grow tabular-nums">{product?.category}</p>
                        </div>

                        <div className="flex justify-between w-full">
                            <p className="w-32">Tags</p>
                            <span className="w-8">:</span>
                            {product?.tags.map((tag, index) => (
                                <div key={index} className="flex-grow tabular-nums">
                                    <p>{tag}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-between w-full">
                            <p className="w-32">Share</p>
                            <span className="w-8">:</span>
                            <div className='flex-grow tabular-nums '>
                                <div className='flex flex-row gap-6 items-center'>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/icons/akar-icons_facebook-fill.svg" alt="Facebook Link Icon" className='hover:opacity-70' />
                                    </a>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/icons/akar-icons_linkedin-box-fill.svg" alt="LinkedIn Link Icon" className='hover:opacity-70' />
                                    </a>
                                    <a href="https://x.com/" target="_blank">
                                        <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/icons/ant-design_twitter-circle-filled.svg" alt="Twitter Link Icon" className='hover:opacity-70' />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>

            <section className="flex flex-col gap-10 justify-center items-center py-10">
                <div className="flex flex-row gap-20">
                    <h2 className='font-semibold text-2xl text-titleGray'>Description</h2>
                    <h2 className='font-medium text-2xl text-caption'>Additional Information</h2>
                </div>

                <p>{product?.additionalInformation}</p>

                <div className='flex flex-row flex-wrap mx auto gap-10'>
                    <img src={product?.photoUrl} alt="Additional photo of product" className='rounded-md transition ease-in-out hover:scale-105 cursor-pointer' />
                    <img src={product?.photoUrl} alt="Additional photo of product" className='rounded-md transition ease-in-out hover:scale-105 cursor-pointer' />
                </div>

            </section>

            <section className="flex flex-col gap-10 justify-center items-center py-10">
                <h1 className="font-semibold text-3xl">Related products</h1>


            </section>
        </>
    )
}

export default ProductPage