import CarouselHome from "../../components/CarouselHome"
import ProductsHome from "../../components/ProductsHome"

const Home = () => {

  return (
    <>
      <section className="relative flex justify-center md:justify-end items-center py-40 px-10 md:px-20 2xl:px-80">
        <div className="absolute inset-0 w-full h-full">
          <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/staticImages/homeBanner.png" alt="Furniro Home Banner" className='w-full h-full object-cover z-30' />
        </div>
        
        <div className="flex flex-col z-40">
          <div className="flex flex-col gap-10 items-center md:items-start justify-center pt-12 pb-8 px-4 md:pl-8 md:pr-20 bg-boxLightBrown">
            <div className="flex flex-col">
              <p className="text-titleGray text-center md:text-left font-semibold">New Arrival</p>
              <h1 className="text-3xl mini:text-4xl md:text-5xl text-center md:text-left font-bold text-buttonBrown leading-[3rem] md:leading-[4rem]">Discover Our <br/> New Collection</h1>
              <p className="text-titleGray text-center md:text-left mt-4 font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Ut <br/> elit tellus, luctus nec ullamcorper mattis.</p>
            </div>
            <button className="px-10 md:px-20 py-6 text-white font-bold bg-buttonBrown hover:bg-buttonDarkBrown focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-buttonDarkBrown">BUY NOW</button>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4 justify-center items-center my-20">
        <div className="flex flex-col gap-4 mx-10 md:mx-0">
          <h1 className="font-bold text-4xl text-titleGray text-center">Browse The Range</h1>
          <h3 className="font-medium text-subtitleGray text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
        </div>
        
        <div className="flex flex-row flex-wrap items-center justify-center mx-10 gap-10 mt-8">
          <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/staticImages/dining.png" alt="Dining Room" className="cursor-pointer transition ease-in-out hover:scale-110" />
          <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/staticImages/livingRoom.png" alt="Living Room" className="cursor-pointer transition ease-in-out hover:scale-110" />
          <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/staticImages/bedroom.png" alt="Bedroom" className="cursor-pointer transition ease-in-out hover:scale-110" />
        </div>
      </section>

      <ProductsHome />

      <section className="flex flex-row gap-20 justify-center items-center my-20 bg-carouselLightBox py-20 px-20">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h2 className='text-4xl font-bold text-titleGray leading-[3rem]'>50+ Beautiful rooms <br/> inspiration</h2>
            <p className='text-subtitleGray font-medium'>Our designer already made a lot of beautiful <br/> prototipe of rooms that inspire you</p>
          </div>
          <button className=" w-48 px-2 py-4 text-white font-bold bg-buttonBrown hover:bg-buttonDarkBrown focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-buttonDarkBrown">Explore More</button>
        </div>

        <CarouselHome />
      </section>
      

      <section className="flex flex-col gap-4 justify-center items-center my-20 mx-10">
        <div className="flex flex-col gap-4 mx-10 md:mx-0">
          <h3 className="font-medium text-subtitleGray text-center">Share your setup with</h3>
          <h1 className="font-bold text-3xl md:text-4xl text-titleGray text-center">#FurniroFurniture</h1>
        </div>
        <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/staticImages/shareImages.png" alt="Furniro Furniture" />
      </section>
    </>
  )
}

export default Home