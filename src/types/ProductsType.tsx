interface Product {
    SKU: string
    productName: string
    subtitle: string
    description: string
    additionalInformation: string
    category: string
    photoUrl: string
    additionalPhotosUrl: string[]
    colors: string[]
    sizes: string[]
    tags: string[]
    price: number
    isNew: boolean
    isInSale: boolean
    discountPercentage: number
    priceWithDiscount: number
    rating: number
}

export default Product
