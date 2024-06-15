import { Link } from 'react-router-dom'

const ProductPage = () => {

    return (
        <>
            <section className="bg-divisorLightBeige h-auto place-content-center">
                <div className="flex flex-row gap-8 max-w-[1440px] mx-auto py-7">

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
                        <p className='font-medium'>NomeProduto</p>
                    </div>
                </div>
            </section>

            <section className="flex flex-row gap-10 justify-center items-center">

                <div className="flex flex-row gap-4">
                    <div className="flex flex-col gap-8">

                    </div>
                    <img src="" alt="" />
                </div>

                <div className="flex flex-col gap-8">

                    <h2>Asgaard sofa</h2>
                    <h3>$250000</h3>

                    <div className='flex flex-row gap 6'>
                        <p>stars</p>
                        <div className="hidden md:flex w-px h-6 bg-caption mx-2"></div>
                        <p>reviews</p>
                    </div>

                    <p>Description product</p>

                    <p>Size</p>
                    <div className="flex flex-row gap-6">
                        <div>L</div>
                        <div>L</div>
                        <div>L</div>
                    </div>

                    <p>Color</p>
                    <div className="flex flex-row gap-6">
                        <div>L</div>
                        <div>L</div>
                        <div>L</div>
                    </div>

                    <div className="flex flex-row gap-4">
                        <input type="number" placeholder='1'/>
                        <button>Add to Cart</button>
                    </div>
                </div>

            </section>
        </>
    )
}

export default ProductPage