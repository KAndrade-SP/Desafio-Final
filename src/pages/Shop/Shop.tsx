import { Link } from "react-router-dom"
import ProductsList from "../../components/ProductsList"
import BenefitsBar from "../../components/BenefitsBar"

const Shop = () => {
  return (
    <>
      <section className='relative h-[315px] flex justify-center items-center'>
        <div className='absolute inset-0 w-full h-full'>
          <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/staticImages/ShopBanner.png" alt="Shop Banner" className='w-full h-full object-cover z-30' />
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

      <ProductsList />

      <BenefitsBar />

    </>
  )
}

export default Shop