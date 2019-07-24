export const UPDATE_PRODUCT = 'products:updateProduct';

export const updateProduct = (newProduct, newPrice) => {
    return {
        type: UPDATE_PRODUCT,
        payload: {
            products: {
                name: newProduct,
                price: newPrice
            }
        }
    }
}