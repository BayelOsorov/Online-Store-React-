export const CalcSubPrice = (product) => {
    return product.count * product.product1.price
}
export const calcTotalPrice = (cart) => {
    let sum = 0
    cart.products.forEach(item => {
        sum += item.subPrice
    });
    return sum
}