import { Link } from "react-router-dom"
import ProductsList from "../../components/ProductsList"

const Shop = () => {
  return (
    <>
      {/*Shop Banner Section*/}
      <section className='relative h-[315px] flex justify-center items-center'>
        <div className='absolute inset-0 w-full h-full'>
          <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/staticImages/ShopBanner.png" alt="" className='w-full h-full object-cover z-30'/>
        </div>

        <div className="flex flex-col gap-4 justify-center z-40">
          <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/logos/Meubel-House_Logos-05.svg" alt="Furniro Compact Logo" />
          <h2 className='font-semibold text-5xl text-black text-center'>Shop</h2>
          <div className='flex flex-row justify-center gap-3'>
            <Link to="/">
              <p className='font-semibold hover:text-subtitleGray'>Home</p>
            </Link>
            <img src='https://final-challenge-compass.s3.us-east-2.amazonaws.com/icons/arrow.svg'></img>
            <p>Shop</p>
          </div>
        </div>
      </section>

      {/*Shop Product List*/}
      <section>
        <ProductsList />
      </section>

      {/*Shop Benefits*/}
      <section className="flex flex-row flex-wrap gap-10 px-4 md:flex-row bg-divisorLightBeige h-auto justify-around py-24">
        <div className="flex flex-row gap-4">
          <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/icons/trophy.svg" alt="Trophy Icon" />
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-2xl">High Quality</h3>
            <p className="text-caption font-medium">crafted from top materials</p>
          </div>
        </div>

        <div className="flex flex-row gap-4">
          <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/icons/guarantee.svg" alt="Guarantee Icon" />
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-2xl">Warranty Protection</h3>
            <p className="text-caption font-medium">Over 2 years</p>
          </div>
        </div>

        <div className="flex flex-row gap-4">
          <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/icons/shipping.svg" alt="Free Shipping Icon" />
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-2xl">Free Shipping</h3>
            <p className="text-caption font-medium">crafted from top materials</p>
          </div>
        </div>

        <div className="flex flex-row gap-4">
          <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/icons/customer-support.svg" alt="Customer Support Icon" />
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-2xl">24 / 7 Support</h3>
            <p className="text-caption font-medium">Dedicated support</p>
          </div>
        </div>  
      </section>
      
    </>
  )
}

export default Shop