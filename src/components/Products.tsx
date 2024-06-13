import React from "react"
import Product from "../types/ProductsType"

interface ProductProps {
    productCard: Product | null
}

const Products: React.FC<ProductProps> = ({ productCard }) => {
    return (
        <>
            <div className="relative group flex flex-col items-center bg-cardWhite shadow-lg h-[440px] cursor-pointer overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex flex-col gap-4">
                        <button className="z-10 hover:bg-boxLightBrown px-10 py-3 w-52 self-center bg-white text-sm font-semibold text-buttonBrown">
                            Add to cart
                        </button>
                        <div className="flex flex-row gap-4">
                            <div className="flex flex-row gap-2 z-10 cursor-pointer hover:opacity-75">
                                <img
                                    src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/icons/gridicons_share.svg"
                                    alt="Share Icon"
                                />
                                <p className="text-white font-medium">Share</p>
                            </div>
                            <div className="flex flex-row gap-2 z-10 cursor-pointer hover:opacity-75">
                                <img
                                    src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/icons/compare-svgrepo-com+1.svg"
                                    alt="Share Icon"
                                />
                                <p className="text-white font-medium">Compare</p>
                            </div>
                            <div className="flex flex-row gap-2 z-10 cursor-pointer hover:opacity-75">
                                <img
                                    src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/icons/Heart.svg"
                                    alt="Share Icon"
                                />
                                <p className="text-white font-medium">Like</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full h-4/6">
                    <img
                        src={productCard?.photoUrl}
                        alt="Product1"
                        className="object-cover h-full w-full"
                    />
                </div>
                <div className="w-full h-2/6 flex flex-col py-4 px-6 justify-around">
                    <h3 className="text-2xl text-titleGray font-semibold">{productCard?.productName}</h3>
                    <p className="text-subtitleGray font-medium">{productCard?.subtitle}</p>
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-lg font-bold">${productCard?.price}</p>
                        <p className="text-sm font-medium text-caption line-through">
                            {(productCard?.isInSale ? '$' + productCard.priceWithDiscount : <></>)}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products
