

import ProductsHome from "../../components/ProductsHome"

const Home = () => {

  return (
    <>
      <section className="relative flex justify-center md:justify-end items-center py-40 px-40">
        <div className="absolute inset-0 w-full h-full">
          <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/staticImages/homeBanner.png" alt="Furniro Home Banner" className='w-full h-full object-cover z-30' />
        </div>
        
        <div className="flex flex-col z-40">
          <div className="flex flex-col gap-10 justify-center pt-12 pb-8 px-4 md:pl-8 md:pr-20 bg-boxLightBrown">
            <div className="flex flex-col">
              <p className="text-titleGray font-semibold">New Arrival</p>
              <h1 className="text-5xl font-bold text-buttonBrown leading-[4rem]">Discover Our <br/> New Collection</h1>
              <p className="text-titleGray mt-4 font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Ut <br/> elit tellus, luctus nec ullamcorper mattis.</p>
            </div>
            <button className="w-[220px] py-6 text-white font-bold bg-buttonBrown hover:bg-buttonDarkBrown focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-buttonDarkBrown">BUY NOW</button>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4 justify-center items-center my-20">
        <h1 className="font-bold text-4xl text-titleGray">Browse The Range</h1>
        <h3 className="font-medium text-subtitleGray">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
        <div className="flex flex-row flex-wrap items-center justify-center mx-10 gap-10 mt-8">
          <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/staticImages/dining.png" alt="Dining Room" className="cursor-pointer transition ease-in-out hover:scale-110" />
          <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/staticImages/livingRoom.png" alt="Living Room" className="cursor-pointer transition ease-in-out hover:scale-110" />
          <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/staticImages/bedroom.png" alt="Bedroom" className="cursor-pointer transition ease-in-out hover:scale-110" />
        </div>
      </section>

      <ProductsHome />

      <section>

      </section>

      <section className="flex flex-col gap-4 justify-center items-center my-20 mx-10">
        <h3 className="font-medium text-subtitleGray">Share your setup with</h3>
        <h1 className="font-bold text-4xl text-titleGray">#FurniroFurniture</h1>
        <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/staticImages/shareImages.png" alt="Furniro Furniture" />
      </section>
    </>
  )
}

export default Home