import { useState, useEffect, useMemo } from "react"

import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/Products/actions'
import { RootState } from '../redux/store'

import ProductsCard from "./ProductsCard"
import ProductFilters from "./ProductsFilters"

const ProductsList = () => {

    const dispatch = useDispatch<any>()
    const { products, loading, error } = useSelector((state: RootState) => state.products)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    const [currentPage, setCurrentPage] = useState<number>(1)
    const [productsPerPage, setProductsPerPage] = useState<number>(16)

    const [searchName, setSearchName] = useState<string>('')
    const [maxPrice, setMaxPrice] = useState<number>(100000000)
    const [isInSale, setIsInSale] = useState<boolean>(false)
    const [isNew, setIsNew] = useState<boolean>(false)
    const [sortOrder, setSortOrder] = useState<string>('default')
    const [selectedCategory, setSelectedCategory] = useState<string>('All')

    const [showFilters, setShowFilters] = useState<boolean>(false)

    const handleSearchNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchName(e.target.value)
    const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => setMaxPrice(Number(e.target.value))
    const handleIsInSaleChange = () => setIsInSale(!isInSale)
    const handleIsNewChange = () => setIsNew(!isNew)
    const handleSortOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => setSortOrder(e.target.value)
    const handleSelectedCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => setSelectedCategory(e.target.value)
    const toggleFilters = () => setShowFilters(!showFilters)

    const filteredProducts = useMemo(() => {
        let filtered = products.filter(product => {
            return (
                product.productName.toLowerCase().includes(searchName.toLowerCase()) &&
                product.priceWithDiscount <= maxPrice &&
                (!isInSale || product.isInSale) &&
                (!isNew || product.isNew) &&
                (selectedCategory === 'All' || product.category === selectedCategory)
            )
        })
        if (sortOrder !== 'default') {
            filtered = filtered.sort((a, b) => {
                if (sortOrder === 'asc') {
                    return a.price - b.price
                } else {
                    return b.price - a.price
                }
            })
        }
        return filtered
    }, [products, searchName, maxPrice, isInSale, isNew, sortOrder, selectedCategory])

    const indexLastProduct = currentPage * productsPerPage
    const indexFirstProduct = indexLastProduct - productsPerPage
    const currentProducts = filteredProducts.slice(indexFirstProduct, indexLastProduct)
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

    const maxPageButtons = 5
    let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2))
    let endPage = startPage + maxPageButtons - 1

    if (endPage > totalPages) {
        endPage = totalPages
        startPage = Math.max(1, endPage - maxPageButtons + 1)
    }

    const handleClick = (pageNumber: number) => {
        
        setCurrentPage(pageNumber) 
    }

    const showProducts = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = parseInt(e.target.value)

        if (parseInt(e.target.value) > 0 && parseInt(e.target.value) <= products.length) {
            setProductsPerPage(value)
            setCurrentPage(1)
        }
    }

    if (loading) {
        return (
            <div className="flex justify-center mx-auto py-10">
                <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
            </div>
        )
    }

    return (
        <>
            <section className="bg-divisorLightBeige h-auto place-content-center">
                <div className="flex flex-col md:flex-row max-w-[1440px] mx-auto py-7 md:justify-around">
                    <div className="flex flex-col md:flex-row gap-10 items-center">
                        <div className="flex flex-row gap-4 items-center">
                            <button
                                className="flex flex-row gap-[0.65rem] items-center cursor-pointer transition ease-in-out hover:scale-110"
                                onClick={toggleFilters}
                            >
                                <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/icons/system-uicons_filtering.svg" alt="Filters Icon" />
                                <p className="font-medium mt-[2px] text-lg">Filter</p>
                            </button>

                            <div className="flex flex-row gap-3 items-center">
                                <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/icons/ci_grid-big-round.svg" alt="Grid Layout Icon" className="w-8 cursor-pointer transition ease-in-out hover:scale-110" />
                                <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/icons/bi_view-list.svg" alt="View Icon" className="cursor-pointer transition ease-in-out hover:scale-110" />
                            </div>
                        </div>

                        <div className="hidden md:flex w-px h-8 bg-caption mx-2"></div>

                        <div className="flex items-center">
                            <p className="text-center">Showing {indexFirstProduct + 1}-{
                                indexLastProduct && indexLastProduct < products.length ? indexLastProduct : products.length
                            } of {products.length} results</p>
                        </div>
                    </div>

                    <div className="flex flex-row gap-4 items-center justify-center mt-10 md:mt-0">
                        <p>Show</p>
                        <input
                            type="number"
                            id="productsPerPage"
                            min={1}
                            onChange={showProducts}
                            placeholder={currentProducts.length.toString()}
                            className="w-14 h-14 bg-white text-center no-spinner outline-none"
                        />
                        <p>Short by</p>
                        <select value={sortOrder} onChange={handleSortOrderChange} className="px-4 py-2 border border-cardWhite rounded-md shadow-sm focus:outline-none focus:ring-buttonDarkBrown focus:border-buttonDarkBrown">
                            <option value="default">Default</option>
                            <option value="asc">Lowest price to Highest</option>
                            <option value="desc">Highest price to Lowest</option>
                        </select>
                    </div>
                </div>
            </section>

            {showFilters &&
                <ProductFilters
                    searchName={searchName}
                    maxPrice={maxPrice}
                    isInSale={isInSale}
                    isNew={isNew}
                    selectedCategory={selectedCategory}
                    onSearchNameChange={handleSearchNameChange}
                    onMaxPriceChange={handleMaxPriceChange}
                    onIsInSaleChange={handleIsInSaleChange}
                    onIsNewChange={handleIsNewChange}
                    onSelectedCategoryChange={handleSelectedCategoryChange}
                />
            }

            <section className="flex flex-col max-w-[1440px] mx-auto gap-8 my-16 ">
                <div className="flex flex-row flex-wrap gap-10 justify-center transition ease-in-out">
                    {currentProducts.map((productCard) => (
                        <ProductsCard
                            key={productCard.SKU}
                            productCard={productCard}
                        />
                    ))}
                </div>

                <div className="flex flex-row flex-wrap gap-8 justify-center pt-6">
                    {startPage > 1 && (
                        <button
                            key="pageFirst"
                            onClick={() => handleClick(1)}
                            className={`bg-divisorLightBeige focus:ring-2 focus:ring-offset-2 focus:ring-buttonDarkBrown rounded-lg px-6 py-4 hover:bg-buttonBrown hover:text-white`}
                        >
                            1
                        </button>
                    )}
                    {startPage > 2 && (
                        <span className="bg-divisorLightBeige focus:ring-2 focus:ring-offset-2 focus:ring-buttonDarkBrown rounded-lg px-6 py-4 hover:bg-buttonBrown hover:text-white cursor-pointer">...</span>
                    )}
                    {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
                        <div key={`page${startPage + index}`} className="flex flex-row gap-8">
                            <button
                                onClick={() => handleClick(startPage + index)}
                                className={currentPage === startPage + index ? 'bg-buttonBrown focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-buttonDarkBrown rounded-lg px-6 py-4 text-white hover:bg-divisorLightBeige hover:text-black' : 'bg-divisorLightBeige focus:ring-2 focus:ring-offset-2 focus:ring-buttonDarkBrown rounded-lg px-6 py-4 hover:bg-buttonBrown hover:text-white'}
                            >
                                {startPage + index}
                            </button>
                        </div>
                    ))}
                    {endPage < totalPages - 1 && (
                        <span className="bg-divisorLightBeige focus:ring-2 focus:ring-offset-2 focus:ring-buttonDarkBrown rounded-lg px-6 py-4 hover:bg-buttonBrown hover:text-white cursor-pointer">...</span>
                    )}
                    {currentPage !== totalPages &&
                        <button
                            onClick={() => handleClick(currentPage + 1)}
                            className={'bg-divisorLightBeige focus:ring-2 focus:ring-offset-2 focus:ring-buttonDarkBrown rounded-lg px-6 py-4 hover:bg-buttonBrown hover:text-white'}
                        >
                            Next
                        </button>
                    }
                </div>
            </section>
        </>
    )
}

export default ProductsList
