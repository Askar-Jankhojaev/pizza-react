import { useSelector } from 'react-redux'

function InfoPizzaHook() {
    const { cartProducts } = useSelector(state => state.cartProductsSlice)

    const allPrice = cartProducts.reduce((sum, el) => (sum + (el.pizzaCount * el.pizzaPrice)), 0)
    const allCount = cartProducts.reduce((count, el) => count + el.pizzaCount, 0)

    return { allCount, allPrice }
}
export default InfoPizzaHook