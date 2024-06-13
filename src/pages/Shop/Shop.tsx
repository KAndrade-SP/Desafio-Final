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

      {/*Shop Search Bar*/}
      <section className="bg-divisorLightBeige h-auto place-content-center">
        
        <div className="flex flex-col md:flex-row py-7 md:justify-around">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
            <div className="flex flex-row gap-4 items-center">
              <div className="flex flex-row gap-[0.65rem] items-center cursor-pointer transition ease-in-out hover:scale-110">
                <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/icons/system-uicons_filtering.svg" alt="Filters Icon" />
                <p className="font-medium mt-[2px] text-lg">Filter</p>
              </div>

              <div className="flex flex-row gap-3 items-center">
                <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/icons/ci_grid-big-round.svg" alt="Grid Layout Icon" className="w-8 cursor-pointer transition ease-in-out hover:scale-110"/>
                <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/icons/bi_view-list.svg" alt="View Icon" className="cursor-pointer transition ease-in-out hover:scale-110"/>
              </div>
            </div>

            <div className="hidden md:flex w-px h-8 bg-caption mx-2"></div>

            <div className="flex items-center">
              <p className="text-center">Showing 1-16 of 36 results</p>
            </div>
          </div>

          <div className="flex flex-row gap-4 items-center justify-center mt-4 md:mt-0">
            <p>Show</p>
            <p>16</p>
            <p>Short by</p>
            <p>Default</p>
          </div>
          
        </div>

      </section>

      {/*Shop Product List*/}
      <section>
        <ProductsList />
      </section>

      {/*Shop Benefits*/}
      <section>
        
      </section>
      
    </>
  )
}

export default Shop