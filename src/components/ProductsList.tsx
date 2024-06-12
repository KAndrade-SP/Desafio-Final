import React from 'react'

const ProductsList = () => {
  return (
    <>
        <section className="flex flex-col flex-wrap gap-8 justify-center items-center">
            <div className="flex flex-row gap-4">
                
                <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg w-64 h-64">
                    <div className="flex items-center justify-center w-full h-4/6">
                        <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/productsImages/image+1.png" alt="Product1" className="object-cover h-full w-full" />
                    </div>
                    <div className="w-full h-2/6 flex flex-col items-center justify-around">
                        <h3 className="text-lg font-semibold">title</h3>
                        <p className="text-gray-500">subtitle</p>
                        <p className="text-lg font-bold">$ 15000</p>
                    </div>
                </div>

                <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg w-64 h-64">
                    <div className="flex items-center justify-center w-full h-4/6">
                        <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/productsImages/image+1.png" alt="Product1" className="object-cover h-full w-full" />
                    </div>
                    <div className="w-full h-2/6 flex flex-col items-center justify-around">
                        <h3 className="text-lg font-semibold">title</h3>
                        <p className="text-gray-500">subtitle</p>
                        <p className="text-lg font-bold">$ 15000</p>
                    </div>
                </div>

                <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg w-64 h-64">
                    <div className="flex items-center justify-center w-full h-4/6">
                        <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/productsImages/image+1.png" alt="Product1" className="object-cover h-full w-full" />
                    </div>
                    <div className="w-full h-2/6 flex flex-col items-center justify-around">
                        <h3 className="text-lg font-semibold">title</h3>
                        <p className="text-gray-500">subtitle</p>
                        <p className="text-lg font-bold">$ 15000</p>
                    </div>
                </div>

                <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg w-64 h-64">
                    <div className="flex items-center justify-center w-full h-4/6">
                        <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/productsImages/image+1.png" alt="Product1" className="object-cover h-full w-full" />
                    </div>
                    <div className="w-full h-2/6 flex flex-col items-center justify-around">
                        <h3 className="text-lg font-semibold">title</h3>
                        <p className="text-gray-500">subtitle</p>
                        <p className="text-lg font-bold">$ 15000</p>
                    </div>
                </div>
                
            </div>
        </section>
        
    </>
  )
}

export default ProductsList