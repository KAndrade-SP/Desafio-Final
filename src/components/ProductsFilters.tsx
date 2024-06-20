import React from 'react'
import { productsCategories } from '../types/ProductsCategories'

interface ProductFiltersProps {
    searchName: string
    maxPrice: number
    isInSale: boolean
    isNew: boolean
    selectedCategory: string
    onSearchNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onMaxPriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onIsInSaleChange: () => void
    onIsNewChange: () => void
    onSelectedCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
    searchName,
    maxPrice,
    isInSale,
    isNew,
    selectedCategory,
    onSearchNameChange,
    onMaxPriceChange,
    onIsInSaleChange,
    onIsNewChange,
    onSelectedCategoryChange,
}) => {
    return (
        <>
            <section className="bg-divisorLightBeige h-auto place-content-center">
                <div className="flex flex-col gap-10 lmd:flex-row max-w-[1440px] md:mx-10 lg:mx-auto py-6 items-center justify-center">
                    <div>
                        <label htmlFor="searchName" className="block font-semibold text-titleGray mb-2">Product name</label>
                        <input
                            type="text"
                            id="searchName"
                            value={searchName}
                            onChange={onSearchNameChange}
                            className="w-full px-3 py-2 border border-cardWhite rounded-md shadow-sm focus:outline-none focus:ring-buttonDarkBrown focus:border-buttonDarkBrown sm:text-sm"
                        />
                    </div>

                    <div>
                        <label className="block font-semibold text-titleGray mb-2">Category:</label>

                        <select value={selectedCategory} onChange={onSelectedCategoryChange} className="w-full px-4 py-2 border border-cardWhite rounded-md shadow-sm focus:outline-none focus:ring-buttonDarkBrown focus:border-buttonDarkBrown">
                            <option value="All">All</option>
                            {productsCategories.map((category, index) => {
                                return (
                                    <option key={index} value={category}>{category}</option>
                                )
                            })}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="maxPrice" className="block font-semibold text-titleGray mb-2">Price:</label>
                        <input
                            type="range"
                            id="maxPrice"
                            value={maxPrice}
                            min={0}
                            max={10000000}
                            onChange={onMaxPriceChange}
                            className="w-[14rem] md:w-[8rem] lg:w-[16rem] accent-buttonBrown"
                        />
                        <span className="block mt-2">${maxPrice}</span>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2">
                        <label htmlFor="isInSale" className="font-semibold text-titleGray">Sale products</label>
                        <input
                            type="checkbox"
                            id="isInSale"
                            checked={isInSale}
                            onChange={onIsInSaleChange}
                            className="w-8 h-8 rounded accent-buttonBrown mr-2"
                        />
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2">
                        <label htmlFor="isNew" className="font-semibold text-titleGray">New products</label>
                        <input
                            type="checkbox"
                            id="isNew"
                            checked={isNew}
                            onChange={onIsNewChange}
                            className="w-8 h-8 rounded accent-buttonBrown mr-2"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductFilters